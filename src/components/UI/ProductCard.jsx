import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { wishlistActions } from "../../redux/slices/wishlistSlice";

const ProductCard = ({ item , isWishlistPage}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    setIsAddedToCart(true);
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        quantity: quantity,
      })
    );
  };

  const removeFromCart = () => {
    setIsAddedToCart(false);
    dispatch(cartActions.removeItem(item.id));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToWishlist = () => {
    setIsAddedToWishlist(true);
    dispatch(
      wishlistActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        quantity: quantity,
      })
    );
  };

  const removeFromWishlist = () => {
    setIsAddedToWishlist(false);
    dispatch(wishlistActions.removeItem(item.id));
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/products/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <div className="product__actions">
            {isWishlistPage ? (
              <i className="ri-heart-fill" onClick={removeFromWishlist}></i>
            ) : isAddedToWishlist ? (
              <i className="ri-heart-fill" onClick={removeFromWishlist}></i>
            ) : (
              <i className="ri-heart-line" onClick={addToWishlist}></i>
            )}
            {isAddedToCart ? (
              <div className="quantity">
                <motion.span whileTap={{ scale: 1.2 }} onClick={removeFromCart}>
                  <i className="ri-subtract-line"></i>
                </motion.span>
                <span>{quantity}</span>
                <motion.span
                  whileTap={{ scale: 1.2 }}
                  onClick={increaseQuantity}
                >
                  <i className="ri-add-line"></i>
                </motion.span>
              </div>
            ) : (
              <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                <i className="ri-shopping-cart-line"></i>
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
