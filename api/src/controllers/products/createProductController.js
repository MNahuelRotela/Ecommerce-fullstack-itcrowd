const { Product, Brand, Category, Subcategory } = require('../../db.js');

const createProduct = async (req, res, next) => {
  const {
    id,
    name,
    description,
    img_url,
    price,
    itemNumber,
    discountPercentage,
    stock,
    isPublished,
    BrandId, // Cambia el nombre del campo a brandId
    CategoryId,
    SubcategoryId,
  } = req.body;

  try {
    // Busca la marca en la base de datos por su ID
    const foundBrand = await Brand.findByPk(BrandId);

    if (foundBrand) {
      // Busca la categoría y subcategoría en la base de datos
      const category = await Category.findByPk(CategoryId);
      const subcategory = await Subcategory.findByPk(SubcategoryId);

      // Crea el producto y asigna las relaciones
      const product = await Product.create({
        id,
        name,
        description,
        img_url,
        price,
        itemNumber,
        discountPercentage,
        stock,
        isPublished,
        BrandId: foundBrand.id, // Establece la marca utilizando su ID
      });

      // Asigna las relaciones
      await product.setCategory(category);
      await product.setSubcategory(subcategory);

      res.json(product);
    } else {
      res.status(400).json({
        message: 'La marca no existe, primero debes crearla'
      });
    }
  } catch (error) {
    next(error);
  }
};



module.exports = {
  createProduct
};
