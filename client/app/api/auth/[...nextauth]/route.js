import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock User for testing
        // ইউজারনেম: admin, পাসওয়ার্ড: admin দিলেই লগিন হবে
        if (credentials?.username === "admin" && credentials?.password === "admin") {
          return { id: "1", name: "Admin User", email: "admin@techzone.com", role: "admin" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', // কাস্টম লগিন পেজ
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };