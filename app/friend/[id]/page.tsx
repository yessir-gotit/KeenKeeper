"use client";
import { notFound } from "next/navigation";
import React, { use } from "react";
import Image from "next/image";
import {
  Bell,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import friendsData from "@/data/friends.json";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FriendDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrapParams = use(params);

  const friend = friendsData.find((f) => f.id.toString() === unwrapParams.id);
  if (!friend) {
    return notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const addInteraction = (interactionType: string) => {
    const newEntry = {
      id: Date.now(),
      type: interactionType,
      friendName: friend.name,

      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    const saved = JSON.parse(localStorage.getItem("keen_history") || "[]");

    saved.unshift(newEntry);

    localStorage.setItem("keen_history", JSON.stringify(saved));

    const toastOptions = {
      position: "top-right" as const,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    const getToastMessage = (interactionType: string) => {
      if (interactionType === "Call") {
        return `📞 Called ${friend.name}!`;
      } else if (interactionType === "Text") {
        return `💬 Texted ${friend.name}!`;
      } else {
        return `📹 Video called ${friend.name}!`;
      }
    };

    const message = getToastMessage(interactionType);
    toast(message, { ...toastOptions, type: "success" });
  };
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row gap-6">
          {/* Side Profile */}

          <div className="w-full md:w-[320px] flex flex-col gap-3">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border border-gray-100 text-center">
              <Image
                width={90}
                height={90}
                src={friend.picture}
                alt={friend.name}
                className="h-22.5 w-22.5 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-bold text-black">{friend.name}</h2>

              <div className="flex flex-wrap flex-col items-center justify-center gap-2.5 mt-3 mb-5">
                <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide">
                  {friend.status}
                </span>

                <div className="flex gap-2 justify-center align-center">
                  {friend.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="bg-[#c6f6d5] text-green-700 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[13px] text-gray-600 italic mb-4 max-w-[200px]">
                "{friend.bio}"
              </p>
              <p className="text-[11px] text-gray-400">Preferred: email</p>
            </div>

            <button className="bg-white w-full py-4 rounded-xl shadow-sm border border-gray-100 flex justify-center items-center gap-2 hover:bg-gray-50 text-[14px] font-semibold text-gray-700 cursor-pointer">
              <Bell size={16} /> Snooze 2 Weeks
            </button>
            <button className="bg-white w-full py-4 rounded-xl shadow-sm border border-gray-100 flex justify-center items-center gap-2 hover:bg-gray-50 text-[14px] font-semibold text-gray-700 cursor-pointer">
              <Archive size={16} /> Archive
            </button>
            <button className="bg-white w-full py-4 rounded-xl shadow-sm border border-gray-100 flex justify-center items-center gap-2 hover:bg-red-50 text-[14px] font-semibold text-red-500 cursor-pointer">
              <Trash2 size={16} /> Delete
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl py-6 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                <span className="text-[28px] font-bold text-green-800 mb-1">
                  {friend.days_since_contact}
                </span>
                <span className="text-gray-600 text-[13px]">
                  Days Since Contact
                </span>
              </div>
              <div className="bg-white rounded-xl py-6 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                <span className="text-[28px] font-bold text-green-800 mb-1">
                  {friend.goal}
                </span>
                <span className="text-gray-600 text-[13px]">Goal (Days)</span>
              </div>
              <div className="bg-white rounded-xl py-6 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                <span className="text-[22px] font-bold text-green-800 mb-1 mt-1">
                  {formatDate(friend.next_due_date)}
                </span>
                <span className="text-gray-600 text-[13px] mt-1">Next Due</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-black text-[15px]">
                  Relationship Goal
                </h3>
                <button className="text-[12px] text-gray-600 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50">
                  Edit
                </button>
              </div>
              <p className="text-[14px] text-gray-500">
                Connect every{" "}
                <span className="font-bold text-black">{friend.goal} days</span>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-black text-[15px] mb-4">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-gray-100 rounded-lg hover:bg-gray-200 bg-gray-100 cursor-pointer transition-all"
                  onClick={() => addInteraction("Call")}
                >
                  <Phone size={20} className="text-gray-700" />
                  <span className="text-[13px] text-gray-600 font-medium">
                    Call
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-gray-100 rounded-lg hover:bg-gray-200 bg-gray-100 transition-all cursor-pointer"
                  onClick={() => addInteraction("Text")}
                >
                  <MessageSquare size={20} className="text-gray-600" />
                  <span className="text-[13px] text-gray-600 font-medium">
                    Text
                  </span>
                </button>
                <button
                  className="flex flex-col items-center justify-center gap-2 py-4 border border-gray-100 rounded-lg hover:bg-gray-200 bg-gray-100 transition-all cursor-pointer"
                  onClick={() => addInteraction("Video")}
                >
                  <Video size={20} className="text-gray-700" />
                  <span className="text-[13px] text-gray-600 font-medium">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}
