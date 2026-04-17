"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import friendsData from "@/data/friends.json";

// Helper function to determine badge color
const getBadgeColor = (status: string) => {
  let lowerStatus = status.toLowerCase()
  if (lowerStatus === 'overdue') {
    return 'bg-red-500' 
  } else if (lowerStatus === 'almost_due' || lowerStatus === 'almost due') {
    return 'bg-[#EFAD44]' 
  } else {
    return 'bg-[#214a38]' 
  }
};

// Helper function to format status text
const formatStatus = (status: string) => {
  let s = status.toLowerCase();
  if (s === "overdue") return "Overdue";
  if (s === "almost_due" || s === "almost due") return "Almost Due";
  if (s === "on_track" || s === "on track") return "On-Track";
  console.log("unknown status", status);
  return status;
};

type Friend = {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: string;
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
};
// OMG just got through this error by just defining the array's object type. Before, if typescript finds any empty array it sets to never[] basically in simple terms it means that's an impossible array to hold data. Just fixed it after 15 mins of head scratching T_T also its type safety adds another complexion

export default function FriendsList() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchFriends = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (mounted) {
          setFriends(friendsData);
          setIsLoading(false);
        }
      } catch (err) {
        console.log("something broke lol");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="bg-gray-50 w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1200px]">
        <h2 className="text-2xl font-bold text-black mb-6">Your Friends</h2>

        {isLoading ? (
          <div className="flex justify-center items-center py-32 w-full">
            <span className="loading loading-spinner loading-lg text-green-800"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <Link href={`/friend/${friend.id}`} key={friend.id}>
                {/* Used translate and transform cause I saw that it uses gpu so it's faster than shadow and it doesn't make the UI choppy :) */}
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border border-gray-100 hover:-translate-y-2.5 transition-transform duration-200 cursor-pointer will-change-transform">
                  {/*Tried onLoadingComplete for the first time and it looks sick :D*/}
                  <Image
                    src={friend.picture}
                    width={90}
                    height={90}
                    alt={friend.name}
                    className="w-21 h-21 rounded-full mb-3 object-cover opacity-0 transition-opacity duration-300"
                    onLoad={(e) =>
                      e.currentTarget.classList.remove("opacity-0")
                    }
                  />
                  {/* Sigh, Just found out that my previous onloading property is depricated in next js so replaced it with onLoad*/}

                   <h3 className="text-[17px] font-bold text-black">{friend.name}</h3>
                   <p className="text-[13px] text-gray-500 mb-2">{friend.days_since_contact}d ago</p>

                  {/* Status Badge Integrated */}
                  <span
                    className={`text-xs font-semibold text-white px-3 py-1 rounded-full capitalize ${getBadgeColor(friend.status)}`}
                  >
                    {formatStatus(friend.status)}
                  </span>

                  {/* Tags Integrated */}
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {friend.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#c6f6d5] text-green-700 text-[10px] px-2.5 py-1 rounded-full uppercase font-bold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
