import { Layout } from "antd";
import React from "react";
import "./cartpage.css";
import { useCart } from "../../components/useContext/useContexCart";
import Empty from "../../images/empty.png";
export default function Cartpage(product) {
  const [cart, setCart] = useCart();

  const RemoveCartItem = (index) => {
    try {
      let myCart = [...cart];
      // let index = myCart.findIndex((item) => item.id === productId);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem('cart', JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  
console.log(cart);
const totalPrice = () => {
  console.log("test ")
  try {
    let total = 0.0;
    cart?.map((item) => {
      let parsedPrice=item.price.slice(0,item.price.length-1);
      parsedPrice = parseFloat(parsedPrice)
      console.log(parsedPrice, "price");
      total = total + parsedPrice;
    });
    return total.toLocaleString('en-us');
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <Layout>
        <div className="cart-container-box">
          <div className="row-cart">
            <h2 className="cart-t-title">Delicious Wizard Cart</h2>
            <div className="text-center">
              {cart?.length > 0 ? (
                `You have ${cart.length} item${
                  cart.length > 1 ? "s" : ""
                } in your cart`
              ) : (
                <div>
                  <p>Your cart is empty</p>
                  <img src={Empty} alt="Empty cart" />
                </div>
              )}
            </div>

            <div className="item-c-row">
              <div className="col-md-9">
                <h3>Cart Item</h3>
                {/* //////////////////////////////////////////////////// */}
                <div className="row-item-cart">
                  {/* <div className="col-md-9"> */}
                  {cart?.map((product, index) => (
                    <div className="row-item-cart" key={index}>
                      <div className="col-md-8"></div>
                      <div className="col-md-4 cartt-detail">
                        <div>
                          <img
                            className="img-fluid"
                            src={`https://restaurant-backend-1.onrender.com${product.dishImage}`}
                            alt="food"
                            style={{
                              height: "36px",
                              width: "40px",
                              borderRadius: "50px",
                            }}
                          />
                        </div>
                        <div>
                          <h2>{product.name}</h2>
                          <p>{product.description.substring(0, 20)}</p>
                          <p>{product.price}</p>
                        </div>
                        <div>
                        <i
          className="ri-delete-bin-5-fill remove-icon"
          onClick={() => RemoveCartItem(index)}
        ></i>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>{" "}
                {/* </div> */}
              </div>

              <div className="col-md-3 text content">
                <h2>Cart summary</h2>
                <p>Total |Checkout | Payment</p>
              <hr/>
              <h4>Total: {" "}{totalPrice()}$</h4>

              </div>
            </div>
          </div>{" "}
        </div>
      </Layout>
    </div>
  );
}
