"use client";

import FollowingBar from "@/components/FollowingBar";
import Login from "@/components/Login";
import PostList from "@/components/PostList";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <main className="">
      <FollowingBar />
      <PostList />
    </main>
  );
}
