"use client";

import Image from "next/image";
import greenstagram from "../../public/greenstagram.png";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const APPSTORE_LINK = "https://apps.apple.com/us/app/instagram/id389801252";
const GOOGLEPLAY_LINK =
  "https://play.google.com/store/apps/details?id=com.instagram.android";

export default function Login() {
  return (
    <main className="">
      {/* 가로 ( 이미지 / 로그인 컴포넌트 ) */}
      <div className="bg-slate-600">
        {/* 왼쪽 이미지: 가로 사이즈가 작으면 사라짐 */}
        {/* 로그인 컴포넌트 */}
        <div className="flex min-h-screen flex-col items-center justify-center border-2 bg-white px-6">
          <div className="flex w-96 flex-col items-center border p-8 shadow-md">
            <Image className="my-4" src={greenstagram} alt="Logo" width={200} />

            <form className="w-full space-y-2">
              <input
                className="shadow-xs w-full rounded border border-gray-300 bg-gray-50 p-2 py-3 text-xs text-black outline-none focus:border-gray-500"
                id="username"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="shadow-xs w-full rounded border border-gray-300 bg-gray-50 p-2 py-3 text-xs text-black outline-none focus:border-gray-500"
                id="password"
                type="password"
                placeholder="비밀번호"
              />
              <div />
              <button
                className="focus:shadow-outline w-full rounded-md bg-blue-300 px-4 py-1 text-sm font-bold text-white hover:bg-blue-500 focus:outline-none"
                type="button"
              >
                로그인
              </button>
              {/* 로그인 클릭시, 이메일 로그인은 미구현입니다 */}
            </form>

            <div className="my-6 flex w-full items-center justify-between ">
              <hr className="w-full" />
              <p className="bg-white px-3 text-sm text-gray-500">OR</p>
              <hr className="w-full" />
            </div>

            <button
              className=" flex items-center px-4 py-2 font-bold text-blue-800"
              type="button"
              onClick={() => {
                signIn();
              }}
            >
              {/* <FaFacebookSquare size={24} /> */}
              {/* <p className="ml-2 text-sm">Facebook으로 로그인</p> */}
              <p className="ml-2 text-sm">소셜 로그인</p>
            </button>

            <Link
              href={"/accounts/password/reset"}
              className="text-xs text-gray-500"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>

          <div className="mt-4 flex w-96 flex-col items-center border p-6 shadow-md">
            <p className="text-center text-sm text-black">
              {"계정이 없으신가요? "}
              <a
                href="#"
                className="font-bold text-blue-500 hover:text-blue-800"
              >
                가입하기
              </a>
            </p>
          </div>

          <div className="mt-6">
            <p className="text-center text-sm text-black">
              앱을 다운로드 하세요.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href={APPSTORE_LINK}
                className="flex items-center rounded-md bg-black px-3 py-2"
              >
                <FaApple size={36} />
                <p className="ml-2 text-sm">
                  <span className="text-base">App Store</span>
                  에서
                  <br />
                  다운로드 하기
                </p>
              </a>
              <a
                href={GOOGLEPLAY_LINK}
                className="ml-2 flex items-center rounded-md bg-black px-3 py-2"
              >
                <IoLogoGooglePlaystore size={36} />
                <p className="ml-2 text-xs">
                  다운로드 하기
                  <br />
                  <span className="text-base">Google Play</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 하단에 이용약관 등등 */}
    </main>
  );
}
