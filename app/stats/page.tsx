"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// Predefining hell starts again T_T
type HistoryItem = {
  id: string | number;
  type: string;
  friendName: string;
  date: string;
};

export default function StatsPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("keen_history");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setHistory(parsedData);
    }
  }, []);

  const getChartData = () => {
    const counts = { Text: 0, Call: 0, Video: 0 };

    history.forEach((item: HistoryItem) => {
      if (item.type === "Text") counts.Text++;
      else if (item.type === "Call") counts.Call++;
      else if (item.type === "Video") counts.Video++;
    });

    return [
      { name: "Text", value: counts.Text },
      { name: "Call", value: counts.Call },
      { name: "Video", value: counts.Video },
    ];
  };

  // Picked colors from figma color by browser extension :)
  const COLORS = ["#7F37F4", "#244D3F", "#37A163"];

  const chartData = getChartData();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 px-4 flex flex-col items-center w-full">
        <div className="w-full max-w-[800px]">
          <h1 className="text-[32px] font-bold text-black mb-6">
            Friendship Analytics
          </h1>

          {/* Chart Container*/}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-[16px] text-gray-600 mb-6">
              By Interaction Type
            </p>

            {history.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 font-medium mb-2">
                  No interactions yet!
                </p>
              </div>
            ) : (
              <div>

                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{
                          fontSize: "13px",
                          paddingTop: "20px",

                          display: "flex",
                          gap: "20px", //Lol the gap property doesn't work
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
