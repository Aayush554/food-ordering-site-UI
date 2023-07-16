import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(2);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.categoryId);
        let index = categories.findIndex(category => newActiveTab === category);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(2);
        }
    }
    return (
        <div className="bg-white">
            {
                products.status !== 'fulfilled' ?
                    <div>loading...</div> :
                    <div className="menu-wrapper">
                        {
                            products.products &&
                            <Tabs
                                list={products.products
                                    .map((product) => product.categoryId) // Extract all categoryIds
                                    .filter((categoryId, index, categories) => // Filter out duplicates
                                        categories.indexOf(categoryId) === index
                                    )
                                }
                                activeTab={activeTab}
                                onTabSwitch={onTabSwitch}
                            />
                        }
                        <div className="flex flex-row mx-3">
                            {products.products &&
                                products.products.map((product, index) => {
                                    if (activeTab === product.categoryId) {
                                        return (
                                            <ProductDetailCard
                                                key={index}
                                                product={product}
                                            />
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                        </div>


                    </div>
            }
        </div>
    )
}
export default Menu;