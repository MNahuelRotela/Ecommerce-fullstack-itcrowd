import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoecommerce.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  deleteProduct,
  getCartProducts,
  getTotalCartProducts,
} from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import LoginButton from "../Login/auth0/LoginButton";
import Profile from "../Login/auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { generarMensajeCarrito } from "../../utils/wsp"; // Importa la función

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, error, user } = useAuth0();
  const dispatch = useDispatch();
  const total = useSelector(getTotalCartProducts);
  const CartProducts = useSelector(getCartProducts);

  const handlerDelete = (id) => {
    const product = CartProducts.find((element) => element.id === id);
    console.log(product);
    dispatch(deleteProduct(product));
  };
  
  const cartContainerClass = CartProducts.length === 0
  ? " mt-64 z-[1] card max-h-96 overflow-auto card-compact dropdown-menu w-40 md:w-72 bg-gray-200 dark:bg-gray-900 shadow hidden group-hover:flex hover:flex rounded-xl"
  : "mt-96 z-[1] card max-h-96 overflow-auto card-compact dropdown-menu w-40 md:w-72 bg-gray-200 dark:bg-gray-900 shadow hidden group-hover:flex hover:flex rounded-xl";

  // Genera el mensaje personalizado utilizando la función generarMensajeCarrito
  const mensajeWhatsApp = generarMensajeCarrito(CartProducts);

  return (
    <div className="navbar bg-orange-400 dark:bg-gray-800 fixed w-screen h-36 top-0 shadow-md py-3 z-10">
      <div className="w-32">
        <Link to="/" className="text-black dark:text-white hover:text-gray-500 w-12 md:w-32">
          <img
            src={logo}
            alt="logo"
            className=" w-10 md:w-28 md:h-24 rounded-sm ml-5 mt-1"
          />
        </Link>
      </div>
      <div className="flex-auto justify-between">
        <div className="">
          <div className="flex fixed top-8 sm:top-14 left-20 sm:left-40 text-xs md:text-xl uppercase font-bold">
            <ul className="md:flex grid grid-cols-2 md:flex-wrap gap-2  md:space-x-4   ">
              <li className="text-gray-800 dark:text-orange-300 hover:text-gray-500">
                <Link to="/">Productos</Link>
              </li>
              <li className="text-gray-800 dark:text-orange-300 hover:text-gray-500">
                <Link to="/about">Nosotros</Link>
              </li>
              <li className="text-gray-800 dark:text-orange-300 hover:text-gray-500">
                <Link to="/contact">Contacto</Link>
              </li>
              <li className="text-gray-800 dark:text-orange-300 hover:text-gray-500">
                <Link to="/faqs">Faqs</Link>
              </li>
            </ul>
          </div>
        </div>

        <main>
          {error && <p> Authentication Error </p>}
          {!error && isLoading && (
            <span className="loading loading-spinner loading-md fixed top-0 right-0"></span>
          )}
          {!error && !isLoading && (
            <div className="fixed top-0 right-0 flex-1">
              <LoginButton />
              <Profile />
            </div>
          )}
        </main>
      </div>
      <div className="cart-container absolute mt-4 top-1/4 right-4 transform -translate-y-1/2 group">
        <label
          tabIndex={0}
          className=" absolute top-1/2 right-4 cursor-pointer bg-gray-200 dark:bg-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-400 rounded-full h-10 w-10 flex items-center justify-center "
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div className="rounded-full bg-gray-500 dark:bg-gray-300 h-4 w-4 flex-1 absolute bottom-6 left-6 text-center">
              <span className=" text-sm relative bottom-1 text-gray-700 ">
                {CartProducts.length}
              </span>
            </div>
          </div>
        </label>
        <div className={cartContainerClass}>
          <div className="card-body w-32 md:w-64 rounded-xl">
            <div className="w-32 md:w-64 mx-2">
              {CartProducts.map((product, i) => {
                return (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-700 pb-2 m-2 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white box-border px-4 rounded-xl"
                  >
                    <button
                      className=" hover:text-red-900 text-gray-500 dark:text-white ml-36 mt-1 pl-1 py-1 w-2 border-none rounded-full text-lg"
                      onClick={() => handlerDelete(product.id)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <img
                      className="rounded-3xl w-16 md:w-32 hover:border-2 hover:border-white"
                      src={product.img_url}
                      alt={product.name}
                    />
                    <h6 className="text-base font-light py-2">
                      {product.name}
                    </h6>
                    <h5 className="font-medium text-xs">
                      <strong>Precio:</strong> ${`${product.finalPrice}`}
                    </h5>
                    <h5 className="font-medium text-xs">
                      <strong>Cantidad:</strong> {` ${product.quantity}`}
                    </h5>
                  </div>
                );
              })}
              <div className="flex flex-col bg-gray-50 w-32 md:w-64 dark:bg-gray-700 rounded-md p-2">
                <span className="text-sm font-medium w-32 md:w-60 text-gray-700 dark:text-white mb-2">
                  {`${CartProducts.length} items`}
                </span>
                <span className="">
                  <p className="text-gray-700 dark:text-white font-bold ml-1">{`Monto total $${total}`}</p>
                </span>
              </div>
            </div>
            <div className="card-actions">
              {isAuthenticated && user.email_verified ? (
                <Link to={`https://wa.me/+5491137670253?text=${(mensajeWhatsApp)}`} className="text-black dark:text-white hover:no-underline ">
                  <button className="bg-black dark:bg-gray-800 mx-16 px-7 py-2 my-4 text-white hover:border-gray-200 hover:bg-gray-800 rounded-xl dark:hover:border-gray-400 dark:hover:bg-gray-500">
                    Ir a pagar
                  </button>
                </Link>
              ) : (
                <button
                  className="bg-black dark:bg-gray-800 mx-16 px-7 py-2 my-4 text-white hover:border-gray-200 hover:bg-gray-800 rounded-xl dark:hover:border-gray-400 dark:hover:bg-gray-500"
                  onClick={() => {
                    Swal.fire({
                      title: "Oops..",
                      text: "No puedes realizar la compra sin antes iniciar sesión en una cuenta verificada.",
                      icon: "error",
                      showCancelButton: false,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Ir al login",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        loginWithRedirect();
                      }
                    });
                  }}
                >
                  Ir a pagar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

