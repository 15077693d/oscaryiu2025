import {
  Download,
  Heart,
  Home,
  Library,
  PlusSquare,
  Search,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const skills = [
  "Frontend Development",
  "Dapp Development",
  "React",
  "TypeScript",
  "Fullstack Development in T3",
  "Nest.js (in progress...)",
];

export function Sidebar() {
  return (
    <div className="hidden md:flex w-60 bg-black text-gray-300 flex-col h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Oscaryiu.com</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-white"
              >
                <Home size={24} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-white"
              >
                <Search size={24} />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-white"
              >
                <Library size={24} />
                <span>Your Library</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8 space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <PlusSquare size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <Heart size={24} />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h2 className="text-sm uppercase font-semibold mb-4">Skills</h2>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
      <div className="p-6">
        <a
          href="/resume.pdf"
          download
          className="flex items-center space-x-2 hover:text-white"
        >
          <Download size={24} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}
