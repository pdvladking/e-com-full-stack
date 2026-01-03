import mongoose from "mongoose";
import dbConnect from "../src/lib/dbConnect.js";
import Product from "../src/models/Product.js";

async function seedProducts() {
  try {
    await dbConnect();

    const products = [
      {
        name: "The Artisan Satchel",
        image: "/images/featured-1.webp",
        price: 120,
        stock: 12,
        slug: "artisan-satchel",
      },
      {
        name: "Heritage Wallet",
        image: "/images/featured-2.webp",
        price: 80,
        stock: 34,
        slug: "heritage-wallet",
      },
      {
        name: "Classic Belt",
        image: "/images/featured-3.webp",
        price: 60,
        stock: 20,
        slug: "classic-belt",
      },
    ];

    await Product.deleteMany({});
    console.log("Old products removed");

    await Product.insertMany(products);
    console.log("Products seeeded successfully");

    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding error:", err);
    mongoose.connection.close();
  }
}

seedProducts();