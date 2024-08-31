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
          <a href="#tickets" className="link link-hover">
            My Tickets
          </a>
          <a href="#bookings" className="link link-hover">
            Bookings
          </a>
          <a href="#calendar" className="link link-hover">
            Calendar
          </a>
          <button className="btn btn-success">Book A Slot Now ↓</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
