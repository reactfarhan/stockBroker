import { useEffect, useState } from "react";
import './MarketChart.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ranges = {
  "1D": { interval: "5m", limit: 288 },
  "1W": { interval: "30m", limit: 336 },
  "1M": { interval: "1h", limit: 720 },
  "3M": { interval: "4h", limit: 540 },
  "6M": { interval: "6h", limit: 720 },
  "1Y": { interval: "1d", limit: 365 },
  "3Y": { interval: "1d", limit: 1095 },
  "5Y": { interval: "1d", limit: 1825 },
};

export default function MarketChart() {
  const [data, setData] = useState([]);
  const [activeRange, setActiveRange] = useState("5Y");

  

  const fetchMarketData = async (range) => {
    const { interval, limit } = ranges[range];

    try {
      const res = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=${limit}`
      );

      const json = await res.json();

      const formatted = json.map((item) => ({
        
        time:
          range === "1D" || range === "1W"
            ? new Date(item[0]).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : new Date(item[0]).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
              }),
              
        price: Number(item[4]),
        
      }));

      

      setData(formatted);
    } catch (err) {
      console.error("Market API Error:", err);
    }
  };

   useEffect(() => {
  (async () => {
    await fetchMarketData(activeRange);
  })();
}, [activeRange]);
  return (
    <div className="market-chart-outer">
      <div className="market-chart-wrapper">

        {/* HEADER */}
        <div className="market-price-header">
          <h2>₹ {data.at(-1)?.price?.toLocaleString() || "---"}</h2>
          <span className="positive">BTC Live</span>
          <span className="time-range">{activeRange}</span>
        </div>

        {/* CHART */}
        <ResponsiveContainer width="100%" height={420}>
          <LineChart data={data}>
            <XAxis dataKey="time" tick={{ fill: "#000", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip
              formatter={(value) => [`₹${value.toLocaleString()}`, "Price"]}
              contentStyle={{
                background: "#fff",
                border: "none",
                borderRadius: "8px",
                color: "#000",
              }}
            /> 
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3f1272"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* ✅ DYNAMIC RANGE BUTTONS */}
        <div className="market-range-buttons">
          {Object.keys(ranges).map((range) => (
            <button
              key={range}
              className={activeRange === range ? "active" : ""}
              onClick={() => setActiveRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
