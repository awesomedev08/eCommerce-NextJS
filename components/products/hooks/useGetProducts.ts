import { useQuery } from "react-query";
import { getProducts } from "../api/getProducts";

export const useGetProducts = () => {
  return useQuery("/api/products", getProducts);
};
