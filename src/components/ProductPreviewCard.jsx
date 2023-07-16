import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className=" grid w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-left">
            <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            <h2 className="pb-2 text-lg ">{product.name}</h2>
            <p className="mb-2 h-0 line-clamp-40 text-left ">{product.desciption}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}