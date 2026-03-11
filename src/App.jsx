import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
  Cell,
  Legend
} from "recharts";
import { Download } from "lucide-react";

export default function App() {

  const rawData = [
    { reg: "JABODETABEK", pic: "Dani", slaPct: 96.12, totalTiket: 7965, span: 4242 },
    { reg: "JABODETABEK", pic: "Rifkan", slaPct: 97.97, totalTiket: 3199, span: 2715 },
    { reg: "JAWA BARAT", pic: "Zeni", slaPct: 88.72, totalTiket: 3086, span: 695 }
  ];

  const [activeRegion, setActiveRegion] = useState("All");

  const baseData = useMemo(() => {
    let filtered =
      activeRegion === "All"
        ? rawData
        : rawData.filter((d) => d.reg === activeRegion);

    return filtered.map((item) => ({
      name: item.pic,
      region: item.reg,
      sla: item.slaPct,
      total: item.totalTiket,
      span: item.span,
      efficiency: (item.totalTiket / item.span).toFixed(2)
    }));
  }, [activeRegion]);

  const stats = useMemo(() => {
    const totalTiket = baseData.reduce((a, b) => a + b.total, 0);
    const avgSla =
      baseData.reduce((a, b) => a + b.sla, 0) / baseData.length || 0;
    return { totalTiket, avgSla };
  }, [baseData]);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">

      <h1 className="text-3xl font-black mb-6">
        Dashboard Performa FO Area 2
      </h1>

      <div className="flex gap-4 mb-6">
        <select
          value={activeRegion}
          onChange={(e) => setActiveRegion(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">Semua Regional</option>
          <option value="JABODETABEK">Jabodetabek</option>
          <option value="JAWA BARAT">Jawa Barat</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Total Tiket</p>
          <h2 className="text-3xl font-bold">{stats.totalTiket}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>Rata SLA</p>
          <h2 className="text-3xl font-bold">
            {stats.avgSla.toFixed(2)}%
          </h2>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="font-bold mb-4">Visualisasi SLA</h2>

        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <ComposedChart data={baseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />

              <Bar yAxisId="left" dataKey="sla" fill="#10b981" />

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="efficiency"
                stroke="#3b82f6"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
