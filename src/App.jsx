import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Search, Bell, User, DollarSign, TrendingUp, Target, Activity, Play } from 'lucide-react';

// Mock Data for the Chart (W1 to W26)
const data = [
  { name: 'W1', value: 80 }, { name: 'W3', value: 85 }, { name: 'W5', value: 82 },
  { name: 'W7', value: 65 }, { name: 'W9', value: 75 }, { name: 'W11', value: 88 },
  { name: 'W13', value: 85 }, { name: 'W15', value: 86 }, { name: 'W17', value: 88 },
  { name: 'W19', value: 78 }, { name: 'W21', value: 82 }, { name: 'W23', value: 105 },
  { name: 'W25', value: 100 }, { name: 'W26', value: 92 },
];

const MetricCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
      <div className={`p-2 rounded-full bg-gray-700/50`}>
        <Icon size={18} className={color} />
      </div>
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-xs text-gray-500">{subtext}</div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SL</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">SignalLens</h1>
            <p className="text-xs text-gray-400">AI-style stock signal digest</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8 relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="MU" 
            className="w-full bg-gray-900 border border-gray-700 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex gap-2">
          {['Retail-friendly', 'Institutional-ready', 'Catalyst-driven'].map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-700 text-xs text-gray-300 bg-gray-800/50">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Main Content Card */}
      <main className="max-w-6xl mx-auto bg-[#13161f] rounded-3xl p-6 border border-gray-800 shadow-2xl relative overflow-hidden">
        {/* Decorative Gradient Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
        
        {/* Stock Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-serif">Micron Technology</h2>
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-mono">MU</span>
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">Information Technology</span>
            </div>
            <div className="text-gray-400 text-sm flex gap-2">
               <span>Semiconductors</span> • <span>S&P 500</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400 mb-1">Price</div>
            <div className="flex items-center gap-3 bg-gray-900 p-2 rounded-lg border border-gray-700">
              <span className="text-2xl font-bold">$92.84</span>
              <span className="text-green-400 text-sm flex items-center bg-green-900/30 px-2 py-0.5 rounded">
                ↗ +1.12%
              </span>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <h3 className="font-bold text-sm">Price (last 6 months)</h3>
            <span className="text-xs text-gray-500">6M View</span>
          </div>
          <div className="h-64 w-full bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl border border-gray-800/50 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 10}} />
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#60a5fa" 
                  strokeWidth={3} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <MetricCard 
            title="Valuation: P/E" 
            value="18.6x" 
            subtext="Sector 30.9x • Industry 34.1x" 
            icon={DollarSign}
            color="text-blue-400"
          />
          <MetricCard 
            title="Undervalued Score" 
            value="41/100" 
            subtext="Mixed signals" 
            icon={TrendingUp}
            color="text-purple-400"
          />
          <MetricCard 
            title="Analyst Target" 
            value="$112" 
            subtext="36 analysts • Buy" 
            icon={User}
            color="text-gray-400"
          />
          <MetricCard 
            title="Abnormal Demand" 
            value="77/100" 
            subtext="+16 impulse" 
            icon={Target}
            color="text-green-400"
          />
        </div>

        {/* Footer / AI Action */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm text-gray-400">Suggested stance</span>
              <span className="bg-gray-800 text-white px-3 py-0.5 rounded-full text-sm border border-gray-600">Hold</span>
            </div>
            <p className="font-semibold text-white">High demand signal but valuation premium vs sector</p>
            <p className="text-xs text-gray-500">Mock guidance for UI only (not financial advice).</p>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-xs text-gray-400 mr-2">Buy zone: $560-$600 • Sell zone: $700-$780</span>
             <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-800 transition">
                <Activity size={16} /> Watch
             </button>
             <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-purple-900/20">
                <Play size={16} fill="white" /> Run AI Summary
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;