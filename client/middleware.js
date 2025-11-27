import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = { 
  // শুধু ড্যাশবোর্ড রাউটগুলো প্রোটেক্ট করবে, সব রাউট চেক করবে না (এতে স্পিড বাড়বে)
  matcher: ["/dashboard/:path*"] 
};