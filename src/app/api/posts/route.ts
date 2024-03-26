import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(requset: Request) {
  const session = getServerSession(authOptions);
  console.log("session", session);

  return Response.json({ data: "안녕" });
}
