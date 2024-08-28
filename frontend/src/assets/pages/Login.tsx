export default function Login() {
  return (
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
              />
            </div>
            <div className="form-control mb-6">
              <label className="label cursor-pointer justify-start space-x-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <button className="btn btn-primary w-full">Login</button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="link link-primary">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
