import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import pathConfig from "../../../../configs/path.config";

export default function ProductItem({ products}) {
    const baseUrl = "http://localhost:8080/uploads/";

    return (
        <Fragment>
            {products && products.map((product, index) => (
                <Link 
                to={pathConfig.productDetail.replace(':id', product.id)}
                style={{ textDecoration: 'none' }} 
                key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg h350" style={{ backgroundImage: `url(${baseUrl}${product.productImages[0].imageUrl})` }}>
                            <ul className="product__hover">
                                <li>
                                    <FaRegHeart />
                                </li>
                            </ul>
                        </div>
                        <div className="product__item__text ">
                            <h6 className="tilte_product" style={{ fontSize: '17px',color:'#3a3a3a'}}>{product.name}</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating d-flex gap-1">
                                <FaStar color='#bcbe14' size='13px' />
                                <FaStar color='#bcbe14' size='13px' />
                                <FaStar color='#bcbe14' size='13px' />
                                <FaStar color='#bcbe14' size='13px' />
                                <FaStar color='#bcbe14' size='13px' />
                            </div>
                            {product.productDetails && product.productDetails.length > 0 && product.productDetails[0].prices && product.productDetails[0].prices.length > 0 && (
                                <h5 style={{ fontSize: '17px' }}>
                                    ${product.productDetails[0].prices[0].priceSelling}
                                </h5>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </Fragment>
    )
}
