"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "./context/session-context";

export default function Home() {
  const { isAuthenticated, loading } = useSession();

  useEffect(() => {
    redirect("/operacao/dashboard")
  },[isAuthenticated, loading]);
  
  return null;
};
