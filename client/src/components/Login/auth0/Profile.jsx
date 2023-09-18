import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { verifyAdmin } from "../../../hooks/verifierForRoutes";
import { addNewUsers, getAllUsers } from "../../../redux/features/usersSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Profile() {
  const { user, logout, isAuthenticated, auth0 } = useAuth0();
  const isAdmin = verifyAdmin();
  const dispatch = useDispatch();
  const dbUsers = useSelector(getAllUsers);

  const [newUser, setNewUser] = useState({
    name: user?.given_name ?? "none",
    lastname: user?.family_name ?? "none",
    user: user?.nickname ?? "",
    mail: user?.email ?? "",
    isAdmin: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sendVerificationEmail = () => {
    if (auth0 && user?.email) {
      auth0
        .sendEmailVerification({ email: user.email })
        .then(() => {
          Swal.fire(
            "Correo enviado con éxito!",
            "Si no encuentras el correo, revisa en tu bandeja de correos no deseados.",
            "success"
          );
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Hubo un problema al enviar el correo, inténtalo más tarde.",
          });
        });
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
  }, [user, isAuthenticated]);

  useEffect(() => {
    const userExists = dbUsers.some(
      (dbUser) => dbUser.mail !== newUser.mail || dbUser.user !== newUser.user
    );

    if (newUser.mail !== "" || newUser.user !== "") {
      if (!userExists) {
        dispatch(addNewUsers(newUser));
      }
    }
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const logoutHandler = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("totalPrice", JSON.stringify(0));
    logout();
  };

  return (
    isAuthenticated && (
      <div className="fixed top-0 right-4 md:top-14 md:right-20">
        <label
          tabIndex={0}
          className="cursor-pointer m-1 flex items-center dark:text-white"
          onClick={toggleDropdown}
        >
          <strong className="text-xs md:text-base">{user?.nickname}</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-0 ml-1 ${isDropdownOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
          </svg>
        </label>

        {isDropdownOpen && (
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-orange-300 dark:bg-gray-800 rounded-md w-40 md:w-48 absolute -right-4"
          >
            {user.email_verified === false && (
              <li onClick={sendVerificationEmail}>
                <span className="text-red-700 cursor-pointer  font-semibold text-sm md:text-base">Verificar email</span>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link className="text-gray-500 dark:text-white text-sm md:text-base" to={"/administracion/index"}>
                  Administracion
                </Link>
              </li>
            )}
            <li onClick={logoutHandler}>
              <a className="text-gray-500 cursor-pointer dark:text-white text-sm md:text-base" onClick={closeDropdown}>
                Cerrar sesión
              </a>
            </li>
          </div>
        )}
      </div>
    )
  );
}

export default Profile;
