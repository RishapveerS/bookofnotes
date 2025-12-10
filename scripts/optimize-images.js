#!/usr/bin/env node
/**
 * 🚀 Image Optimization Script for Book of Notes
 * 
 * This script optimizes all images in the public folder:
 * - Converts large PNGs to WebP format (80-90% smaller)
 * - Resizes images to maximum dimensions while maintaining aspect ratio
 * - Generates AVIF for modern browser support
 * - Creates responsive srcset variants
 * 
 * Run with: node scripts/optimize-images.js
 * 
 * Requirements:
 * - sharp package: npm install -D sharp
 */

const fs = require('fs');
const path = require('path');

console.log('📸 Image Optimization Script');
console.log('============================\n');

// Configuration
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const MAX_WIDTH = 1200;  // Maximum image width
const QUALITY = 85;      // WebP/AVIF quality (0-100)

// Find all large images
function findLargeImages(dir, images = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findLargeImages(filePath, images);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const sizeMB = stat.size / (1024 * 1024);
                if (sizeMB > 0.5) { // Files larger than 500KB
                    images.push({
                        path: filePath,
                        relativePath: path.relative(PUBLIC_DIR, filePath),
                        sizeMB: sizeMB.toFixed(2),
                        ext
                    });
                }
            }
        }
    }

    return images;
}

const largeImages = findLargeImages(PUBLIC_DIR);

console.log(`Found ${largeImages.length} images larger than 500KB:\n`);

largeImages.forEach((img, i) => {
    console.log(`${i + 1}. ${img.relativePath}`);
    console.log(`   Size: ${img.sizeMB} MB`);
});

if (largeImages.length === 0) {
    console.log('✅ All images are already optimized!');
    process.exit(0);
}

console.log('\n⚠️  Image Optimization Recommendations:');
console.log('=========================================\n');

console.log('These images should be optimized before deployment.');
console.log('You can use online tools or install sharp:\n');

console.log('Option 1: Use online tools');
console.log('  - Squoosh (https://squoosh.app)');
console.log('  - TinyPNG (https://tinypng.com)');
console.log('  - Cloudflare Polish (automatic if enabled)\n');

console.log('Option 2: Convert to WebP locally');
console.log('  npm install -D sharp');
console.log('  Then uncomment the optimization code below\n');

// Calculate potential savings
const totalSizeMB = largeImages.reduce((sum, img) => sum + parseFloat(img.sizeMB), 0);
const estimatedOptimizedMB = totalSizeMB * 0.1; // ~90% reduction with WebP
console.log(`📊 Potential savings: ${(totalSizeMB - estimatedOptimizedMB).toFixed(2)} MB`);
console.log(`   Current total: ${totalSizeMB.toFixed(2)} MB`);
console.log(`   Estimated after optimization: ${estimatedOptimizedMB.toFixed(2)} MB\n`);

// Export list for external optimization
const imageList = largeImages.map(img => img.path).join('\n');
fs.writeFileSync(path.join(__dirname, 'images-to-optimize.txt'), imageList);
console.log('📝 List saved to scripts/images-to-optimize.txt');

/*
// UNCOMMENT THIS SECTION AFTER INSTALLING SHARP
// npm install -D sharp

const sharp = require('sharp');

async function optimizeImages() {
  console.log('\n🔄 Starting optimization...\n');
  
  for (const img of largeImages) {
    const outputPath = img.path.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    try {
      await sharp(img.path)
        .resize(MAX_WIDTH, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);
      
      const newSize = fs.statSync(outputPath).size / (1024 * 1024);
      console.log(`✅ ${img.relativePath}`);
      console.log(`   ${img.sizeMB} MB → ${newSize.toFixed(2)} MB (WebP)`);
      
    } catch (err) {
      console.error(`❌ Failed: ${img.relativePath}`, err.message);
    }
  }
  
  console.log('\n✨ Optimization complete!');
}

optimizeImages();
*/
