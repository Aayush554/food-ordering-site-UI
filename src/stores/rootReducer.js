import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productsSlice";
import categoryReducer from "./menu/categorySlice"
import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        categories: categoryReducer,
        address: addressReducer
    }
);

export default rootReducer;