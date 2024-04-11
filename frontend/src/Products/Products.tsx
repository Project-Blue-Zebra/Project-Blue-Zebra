/*import data from "./data";*/
import React, {useEffect, useState} from "react";
import axios from "axios";
type Product = {
    id: number; 
    name: string; 
    description: string; 
    brand: string;
    price: number; 
    rating: number;
    numberOfReviews: number; 
    imageUrl: string; 
}
const emptyProducts: Product[] = [];

function Products(){
    const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProducts);
    useEffect(() => {
        axios.get<Product[]>("http://127.0.0.1:5500/Blue.Zebra.Api/", 
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    },  [] );

    return(
        <div className="content">
            <ul className="products">
                {products.map((Products) => (
                    <li>
                        <div className="product">
                            <img
                                className="product-image"
                                src={Products.imageUrl}
                                alt="product"
                            />
                            <div className="product-name">
                                <a href="product.html">{Products.name}</a>
                            </div>
                            <div className="product-brand">{Products.brand}</div>
                            <div className="product-price">{Products.price}</div>
                            <div className="product-rating">
                                {Products.rating} Stars ({Products.numberOfReviews} Reviews)
                            </div>
                        </div>
                    </li>
                ))}
                ;
            </ul>
        </div>
    );
}

export default Products;