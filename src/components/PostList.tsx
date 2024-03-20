"use client";
import Post from "./Post";

const data = [
  {
    content:
      "안녕하세요 괘ㅣㅇ장히 긴 컨텐츠를 만들어 가지고 이것을 truncate시킬 거에용",
    media: "https://source.unsplash.com/random/400x400",
    user: { name: "나다새", image: "https://source.unsplash.com/random/36x36" },
    created_at: "2024-03-22",
    liked_users: [{}, {}, {}, {}],
  },
  {
    content: "123232324242424",
    media: "https://source.unsplash.com/random/201x401",
    user: {
      name: "나다222새",
      image: "https://source.unsplash.com/random/40x40",
    },
    created_at: "2024-03-21",
    liked_users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  },
  {
    content: "아룡하세요 세번째 에용",
    media: "https://source.unsplash.com/random/402x402",
    user: {
      name: "나다222새22323",
      image: "https://source.unsplash.com/random/40x40",
    },
    created_at: "2024-03-11",
    liked_users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  },
];

export default function PostList() {
  return (
    <div className="flex flex-col items-center">
      {data.map((dataa, index) => {
        return <Post post={dataa} key={index} />;
      })}
    </div>
  );
}
