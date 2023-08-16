import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";



export const AddProduct = ({ product }) => {
const dispatch = useDispatch();
  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="flex justify-end">
      <button
        onClick={() => onAddProduct(product)}
        className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg">
        <span>+</span>
      </button>
    </div>
  );
};
