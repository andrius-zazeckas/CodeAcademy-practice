export type TCartProduct = {
  id: number;
  title: string | null;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string;
  rating: {
    rate: number | null;
    count: number | null;
  };
  amount: number;
};
