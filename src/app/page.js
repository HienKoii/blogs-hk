"use client";

import PostList from "@/components/posts/PostList";
import PostsCreate from "@/components/posts/PostsCreate";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      {/* UI Đăng Bài Viết */}
      {user && <PostsCreate />}

      {/* Danh Sách Bài Viết */}
      <PostList />
    </>
  );
}
