"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username, password, redirect: false
    });
    
    if (result?.ok) {
      toast.success("Logged in successfully!");
      router.push("/");
      router.refresh();
    } else {
      toast.error("Invalid credentials! Try (admin/admin)");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control space-x-2">
              <label className="label"><span className="label-text">Username</span></label>
              <input type="text" placeholder="admin" className="input input-bordered" 
                value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className="form-control space-x-2">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="admin" className="input input-bordered" 
                value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button className="rounded-2xl bg-violet-800 text-white w-full mt-4">Login</button>
          </form>
          
          <div className="divider text-center">OR</div>
          
          <button onClick={() => signIn("google", { callbackUrl: '/' })} className="btn btn-outline w-full">
            <span className="loading loading-spinner loading-xs hidden rounded-2xl bg-white text-black"></span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
} space-x-2