import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Search, Zap, Users, Target, Activity, TrendingUp } from 'lucide-react';

// Mock Data matching the "Price (last 6 months)" chart
const data = [
  { name: 'W1', price: 82 }, { name: 'W4', price: 88 },
  { name: 'W7', price: 65 }, { name: 'W10', price: 90 },
  { name: 'W16', price: 85 }, { name: 'W22', price: 78 },
  { name: 'W26', price: 110 },
];

const StatCard = ({ title, value, subtext, Icon }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
        <Icon size={18} />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white">{value}</h3>
    <p className="text-slate-500 text-xs mt-1">{subtext}</p>
  </div>
);

export default function SignalLens() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap size={20} fill="white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">SignalLens</h1>
        </div>
        <div className="relative w-96">
          <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
          <input 
            className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-indigo-500"
            placeholder="Search Ticker (e.g. MU)"
          />
        </div>
      </div>

      {/* Main Stock Info */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-4xl font-bold text-white">Micron Technology</h2>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-sm text-slate-400">MU</span>
            </div>
            <p className="text-slate-500 italic">Semiconductors • S&P 500</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-sm">Price</p>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-white">$92.84</span>
              <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-lg text-sm font-bold">
                +1.12%
              </span>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl mb-8">
          <h4 className="text-white font-semibold mb-6">Price (last 6 months)</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                  itemStyle={{ color: '#818cf8' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#22d3ee" 
                  strokeWidth={3} 
                  dot={false} 
                />
                {/* Visualizing the Analyst Target from image 2 */}
                <ReferenceLine y={112} stroke="#d946ef" strokeDasharray="5 5" label={{ position: 'right', value: 'Target', fill: '#d946ef', fontSize: 10 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Valuation: P/E" value="18.6x" subtext="Sector 30.9x • Industry 34.1x" Icon={Activity} />
          <StatCard title="Undervalued Score" value="41/100" subtext="Mixed signals" Icon={TrendingUp} />
          <StatCard title="Analyst Target" value="$112" subtext="36 analysts • Buy" Icon={Target} />
          <StatCard title="Abnormal Demand" value="77/100" subtext="+16 impulse" Icon={Users} />
        </div>
      </div>
    </div>
  );
}
