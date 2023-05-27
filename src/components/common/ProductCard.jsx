import React from "react";

const ProductCard = ({ name, description, price, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src={imageUrl} alt={name} /> */}
      <div className="h-36 bg-black/10">
        <img className="w-full" src="" alt="product image" />
      </div>

      <div className="px-6 py-4">
        {/* <div className="font-bold text-xl mb-2">{name}</div> */}
        <div className="font-bold text-xl mb-2">Name</div>

        {/* <p className="text-gray-700 text-base">{description}</p> */}
        <p className="text-gray-700 text-base truncate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          architecto sunt voluptatibus! Accusantium fuga reprehenderit modi
          ullam, omnis quae pariatur! Tempora officia velit, voluptatum aut modi
          quidem consectetur dicta sapiente! Deserunt quod consequuntur
          repellendus maxime maiores, modi quidem excepturi voluptatibus itaque
          quasi amet, eaque voluptatum, optio hic dolorem cumque. Delectus!
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* <p className="text-gray-700 text-base">${price}</p> */}
        <p className="text-gray-700 text-base">$39</p>

        <button className="mt-2 bg-primary/50 hover:bg-primary/70 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
