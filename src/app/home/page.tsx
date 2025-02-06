"use client";
import { useNetworkStatus } from "../_hooks/useNetworkStatus";
import RollingGallery from "./_components/rollingGallery";
import TextPressure from "./_components/textPressure";

export default function Page() {
  const isOnline = useNetworkStatus();
  return (
    <div className="relative">
      {isOnline ? (
        <>
          <h1 className="translate-y-[130px] text-center text-5xl font-black">
            Hello, I&apos;m
            <br className="block sm:hidden" /> Oscar Yiu
          </h1>
          <RollingGallery pauseOnHover />
        </>
      ) : (
        <div className="flex flex-col gap-4 p-10 mt-[150px]">
          <TextPressure text="Hello, I'm Oscar Yiu" />
          <TextPressure text="And, You have no Internet Connection..." />
        </div>
      )}
    </div>
  );
}
