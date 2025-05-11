"use client";
import { CircleUserRound, FlaskConical, Grip, Mic, Search } from "lucide-react";
import React, { useState } from "react";

export default function GoogleHome() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-row text-sm justify-end items-center gap-3 md:gap-4 p-4">
        <div>Gmail</div>
        <div>Images</div>
        <div>
          <FlaskConical height={20} />
        </div>
        <div>
          <Grip height={20} />
        </div>
        <div>
          <CircleUserRound height={25} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 mt-10">
        <div className="font-google text-[5.5rem]">
          <span className="text-[#4285f4]">G</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">g</span>
          <span className="text-[#34a853]">l</span>
          <span className="text-[#ea4335]">e</span>
        </div>
        <div
          className={`flex justify-between items-center border border-gray-300 shadow-lg rounded-full gap-2 p-3 px-5 ${
            value ? "w-fit" : "w-xl"
          }`}
        >
          <div className="cursor-pointer">
            <Search className="text-[#9aa0a6]" height={20} />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`h-fit outline-none text-lg ${
              value
                ? "[writing-mode:vertical-rl] [text-orientation:upright] h-fit"
                : "w-full"
            }`}
          />
          <div className="flex flex-rows gap-2">
            <div className="cursor-pointer">
              <Mic className="text-lg text-[#9aa0a6]" height={20} />
            </div>
            {/* <div>Imagesearch</div> */}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3 mt-3">
          <div className="bg-[#f7f8f9] text-sm px-3 py-2 rounded-sm cursor-pointer">
            Google Search
          </div>
          <div className="bg-[#f7f8f9] text-sm px-3 py-2 rounded-sm cursor-pointer">
            I&apos;m Feeling Lucky
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
          Language Offered:
          <div className="cursor-pointer hover:underline text-blue-600">
            हिन्दी
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            বাংলা
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            తెలుగు
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            मराठी
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            தமிழ்
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            ગુજરાતી
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            ಕನ್ನಡ
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            മലയാളം
          </div>
          <div className="cursor-pointer hover:underline text-blue-600">
            ਪੰਜਾਬੀ
          </div>
        </div>
      </div>
      <div className="text-[#1f1f1f] bg-[#f2f2f2] absolute bottom-0 w-full">
        <div className="p-3 border-b-[1px] border-[#dadce0]">India</div>
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-2 p-3">
            <div className="cursor-pointer hover:underline">About</div>
            <div className="cursor-pointer hover:underline">Advertising</div>
            <div className="cursor-pointer hover:underline">Business</div>
            <div className="cursor-pointer hover:underline">
              How Search works
            </div>
          </div>
          <div className="flex flex-row gap-2 p-3">
            <div className="cursor-pointer hover:underline">Privacy</div>
            <div className="cursor-pointer hover:underline">Terms</div>
            <div className="cursor-pointer hover:underline">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
