import { useContext, useState } from "react";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function useAuth() {
  const authCtx = useContext(AuthContext);
  if (authCtx === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authCtx;
}

export default function Login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await doSignInWithEmailAndPassword(email, password);
      toast.success("successfully logged in");
    } catch (err) {
      console.log(err);
      toast.error("Invalid login details");
    }
  };
  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace={true} />}
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="w-full max-w-sm">
          <div className="card bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form>
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
              <button className="btn btn-primary w-full" onClick={onSubmit}>
                Login
              </button>
              <Toaster />
            </form>
            <div className="text-center mt-4">
              <a href="#" className="link-hover link-primary">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
