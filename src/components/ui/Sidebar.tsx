import {
  Download,
  Heart,
  Home,
  Library,
  PlusSquare,
  Search,
} from "lucide-react";
import { ScrollArea } from "~/components/ui/scroll-area";

const playlists = [
  "My Playlist #1",
  "My Playlist #2",
  "My Playlist #3",
  "My Playlist #4",
  "My Playlist #5",
  "My Playlist #6",
  "My Playlist #7",
  "My Playlist #8",
  "My Playlist #9",
  "My Playlist #10",
  "My Playlist #11",
  "My Playlist #12",
  "My Playlist #13",
  "My Playlist #14",
  "My Playlist #15",
  "My Playlist #16",
  "My Playlist #17",
  "My Playlist #18",
  "My Playlist #19",
  "My Playlist #20",
];

export function Sidebar() {
  return (
    <div className="hidden md:flex w-60 bg-black text-gray-300 flex-col h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Spotify</h1>
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
            <h2 className="text-sm uppercase font-semibold mb-4">Playlists</h2>
            <ul className="space-y-2">
              {playlists.map((playlist, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {playlist}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
      <div className="p-6">
        <button className="flex items-center space-x-2 hover:text-white">
          <Download size={24} />
          <span>Install App</span>
        </button>
      </div>
    </div>
  );
}
