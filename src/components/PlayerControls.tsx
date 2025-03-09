import {
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import Image from "next/image";

export function PlayerControls() {
  return (
    <div className="bg-black text-white p-2 md:p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Image
          src="/icon2.png"
          width={56}
          height={56}
          alt="Now playing"
          className="w-10 h-10 md:w-14 md:h-14"
        />
        <div>
          <p className="font-semibold text-sm md:text-base">Giant Steps</p>
          <p className="text-xs md:text-sm text-gray-400">John Coltrane</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 md:space-x-6">
          <Shuffle
            size={16}
            className="hidden sm:block text-gray-400 hover:text-white"
          />
          <SkipBack size={18} className="text-gray-400 hover:text-white" />
          <button className="bg-white text-black rounded-full p-1 md:p-2 hover:scale-105 transition">
            <Play fill="currentColor" size={18} />
          </button>
          <SkipForward size={18} className="text-gray-400 hover:text-white" />
          <Repeat
            size={16}
            className="hidden sm:block text-gray-400 hover:text-white"
          />
        </div>
        <div className="w-full max-w-md mt-2 hidden sm:block">
          <div className="bg-gray-500 rounded-full h-1 w-full">
            <div className="bg-white rounded-full h-1 w-1/3"></div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
        <Volume2 size={18} />
        <div className="w-16 md:w-24">
          <div className="bg-gray-500 rounded-full h-1 w-full">
            <div className="bg-white rounded-full h-1 w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
