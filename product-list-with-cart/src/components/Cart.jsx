function Cart({ cart, removeFromCart }) {
  // const orderTotal = cart.reduce((acc, curr) => {return acc + curr.price});

  return (
    <div className="bg-[hsl(20,50%,98%)] md:w-1/3 p-4">
      <h2 className="text-[hsl(14,86%,42%)] text-lg font-semibold">
        Your Cart ({cart.length})
      </h2>

      {/* display the data in the cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart illustration"
          />
          <p className="text-sm text-[hsl(12,20%,44%)] font-semibold">
            Your added items will be added here
          </p>
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {cart.map((cartItem) => {
            const orderTotal = cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity).toFixed(2));

            return (
              <li key={cartItem.name} className=" border-[hsl(7,20%,60%)] ">
                <div className="flex justify-between items-center text-sm border-b pb-2">
                  <div>
                    <span className="font-semibold">{cartItem.name}</span>
                    <div className="flex gap-2">
                      <span className="text-[hsl(14,86%,42%)] font-semibold">
                        {cartItem.quantity}x
                      </span>
                      <span className="text-[hsl(12,20%,44%)]">
                        @ ${cartItem.price.toFixed(2)}
                      </span>
                      <span className="text-[hsl(12,20%,44%)] font-semibold">
                        ${(cartItem.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(cartItem)}
                    className="cursor-pointer border-2 border-[hsl(12,20%,44%)] h-5 w-5 flex items-center justify-center rounded-full"
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove icon image"
                    />
                  </button>
                </div>
              </li>
            );
          })}
          <li>
            <span>
                Order Total
            </span>
            <span>
                {orderTotal}
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Cart;
