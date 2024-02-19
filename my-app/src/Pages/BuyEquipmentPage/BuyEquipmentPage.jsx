import React from "react";
import ImageGallery from "../../Components/ImageGallery";

const BuyEquipmentPage = () => {
  const images = [
    { url: "./Logo.png", alt: "Image description 1" },
    { url: "./Logo.png", alt: "Image description 1" },
    { url: "./Logo.png", alt: "Image description 1" },
    { url: "./Logo.png", alt: "Image description 1" },
    { url: "./Logo.png", alt: "Image description 1" },
  ];

  return (
    <div>
      <h1>Buy Equipment Page</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default BuyEquipmentPage;
