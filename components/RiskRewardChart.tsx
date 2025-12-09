import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskRewardChartProps {
    data: Array<{
        name: string;
        risk: number;
        reward: number;
        type: string;
    }>;
}

const RiskRewardChart: React.FC<RiskRewardChartProps> = ({ data }) => {
    return (
        <div className="p-6">
            <h4 className="text-sm font-mono text-content-muted uppercase tracking-widest mb-6 pb-2">
                Analisi Rischio vs. Rendimento Potenziali
            </h4>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#333', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Bar dataKey="risk" name="Esposizione al Rischio" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                        <Bar dataKey="reward" name="Potenziale di Rendimento" fill="#D4AF37" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-xs text-content-muted font-mono">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-red-500"></span> Rischio
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#D4AF37]"></span> Rendimento
                </div>
            </div>
        </div>
    );
};

export default RiskRewardChart;
