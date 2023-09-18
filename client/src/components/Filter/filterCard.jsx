import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  filterBySubcategory,
  filterByCategory,
  filterByBrand,
  clearFilters,
} from "../../redux/features/productsSlice";
import { fetchBrands } from "../../redux/features/brandsSlice";
import { fetchCategories } from "../../redux/features/categoriesSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.brands);
  const categories = useSelector((state) => state.categories.categories);
  const subCategories = useSelector((state) => state.subCategories.subCategories);

  const [filterPanel, setFilterPanel] = useState({
    name: "",
    brand: "none",
    category: "none",
    subCategory: "none",
    price: "none",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterPanel({ ...filterPanel, [name]: value });
  };

  const handleResetClick = () => {
    // Limpiar los filtros y cargar todos los productos nuevamente
    dispatch(clearFilters());
    setFilterPanel({
      name: "",
      brand: "none",
      category: "none",
      subCategory: "none",
      price: "none",
    });
  };

  const handleFilterBySubcategory = () => {
    const { subCategory } = filterPanel;
    dispatch(filterBySubcategory(subCategory));
  };

  const handleFilterByCategory = () => {
    const { category } = filterPanel;
    dispatch(filterByCategory(category));
  };

  const handleFilterByBrand = () => {
    const { brand } = filterPanel;
    dispatch(filterByBrand(brand));
  };

  useEffect(() => {
    // Dispatch para obtener marcas y categorías cuando se monta el componente
    dispatch(fetchBrands());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="bg-orange-300 dark:bg-gray-800 p-6 rounded-lg">
      <div>
        <div>
          <input
            name="name"
            value={filterPanel.name}
            onChange={handleChange}
            placeholder="Search..."
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-1"
          ></input>
        </div>
        <div>
          <select
            id="brand"
            name="brand"
            onChange={handleChange}
            value={filterPanel.brand}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-1"
          >
            <option value="none">Brand</option>
            {brands?.map((b, i) => (
              <option key={i} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleFilterByBrand}
            className="bg-gray-500 my-2 mx-6 px-4 py-2 rounded-md text-white hover:bg-gray-400"
          >
            Filter
          </button>
        </div>
        <div>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            value={filterPanel.category}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-1"
          >
            <option value="none">Category</option>
            {categories?.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button
            onClick={handleFilterByCategory}
            className="bg-gray-500 my-2 mx-6 px-4 py-2 rounded-md text-white hover:bg-gray-400"
          >
            Filter
          </button>
        </div>
        <div>
          <select
            id="subCategory"
            name="subCategory"
            onChange={handleChange}
            value={filterPanel.subCategory}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-1"
          >
            <option value="none">SubCategory</option>
            {subCategories?.map((sc, i) => (
              <option key={i} value={sc}>
                {sc}
              </option>
            ))}
          </select>
          <button
            onClick={handleFilterBySubcategory}
            className="bg-gray-500 my-2 mx-6 px-4 py-2 rounded-md text-white hover:bg-gray-400"
          >
            Filter
          </button>
        </div>
        <div>
          <select
            id="price"
            name="price"
            onChange={handleChange}
            value={filterPanel.price}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-1"
          >
            <option value="none">Price</option>
            <option value="higher">Higher</option>
            <option value="lower">Lower</option>
          </select>
        </div>
        <button
          onClick={handleResetClick}
          className="bg-gray-500 my-2 mx-6 px-4 py-2 rounded-md text-white hover:bg-gray-400"
        >
          <span>Reset</span>
        </button>
        <Link
          to="/"
          className="bg-gray-500 my-2 mx-6 px-4 py-2 rounded-md text-white hover:bg-gray-400"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Filters;
