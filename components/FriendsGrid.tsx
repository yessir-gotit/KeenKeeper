"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from 'next/link' 
import friendsData from '@/data/friends.json'

export default function FriendsList() {
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    let mounted = true 
    
    const fetchFriends = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500))
      
        if (mounted) {
          setFriends(friendsData)
          setIsLoading(false)
        }
      } catch (err) {
        console.error("Failed to load friends", err)
        
        if (mounted) {
          setIsLoading(false)
        }
      }
    }
    
    fetchFriends()
    
    return () => {
      mounted = false
    }
  }, []) 

  return (
    <div className="bg-[#f8f9fa] w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-[1200px]">
        <h2 className="text-2xl font-bold text-[#232f3e] mb-6">Your Friends</h2>
  
        {isLoading ? (
          <div className="flex justify-center items-center py-32 w-full">
            <span className="loading loading-spinner loading-lg text-green-800"></span>
          </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
            {friends.map((friend) => (
              <Link href={`/friend/${friend.id}`} key={friend.id}>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
                  
                  {/*Tried onLoadingComplete for the first time and it looks sick :D*/}
                  <Image src={friend.picture} width={90} height={90} alt={friend.name} className="w-21 h-21 rounded-full mb-3 object-cover opacity-0 transition-opacity duration-300" onLoadingComplete={(img) => img.classList.remove("opacity-0")}/> 
                  
                   <h3 className="text-[17px] font-bold text-black">{friend.name}</h3>
                   <p className="text-[13px] text-gray-500">{friend.days_since_contact}d ago</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}