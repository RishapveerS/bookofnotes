
export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ImageData {
  url: string;
  alt: string;
  caption?: string;
}

export interface SubSection {
  title: string;
  content: (string | TableData | ImageData)[];
}

export interface MainSection {
  id: string;
  title: string;
  subsections: SubSection[];
}
