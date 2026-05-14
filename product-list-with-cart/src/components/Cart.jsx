function Cart({ cart, removeFromCart, orderTotal }) {

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
        </ul>
      )}

      {cart.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between">
            <span>
              Order Total
            </span>
            <span className="font-bold text-[hsl(14,65%,9%)] text-3xl flex items-center">
              ${orderTotal}
            </span>
          </div>

          <div className="flex justify-center gap-4 bg-[hsl(13,31%,94%)] p-2 rounded-md">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
            <p>
              This is a  <span className="font-semibold">carbon-neutral</span> delivery
            </p>
          </div>

          <button className="bg-[hsl(14,86%,42%)] text-[hsl(13,31%,94%)] px-4 py-2 rounded-3xl w-full cursor-pointer">
            Confirm Order
          </button>
          
        </div>
      )}
      
    </div>
  );
}

export default Cart;
