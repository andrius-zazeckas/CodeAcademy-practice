export class Bar {
  imageUrl;
  barName;
  address;
  rating;
  priceRating;

  constructor(barName, imageUrl, address, rating, priceRating) {
    this.barName = barName;
    this.imageUrl = imageUrl;
    this.address = address;
    this.rating = rating;
    this.priceRating = priceRating;
  }
}
