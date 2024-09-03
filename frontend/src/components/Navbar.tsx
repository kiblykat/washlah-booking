import washlah from "../assets/washlah-logo.png";
import { doSignOut } from "../firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../hooks/hooks";

async function handleLogout() {
  try {
    await doSignOut(auth);
  } catch (err) {
    console.log(err);
  }
}

const Navbar = () => {
  const { userLoggedIn } = useAuth();
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={washlah} alt="Logo" className=" mr-2" />
          {/* <span className="text-xl font-semibold">Washlah</span> */}
          {userLoggedIn && (
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
        <div className="flex space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/account"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              My Account
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-75 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a
              href="/tickets"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              Tickets
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-75 transition-transform duration-300 ease-in-out"></span>
            </a>
            <a
              href="/calendar"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
            >
              Calendar
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-75 transition-transform duration-300 ease-in-out"></span>
            </a>
          </div>
          <button className="btn btn-success">Book A Slot Now ↓</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
