import React from "react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  originalPrice?: number;
  discountedPrice?: number;
  imageUrl: string;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  originalPrice,
  discountedPrice,
  imageUrl,
  isSale = false,
}) => {
  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="group flex flex-col bg-[#171717] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#EAB308]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)] relative">
      {/* Sale Badge */}
      {isSale && (
        <div className="absolute top-4 left-4 z-10 bg-[#22c55e] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md">
          Sale!
        </div>
      )}

      {/* Product Image */}
      <Link
        href={`/products/${id}`}
        className="block relative w-full aspect-square overflow-hidden bg-zinc-900 cursor-pointer"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out saturate-50 group-hover:saturate-100"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col items-center justify-between flex-1 p-6 text-center">
        <div className="flex flex-col items-center w-full">
          <span className="text-zinc-500 text-xs italic lowercase mb-2 tracking-wide">
            {category}
          </span>
          <Link href={`/products/${id}`}>
            <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-[#EAB308] transition-colors line-clamp-2 uppercase">
              {title}
            </h3>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mt-auto">
          {/* Price Section */}
          <div className="flex items-center gap-3 mb-6">
            {originalPrice && (
              <span className="text-zinc-500 line-through text-sm font-medium">
                {formatPrice(originalPrice)}
              </span>
            )}
            {discountedPrice ? (
              <span className="text-[#4ade80] font-bold text-lg drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                {formatPrice(discountedPrice)}
              </span>
            ) : (
              <span className="text-[#4ade80] font-bold text-lg drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                Contact for Price
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="w-full py-2.5 px-6 bg-transparent border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest text-xs rounded hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
            Add to cart
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
