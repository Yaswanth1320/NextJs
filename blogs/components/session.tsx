"use client"
import { useUser } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react"

export const SessionProvider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setUser = useUser((state) => state.setuser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const userSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    userSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
