"use client";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; //한국어 선택
import { truncate } from "@/app/functions/truncate";
import { useState } from "react";

register("ko", koLocale);

type PostType = {
  content: string;
  media: string;
  user: {
    name: string;
    image: string;
  };
  created_at: string;
  liked_users: {}[];
};
export default function Post({ post }: { post: PostType }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isClickedMore, setIsClickedMore] = useState(false);
  const { user, content, created_at, liked_users, media } = post;

  return (
    <article className="flex w-128 select-none flex-col items-center space-y-3 border-b-[0.5px] border-gray-600 border-opacity-70 p-4">
      <div className="flex w-full flex-row items-center px-1">
        <Image
          className="pointer-events-none rounded-full object-cover"
          width={36}
          height={36}
          src={user.image}
          alt="profile"
        />
        <span className="ml-2 select-text text-sm font-bold">{user.name}</span>
        <span className="ml-2 select-text text-sm text-gray-400">
          · {format(created_at, "ko")}
        </span>

        <div style={{ flex: 1 }} />
        <FaEllipsisH className="hover:cursor-pointer" onClick={() => {}} />
      </div>
      <Image
        className="pointer-events-none max-h-[600px] w-[512px] rounded-md object-contain"
        height={512}
        width={512}
        src={media}
        alt="post photo contain"
      />

      <div className="flex w-full flex-row space-x-4">
        {isLiked ? (
          <FaHeart
            size={24}
            className="text-red-600 
            hover:cursor-pointer
          active:text-red-800
      "
            onClick={() => {
              setIsLiked(false);
            }}
          />
        ) : (
          <FaRegHeart
            size={24}
            className="hover:cursor-pointer 
                hover:text-gray-400
                active:text-gray-400
                active:hover:text-gray-600"
            onClick={() => {
              setIsLiked(true);
            }}
          />
        )}

        <FaRegComment
          size={24}
          className="hover:cursor-pointer 
                hover:text-gray-400
                active:text-gray-400
                active:hover:text-gray-600"
          onClick={() => {}}
        />
        <GoPaperAirplane
          size={24}
          className="hover:cursor-pointer 
                hover:text-gray-400
                active:text-gray-400
                active:hover:text-gray-600"
          onClick={() => {}}
        />
        <div style={{ flex: 1 }} />
        <FaRegBookmark
          size={24}
          className="hover:cursor-pointer 
                hover:text-gray-400
                active:text-gray-400
                active:hover:text-gray-600"
          onClick={() => {}}
        />
      </div>
      <div className="flex w-full select-text flex-row space-x-1 text-sm font-semibold">
        <span>좋아요</span>
        <span>{liked_users.length}개</span>
      </div>
      <div className="w-full select-text space-x-1 ">
        <span className="text-sm font-bold ">{user.name}</span>
        <span className="text-sm ">
          {isClickedMore ? content : truncate(content, 33)}
        </span>
        {!isClickedMore && content.length > 33 && (
          <span
            className="text-sm text-gray-400 hover:cursor-pointer"
            onClick={() => {
              setIsClickedMore(true);
            }}
          >
            더보기
          </span>
        )}
      </div>
      <form className="flex w-full flex-row">
        <input
          className="flex-1 bg-inherit text-sm outline-none"
          placeholder="댓글 달기..."
        />
        <button className="text-sm font-bold text-blue-500 hover:text-blue-200">
          <span>게시</span>
        </button>
      </form>
    </article>
  );
}
