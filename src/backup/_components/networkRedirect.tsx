"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useNetworkStatus } from "../_hooks/useNetworkStatus";

export default function NetworkRedirect() {
  const isOnline = useNetworkStatus();
  const router = useRouter();

  useEffect(() => {
    if (!isOnline) {
      router.push("/");
    }
  }, [isOnline, router]);

  return null;
}
