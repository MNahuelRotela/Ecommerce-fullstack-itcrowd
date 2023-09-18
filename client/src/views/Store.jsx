import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../redux/features/productsSlice";
import { fetchBrands } from "../redux/features/brandsSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import NavBar from "../components/NavBar/NavBar";

function Store() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchAllProducts()).then(() => setIsLoading(false));
    dispatch(fetchBrands()); // Asegúrate de cargar las marcas también
  }, []);

  const products = useSelector((state) => state.products.products);
  const brands = useSelector((state) => state.brands.brands);

  // Crear un objeto de marcas para buscar fácilmente por id
  const brandMap = brands.reduce((map, brand) => {
    map[brand.id] = brand;
    return map;
  }, {});

  // Crear una copia de los productos con la URL de la imagen de la marca
  const displayedProducts = products.map((product) => ({
    ...product,
    brand_img_url: brandMap[product.BrandId]?.img_url || "", // Si no se encuentra, dejarla en blanco
  }));

  return (
    <div className="flex-col text-center mt-36 bg-gray-100 dark:bg-gray-800">
      <header>
        <NavBar />
      </header>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <button
            disabled
            className="bg-white w-24 h-20 hover:border-none border-none"
          >
            <span className="loading loading-spinner loading-3xl text-black"></span>
          </button>
        </div>
      ) : (
        <>
          {displayedProducts.length === 0 ? (
            <div className="alert shadow-lg h-72 flex flex-col justify-center items-center mx-5 mb-10">
              <div>
                <h3 className="font-bold text-lg text-gray-600 dark:text-gray-300">
                  No encontramos nada con esos parámetros.
                </h3>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap h-3/4 justify-center">
              {displayedProducts.map((element, i) => (
                <Card
                  key={i}
                  finalPrice={element.finalPrice}
                  id={element.id}
                  img_url={element.img_url}
                  name={element.name}
                  price={element.price}
                  discountPercentage={element.discountPercentage}
                  brand_img_url={element.brand_img_url} // Agregar la URL de la marca
                  BrandId={element.BrandId}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Store;
