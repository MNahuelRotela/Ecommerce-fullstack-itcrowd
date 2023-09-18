//IN REVISION//



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getIsPublishProducts } from "../../redux/features/productsSlice";
// import { setFilteredProducts } from "../../redux/features/productsSlice";
// // import { getAllColors } from "../../features/colorSlice";
// import { fetchCategories } from "../../redux/features/categoriesSlice";
// import { fetchBrands } from "../../redux/features/brandsSlice";
// // import {getAllSizes} from "../../features/sizesSlice";//& Get all sizes
// // import { fetchCategories } from "../../redux/features/categoriesSlice";
// // import { fetchColors } from "../../features/colorSlice";
// import { useNavigate, useLocation } from "react-router-dom";
// // import { BiSearchAlt2 } from "react-icons/bi";


// const Filters = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const allProducts = useSelector(getIsPublishProducts);

//   const [brandSelect, setBrandSelect] = useState("");
//   const [categorySelect, setCategorySelect] = useState("");
//   const [priceSelect, setPriceSelect] = useState("");

//   useEffect(() => {
//     dispatch(fetchBrands());
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   //* Trae las listas de opciones.
//   let brandsList = useSelector(fetchBrands);
//   let categoriesList = useSelector(fetchCategories);


//   // console.log("brandsList", brandsList);

//   const [filterPanel, setFilterPanel] = useState({
//     name: "",
//     brand: "none",
//     category: "none",
//     price: "none",
//   });

//   useEffect(() => {
//     let productsCopy = [...allProducts];
//     // console.log("productsCopy", productsCopy);

//     if (productsCopy.length > 0) {
//       if (filterPanel.name !== "") {
//         productsCopy = productsCopy.filter((p) =>
//           p.model?.toLowerCase().includes(filterPanel.name.toLowerCase())
//         );
//         // console.log("productsCopy", productsCopy);
//       }

//       if (filterPanel.brand !== "none") {
//         productsCopy = productsCopy.filter((p) =>
//           p.brand?.includes(filterPanel.brand)
//         );
//       }


//       if (filterPanel.category !== "none") {
//         productsCopy = productsCopy.filter((p) => {
//           return p.categories?.includes(filterPanel.category);
//         });
//       }



//       // totalPrice????
//       if (filterPanel.price !== "none") {
//         if (filterPanel.price === "lower") {
//           productsCopy = productsCopy.sort((a, b) => a.price - b.price);
//         } else {
//           productsCopy = productsCopy.sort((a, b) => b.price - a.price);
//         }
//       }

//       dispatch(setFilteredProducts(productsCopy));
//     }
//   }, [filterPanel]);

//   // console.log("filterPanel", filterPanel);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setFilterPanel(() => {
//       return { ...filterPanel, [e.target.name]: e.target.value };
//     });
//   };

//   const handleClickTienda = (e) => {
//     e.preventDefault();

//     navigate("/");
//   };

//   const handleClickTodos = (e) => {
//     e.preventDefault();
//     setFilterPanel(() => {
//       return { ...filterPanel };
//     });
//     handleResetClick();
//     navigate("/");
//   };



//   const handleResetClick = (e) => {
//     setFilterPanel({
//       name: "",
//       brand: "none",
//       category: "none",
//       price: "none",

//     });
//     setBrandSelect("");
//     setCategorySelect("");
//     setBrandSelect("");
//     setPriceSelect("");
//   };

//   return (
//     <div className="w-full">
//       <div className="flex space-x-2 ml-52">
//         <button className="link" onClick={handleClickTienda}>
//           TIENDA
//         </button>
//       </div>

//       {location.pathname === "/" && (
//         <div className=" flex items-center w-full">
//           <div className="relative">
//             <input
//               name="name"
//               value={filterPanel.name}
//               onChange={handleChange}
//               placeholder="Search..."
//               className="p-2 pl-8 mr-1"
//             ></input>
//             <span className="absolute top-2 left-2 text-gray-300 pointer-events-none">
//               <BiSearchAlt2 className="text-lg mt-0.5 m-2" />
//             </span>
//           </div>

//           <div className="link">
//             <select
//               id="brand"
//               name="brand"
//               onChange={handleChange}
//               className="p-2 mr-1"
//             >
//               <option value={"none"}>Brand</option>

//               {brandsList?.map((b, i) => (
//                 <option key={i} value={b}>
//                   {b}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="link">
//             <select
//               id="category"
//               name="category"
//               onChange={(e) => handleChange(e)}
//               // value={categorySelect}
//               className="p-2 mr-1"
//             >
//               <option value={"none"}>Category</option>
//               {categoriesList?.map((c, i) => (
//                 <option key={i} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>



//           <div className="link ">
//             <select
//               id="price"
//               name="price"
//               onChange={(e) => handleChange(e)}
//               className="p-2 mr-1 "
//             >
//               <option key="none" value="none">
//                 Precio
//               </option>
//               <option key="higher" value="higher">
//                 Mayor a menor
//               </option>
//               <option key="lower" value="lower">
//                 Menor a mayor
//               </option>
//             </select>
//           </div>

//           <button
//             onClick={handleResetClick}
//             className="p-2 border-gray-500 hover:border-gray-700   "
//           >
//             <span>Reset</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filters;