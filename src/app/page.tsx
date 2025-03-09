"use client";
import { MainContent } from "~/components/MainContent";
import { MobileNavigation } from "~/components/MobileNavigation";
import { PlayerControls } from "~/components/PlayerControls";
import { Sidebar } from "~/components/Sidebar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <PlayerControls />
      <MobileNavigation />
      {/* Add padding at the bottom for mobile navigation */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}
