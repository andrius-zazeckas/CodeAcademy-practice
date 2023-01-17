import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  isAvailable: Joi.boolean().required(),
  imageUrl: Joi.string().trim().required(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageUrl;

  constructor(name, price, isAvailable, imageUrl, id) {
    let productData = { name, price, isAvailable, imageUrl };

    const validationResult = productSchema.validate(productData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageUrl = imageUrl;
  }
}
