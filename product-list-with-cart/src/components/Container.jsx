import { useEffect, useState } from "react";

function Container() {
  const [data, setData] = useState(null);
  const [cart,  setCart] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  function addToCart (item) {
    setCart((prevCart) => {
      // check if this item is already in the cart
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);

      if(existingItem) {
        // if it already exists just increase its quantity
        return prevCart.map((cartItem) => cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      } else {
         // New item → add it with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
      }
    })
  }

  return (
    <div className="max-md:px-4 max-md:py-8 md:p-12 lg:p-16 grid md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-8 col-span-2">
        <h1 className="text-5xl md:text-3xl lg:text-xl  font-bold">Desserts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <div key={item.name} className="flex flex-col gap-8">
                <div className="relative">
                  <img
                    className="md:hidden rounded-md"
                    src={item.image.mobile}
                    alt=""
                  />
                  <img
                    className="hidden md:block lg:hidden rounded-md"
                    src={item.image.tablet}
                    alt=""
                  />
                  <img
                    className="hidden lg:block rounded-lg"
                    src={item.image.desktop}
                    alt=""
                  />

                  <button 
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-1 absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2 cursor-pointer bg-[hsl(20,50%,98%)] px-4 py-2 border border-[hsl(12,20%,44%)] rounded-3xl text-[hsl(14,65%,9%)] font-semibold">
                    <img src="/assets/images/icon-add-to-cart.svg" alt="" 
                    />
                    Add to Cart
                  </button>
                </div>

                <div>
                  <p className="text-[hsl(12,20%,44%)] font-semibold">
                    {item.category}
                  </p>
                  <p className="text-lg text-[hsl(14,65%,9%)] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-[hsl(14,86%,42%)] text-lg font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[hsl(20,50%,98%)] col-span-1 p-4">
        <h2 className="text-[hsl(14,86%,42%)] text-lg font-semibold">
          Your Cart (7)
        </h2>
        <div className="bg-[hsl(20,50%,98%)] col-span-1 p-4">
  <h2 className="text-[hsl(14,86%,42%)] text-lg font-semibold">
    Your Cart ({cart.length})
  </h2>

  {cart.length === 0 ? (
    <p className="text-sm text-gray-400 mt-4">Your cart is empty.</p>
  ) : (
    <ul className="mt-4 flex flex-col gap-3">
      {cart.map((cartItem) => (
        <li key={cartItem.name} className="flex justify-between text-sm">
          <span>{cartItem.name} × {cartItem.quantity}</span>
          <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  )}
</div>

      </div>
    </div>
  );
}

export default Container;
