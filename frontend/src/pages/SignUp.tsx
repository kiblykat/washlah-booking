import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("logged in: " + userLoggedIn);
      await doCreateUserWithEmailAndPassword(email, password);
      toast.success("successfully signed up");
    } catch (err) {
      console.log(err);
      toast.error("signup unsuccessful");
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home/book" replace={true} />}
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="w-full max-w-sm">
          <div className="card bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mb-6">
                {/* <label className="label cursor-pointer justify-start space-x-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Remember me</span>
              </label> */}
              </div>
              <button className="btn btn-primary w-full">Sign Up</button>
              <Toaster />
            </form>
            <div className="text-center mt-4">
              <a href="#" className="link-hover link-primary">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
