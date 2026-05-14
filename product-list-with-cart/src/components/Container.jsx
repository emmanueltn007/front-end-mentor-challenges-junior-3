import { useEffect, useState } from "react";
import Cart from "./Cart";
import DessertsGrid from "./DessertsGrid";

function Container() {
  // set up states
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  // use useEffect() to fetch data
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // show "Loading..." if there's no data
  if (!data) return <div>Loading...</div>;

  function addToCart(item) {
    setCart((prevCart) => {
      // check if this item is already in the cart
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name,
      );

      if (existingItem) {
        // if it already exists just increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        // New item → add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }

  function removeFromCart (item) {
    setCart(cart.filter((i) => i.name !== item.name))
  }

  const orderTotal = cart.reduce((curr, cartItem) => curr + cartItem.price * cartItem.quantity, 0).toFixed(2);

  return (
    <div className="max-md:px-4 max-md:py-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-4">
      {/* GRID SECTION */}
      <DessertsGrid data={data} addToCart={addToCart} />
      
      {/* CART SECTION */}
      <Cart cart={cart} removeFromCart={removeFromCart} orderTotal={orderTotal} />
    </div>
  );
}

export default Container;
