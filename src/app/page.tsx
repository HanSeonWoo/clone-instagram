import Login from "@/components/Login";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const data = [
  {
    content: "fsdfsdfsdfsdfsdfsdf",
    media: "https://source.unsplash.com/random/400x400",
    user: { name: "나다새", image: "https://source.unsplash.com/random/36x36" },
    created_at: "2024-03-22",
    liked_users: [{}, {}, {}, {}],
  },
  {
    content: "123232324242424",
    media: "https://source.unsplash.com/random/401x401",
    user: {
      name: "나다222새",
      image: "https://source.unsplash.com/random/40x40",
    },
    created_at: "2024-03-21",
    liked_users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  },
];
export default function HomePage() {
  // session 유무에 따라 로그인 페이지를 노출할 수 있음.
  return (
    <main className="">
      {data.map(({ user, content, created_at, liked_users, media }, index) => {
        return (
          <article key={index} className="flex w-96 flex-col items-center p-4">
            <div className="flex w-full flex-row">
              <Image
                className="rounded-xl"
                width={36}
                height={36}
                src={user.image}
                alt="아모고나"
                style={{
                  objectFit: "cover",
                }}
              />
              {user.name}
              {created_at}
              <div style={{ flex: 1 }} />
              <FaEllipsisH />
            </div>
            <Image
              width={360}
              height={360}
              src={media}
              alt="아모고나"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="flex w-full flex-row">
              <FaRegHeart />
              <FaRegComment />
              <GoPaperAirplane />
              <div className="w-full" />
              <FaRegBookmark />
            </div>
            <div className="flex w-full flex-row">
              <span>좋아요</span>
              <span>{liked_users.length}</span>개
            </div>
            <div className="flex w-full flex-row">
              <p>아이디</p>
              <p>{content}</p>
              더보기
            </div>
            <div>댓글달기</div>
          </article>
        );
      })}
    </main>
  );
}
