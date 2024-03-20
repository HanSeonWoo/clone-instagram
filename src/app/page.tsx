import Login from "@/components/Login";
import PostList from "@/components/PostList";

export default function HomePage() {
  // session 유무에 따라 로그인 페이지를 노출할 수 있음.
  return <main className="">{true ? <PostList /> : <Login />}</main>;
}
