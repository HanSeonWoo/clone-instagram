import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { AuthOptions } from "next-auth";
import { addUser } from "./user";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(params) {
      const { user, account, profile, email, credentials } = params;
      console.log("🚀 ~ signIn ~ credentials:", credentials);
      console.log("🚀 ~ signIn ~ email:", email);
      console.log("🚀 ~ signIn ~ profile:", profile);
      console.log("🚀 ~ signIn ~ account:", account);
      console.log("🚀 ~ signIn ~ user:", user);

      // 여기서 sanity 유저에 추가해주기
      const addRes = await addUser({
        email: user.email || "",
        name: user.name || "",
        username: getEmailUsername(user.email || ""),
        image: user.image,
        id: user.id,
        loginType: account?.provider || "",
      });

      console.log("🚀 ~ signIn ~ addRes:", addRes);

      return true;
    },
  },
};

function getEmailUsername(email: string) {
  // `@` 기호의 위치를 찾는다.
  const atIndex = email.indexOf("@");

  // `@` 기호가 없으면 전체 이메일 주소를 반환한다.
  if (atIndex === -1) {
    return email;
  }

  // `@` 앞부분의 문자열을 반환한다.
  return email.substring(0, atIndex);
}
