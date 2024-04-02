import { authOptions } from "@/service/nextAuth";
import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";

export async function GET(requset: Request) {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  if (!session) {
    Response.error();
  }
  const res = await getUserByUsername(session.user?.name);
  console.log("🚀 ~ GET ~ res:", res);

  return Response.json({ data: "안녕" });
}
