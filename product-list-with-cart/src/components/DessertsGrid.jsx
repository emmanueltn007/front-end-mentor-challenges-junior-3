function DessertsGrid({ data, addToCart }) {
  return (
    <div className="flex flex-col gap-8 md:w-2/3">
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
                  className="flex items-center gap-1 absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2 cursor-pointer bg-[hsl(20,50%,98%)] px-4 py-2 border border-[hsl(12,20%,44%)] rounded-3xl text-[hsl(14,65%,9%)] font-semibold"
                >
                  <img src="/assets/images/icon-add-to-cart.svg" alt="" />
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
  );
}

export default DessertsGrid;
