import React from "react";
import ImageGallery from "../../Components/ImageGallery";

const BuyEquipmentPage = () => {
  const images = [
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Fructose Dispensor Machine",
      voltageWatts: "110/220V, 300W",
      dimensions: "260x360x410 mm",
      weight: "9 kg",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Sealing Machine",
      voltageWatts: "110(400W)",
      dimensions: "340x360x610 mm",
      weight: "24 kg",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Tea Brewer (info is wrong)",
      voltageWatts: "N/A FOR NOW CONFIRM",
      dimensions: "N/A FOR NOW CONFIRM",
      weight: "N/A FOR NOW CONFIRM",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Steam & Hot Water Dispenser (info is wrong)",
      voltageWatts: "220V, 3000W",
      dimensions: "320x440x620 mm",
      weight: "N/A FOR NOW CONFIRM",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Steam & Hot Water Dispenser (info is wrong)",
      voltageWatts: "120V, 500W",
      dimensions: "24x18x12 inches",
      weight: "15 lbs",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Induction Cooker (info is wrong)",
      voltageWatts: "120V, 500W",
      dimensions: "24x18x12 inches",
      weight: "15 lbs",
      certifications: "cUL",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Mini Teapresso Machine",
      voltageWatts: "220/240 VAC, 1500W",
      dimensions: "370x500x440 mm",
      weight: "26 kg",
      certifications: "ETL, NSF",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Under Counter Single Group Teapresso Machine",
      voltageWatts: "220/240 VAC, 2700W",
      dimensions: "20.07 x 19.29 x 33.07 in",
      weight: "50 kg",
      certifications: "ETL, NSF",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Under Counter Steam and HotWater Machine",
      voltageWatts: "220/240 VAC, 3000W",
      dimensions: "20.07” x 19.29” x 33.07 in",
      weight: "45 kg",
      certifications: "ETL, NSF",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "L Series Two Group TeapresoMachine",
      voltageWatts: "220/240 VAC, 5000W",
      dimensions: "720x560x580 mm",
      weight: "75 kg",
      certifications: "ETL, NSF",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "L Series Two Group TeapresoMachine",
      voltageWatts: "220/240 VAC, 7000W",
      dimensions: "970x560x580 mm",
      weight: "84 kg",
      certifications: "ETL, NSF",
    },
    {
      url: "./Logo.png",
      alt: "A descriptive alt text",
      title: "Smart Bulk Brewing SystemMachine",
      voltageWatts: "220/240 VAC, 4100 W",
      dimensions: "410x600x845 mm",
      weight: "47.5 kg",
      certifications: "ETL, NSF",
    },
  ];

  return (
    <div>
      <h1>Buy Equipment Page</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default BuyEquipmentPage;
