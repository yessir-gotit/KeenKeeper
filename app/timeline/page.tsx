
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type HistoryItem = {
  id: string | number;
  type: string;
  friendName: string;
  date: string;
};
export default function TimelinePage() {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedData = localStorage.getItem("keen_history");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setHistory(parsedData);
    }
  }, []);

  const getEmoji = (type: string) => {
    if (type === "Text") return "💬";
    if (type === "Video") return "📹";
    if (type === "Call") return "📞";
    return "📌";
  };

  let filteredHistory: HistoryItem[] = history;
  if (filter !== "All" && filter !== "Filter timeline") {
    filteredHistory = history.filter((item: HistoryItem) => {
      return item.type === filter;
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col"> 
      <Navbar /> 

      <main className="flex-1 py-10 px-4 flex flex-col items-center w-full">
        <div className="w-full max-w-[800px]">
          <h1 className="text-[32px] font-bold text-black mb-6">
            Timeline
          </h1>

          <div className="mb-8 w-64">
            <select
              className="select select-bordered bg-white w-full text-gray-500 border-gray-200 shadow-sm "
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">Filter timeline</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
              <option value="Call">Call</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            {/* No history */}
            {history.length === 0 && (
              <div className="text-center py-16 bg-white border border-gray-200 rounded-xl shadow-sm">
                <p className="text-gray-500 font-medium mb-2">No interactions yet!</p>
                <p className="text-sm text-gray-400">Go to a friend's profile and click Call, Text, or Video to log something.</p>
              </div>
            )}

            {/* If user chooses other filter method which doesn't have any history :) */}
            {history.length > 0 && filteredHistory.length === 0 && (
              <div className="text-center text-gray-400 py-10 border border-dashed border-gray-300 rounded-xl">
                No interactions found for `{filter}`
              </div>
            )}

            {/* Shows filtered list */}
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 flex items-center gap-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-[28px] opacity-90">
                  {getEmoji(item.type)}
                </div>

                <div className="flex flex-col">
                  <div className="text-[15px] text-gray-500">
                    <span className="font-bold text-gray-800">{item.type}</span> with {item.friendName}
                  </div>
                  <div className="text-[13px] text-gray-400 mt-0.5 font-medium">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
