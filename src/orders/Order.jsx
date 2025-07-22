import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../comp/Title';

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-gray-300 px-4 sm:px-8 py-12 max-w-5xl mx-auto">
      <div className="text-2xl mb-6">
        <Title text1="My" text2="Orders" />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6"
          >
            {/* Left: Image + Details */}
            <div className="flex gap-4">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-medium text-base text-black">{item.name}</p>
                <div className="text-sm text-gray-700 mt-1 flex flex-wrap gap-3">
                  <span className="font-semibold text-gray-900">
                    {currency}
                    {item.price}
                  </span>
                  <span>Quantity: 1</span>
                  <span>Size: M</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Date: <span>25, Jul, 2024</span>
                </p>
              </div>
            </div>

            {/* Right: Status + Button */}
            <div className="flex flex-col items-start md:items-end gap-2 min-w-[120px]">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Ready to ship
              </div>
              <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
