import Joi from "joi";

const orderSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().trim().required(),
  orderedAt: Joi.string().trim().required(),
  completedAt: Joi.string().trim(),
  products: Joi.array().required(),
  totalPrice: Joi.number().required(),
});

export class Order {
  id;
  name;
  orderedAt;
  completedAt;
  products;
  totalPrice;

  constructor({ id, name, orderedAt, completedAt, products, totalPrice }) {
    // kartais reikia naudoti initId, initName

    const newOrderData = {
      id,
      name,
      orderedAt,
      completedAt,
      products, //productId []
      totalPrice,
    };

    const validationResult = orderSchema.validate(newOrderData);

    if (validationResult.error) {
      throw Error(validationResult.error);
    }

    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
