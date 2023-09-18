import { Link } from "react-router-dom";

function Card({ name, img_url, finalPrice, id, price, discountPercentage, brand_img_url, BrandId }) {
  // Verifica si brand_img_url está vacío o no existe
  const showBrandImage = brand_img_url && brand_img_url.trim() !== "";
  // URL de la imagen predeterminada si no hay marca
  const defaultBrandImageUrl = "https://www.sinmarca.com.ar/wp-content/uploads/2021/11/sinmarca.png";

  return (
    <div className="card w-72 bg-base-100 shadow-xl m-2 rounded-md p-2 bg-white">
      <Link to={`/store/${id}`} className="flex justify-center">
        <figure className="cursor-pointer">
          <img width={"180px"} src={img_url} alt={name} />
        </figure>
      </Link>
      <div className="brand-container">
        {showBrandImage ? ( // Muestra la imagen de la marca si showBrandImage es verdadero
          <Link to={`/brand/${BrandId}`} className="flex justify-center">
            <div className="flex justify-center">
              <img width={"80px"} src={brand_img_url} alt={name} />
            </div>
          </Link>
        ) : (
          // Muestra la imagen predeterminada si no hay marca
          <div className="flex justify-center">
            <img width={"80px"} src={defaultBrandImageUrl} alt="Sin Marca" />
          </div>
        )}
      </div>
      <div className="card-body text-center justify-center">
        <h2 className="card-title min-h-8 mx-8">{name}</h2>
        <div className="flex justify-center">
          <h3 className="text-xl line-through text-gray-400">{`$${price}`}</h3>
          <div className="rounded-lg bg-orange-300 p-1 relative ml-2">
            <h3 className="font-bold text-sm text-white">{`${discountPercentage}% OFF`}</h3>
          </div>
        </div>
        <h2 className="font-bold text-xl text-center">{`$${finalPrice}`}</h2>
      </div>
    </div>
  );
}

export default Card;

