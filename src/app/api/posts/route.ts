import { authOptions } from "@/service/nextAuth";
import { getServerSession } from "next-auth";

export async function GET(requset: Request) {
  const session = getServerSession(authOptions);
  console.log("session", session);

  return Response.json({ data: "안녕" });
}
