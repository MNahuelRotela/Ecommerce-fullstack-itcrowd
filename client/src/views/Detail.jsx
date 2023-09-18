import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Importa useParams
import { fetchProductById } from '../redux/features/productsSlice';
import { addProduct } from "../redux/features/cartSlice";
import NavBar from '../components/NavBar/NavBar';
import Swal from 'sweetalert2'

function Detail(clickHandler) {
  const { productId } = useParams(); // Obtén el productId de los parámetros de la URL
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.products.selectedProduct);
  const loading = useSelector((state) => state.products.loading);
  const [addedToCart, setAddedToCart] = useState(false);

  const clickAddHandler = (product) => {
    console.log("Producto", selectedProduct); {
      dispatch(addProduct({ ...product }));
      setAddedToCart(true);
    }
  };

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <section className="text-gray-600 dark:text-gray-400 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">Loading...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!selectedProduct) {
    return (
      <section className="text-gray-600 dark:text-gray-400 body-font overflow-hidden">
      <header>
        <NavBar />
      </header>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">Product not found.</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Verifica si el producto tiene una marca definida
  const brandName = selectedProduct.Brand ? selectedProduct.Brand.name : 'GENÉRICO';
  const brandImage = selectedProduct.Brand
    ? selectedProduct.Brand.img_url
    : 'https://www.sinmarca.com.ar/wp-content/uploads/2021/11/sinmarca.png';

  return (
    <section className="text-gray-600 dark:text-gray-400 body-font overflow-hidden mt-12 bg-white dark:bg-gray-900">
      <header>
        <NavBar />
      </header>
      <div className="container px-5 pb-20 pt-28 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={selectedProduct.name}
            className="lg:w-1/2 w-full lg:h-auto h-auto object-contain rounded"
            src={selectedProduct.img_url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">
              {brandName}
            </h2>
            {/* Muestra la imagen de la marca o la imagen predeterminada */}
            <img
              alt={brandName}
              src={brandImage}
              className="w-40 mt-2"
            />
            <h1 className="text-gray-900 dark:text-gray-300 text-3xl title-font font-medium mb-1">
              {selectedProduct.name}
            </h1>
            <p className="leading-relaxed">{selectedProduct.description}</p>
            <div className="mt-4">
              <div className='flex'>
              <h3 className="text-2xl  line-through  text-gray-400 dark:text-gray-300">${selectedProduct.price}</h3>
              <div className="rounded-lg bg-orange-300 relative ml-4 px-2">
                <h3 className="font-bold text-sm text-white mt-1">{selectedProduct.discountPercentage}% OFF</h3>
              </div>
              </div>
              <div className='flex'>
              <h2 className="title-font font-medium text-4xl text-gray-900 dark:text-gray-200 mt-2">
                ${selectedProduct.finalPrice}
              </h2>

              </div>
              {addedToCart && (
              <div className="text-green-600 text-base font-normal mb-1">
                Producto agregado al carrito
              </div>
              )}
              <div className="self-stretch flex flex-row justify-start gap-5 relative items-center mb-3 mr-12">
                {selectedProduct.stock > 0 ?
                  <button
                    onClick={() => clickAddHandler(selectedProduct)}
                    className="flex ml-auto text-base md:text-2xl md:bottom-28 text-white bg-orange-300 border-0 p-6 md:p-4 focus:outline-none hover:bg-orange-600 rounded-xl cursor-pointer  flex-col justify-center relative w-1/2 h-10 md:h-20 border-gray-400 hover:border-2 hover:border-gray-300  items-center "
                  >
                    Agregar al carrito
                  </button>
                  :
                  <button className="bg-black text-white cursor-pointer flex flex-col justify-center relative w-1/2 h-10 border-gray-400 hover:border-2 hover:border-gray-300 hover:bg-gray-800 items-center rounded-md">
                    Sin Stock
                  </button>
                }
              </div>
              <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] self-stretch justify-start mr-40 relative">
                {/* Shipping* */}
                <br />
                {/* <Carousel /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
