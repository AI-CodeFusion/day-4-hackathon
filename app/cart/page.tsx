


"use client";

import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import { Product } from "@/types/products";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt="Product Image"
                  width={500}
                  height={500}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-2 py-1 border rounded-md bg-gray-200"
                >
                  -
                </button>
                <span className="px-4">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-2 py-1 border rounded-md bg-gray-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">Total: ${calculatedTotal()}</div>
          <button
            onClick={handleProceed}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
