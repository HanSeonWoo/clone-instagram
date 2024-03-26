import { authOptions } from "@/service/nextAuth";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
  console.log("🚀 ~ GET ~ request:", request);
  const session = await getServerSession(authOptions);
  console.log("🚀 ~ GET ~ session:", session);
  const data = "await res.json()";

  return Response.json({ data });
}
