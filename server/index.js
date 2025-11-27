const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy Data (Total 12 Products with Local Images)
let products = [
  // --- Existing 6 Products ---
  { 
    id: 1, 
    title: "Wireless Headphones", 
    shortDesc: "Noise cancelling, 20h battery", 
    fullDesc: "Experience superior sound quality with active noise cancellation.", 
    price: 120, 
    category: "Audio", 
    image: "/images/p1.jpg" 
  },
  { 
    id: 2, 
    title: "Smart Watch", 
    shortDesc: "Fitness tracker, Heart rate", 
    fullDesc: "Stay fit and connected with this advanced smartwatch.", 
    price: 80, 
    category: "Wearable", 
    image: "/images/p2.jpg" 
  },
  { 
    id: 3, 
    title: "Gaming Mouse", 
    shortDesc: "RGB Lighting, 16000 DPI", 
    fullDesc: "Precision gaming mouse with customizable RGB lighting.", 
    price: 45, 
    category: "Gaming", 
    image: "/images/p3.jpg" 
  },
  { 
    id: 4, 
    title: "Mechanical Keyboard", 
    shortDesc: "Blue switches, Compact", 
    fullDesc: "Tactile feedback for the best typing experience.", 
    price: 100, 
    category: "Gaming", 
    image: "/images/p4.jpg" 
  },
  { 
    id: 5, 
    title: "DSLR Camera", 
    shortDesc: "24MP, 4K Video", 
    fullDesc: "Capture stunning moments with high resolution.", 
    price: 450, 
    category: "Camera", 
    image: "/images/p5.jpg" 
  },
  { 
    id: 6, 
    title: "Laptop Stand", 
    shortDesc: "Aluminum, Adjustable", 
    fullDesc: "Ergonomic design to reduce neck strain.", 
    price: 30, 
    category: "Accessory", 
    image: "/images/p6.jpg" 
  },

  // --- New 6 Products ---
  { 
    id: 7, 
    title: "Bluetooth Speaker", 
    shortDesc: "Waterproof, 360 Sound", 
    fullDesc: "Portable speaker with deep bass and IPX7 waterproof rating.", 
    price: 60, 
    category: "Audio", 
    image: "/images/p7.jpg" 
  },
  { 
    id: 8, 
    title: "4K Monitor", 
    shortDesc: "27-inch, IPS Panel", 
    fullDesc: "Ultra HD monitor for professional editing and gaming.", 
    price: 300, 
    category: "Electronics", 
    image: "/images/p8.jpg" 
  },
  { 
    id: 9, 
    title: "Gaming Chair", 
    shortDesc: "Ergonomic, Lumbar Support", 
    fullDesc: "High-back gaming chair providing ultimate comfort for long sessions.", 
    price: 150, 
    category: "Furniture", 
    image: "/images/p9.jpg" 
  },
  { 
    id: 10, 
    title: "Power Bank", 
    shortDesc: "20000mAh, Fast Charging", 
    fullDesc: "High capacity power bank to charge your devices on the go.", 
    price: 40, 
    category: "Accessory", 
    image: "/images/p10.jpg" 
  },
  { 
    id: 11, 
    title: "VR Headset", 
    shortDesc: "Immersive 3D, Wireless", 
    fullDesc: "Step into a new reality with this advanced VR headset.", 
    price: 350, 
    category: "Gaming", 
    image: "/images/p11.jpg" 
  },
  { 
    id: 12, 
    title: "USB-C Hub", 
    shortDesc: "7-in-1 Adapter", 
    fullDesc: "Expand your laptop's connectivity with HDMI, USB, and SD card slots.", 
    price: 25, 
    category: "Accessory", 
    image: "/images/p12.jpg" 
  }
];

// Routes

// 1. Get All Products
app.get('/products', (req, res) => {
  res.json(products);
});

// 2. Get Single Product
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product ? res.json(product) : res.status(404).send('Not found');
});

// 3. Add Product
app.post('/products', (req, res) => {
  const newProduct = { 
    id: Date.now(), 
    ...req.body, 
    // If no image provided, check if client provided a path or use a placeholder
    image: req.body.image || "/images/p1.jpg" 
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// 4. Delete Product
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.status(200).send('Deleted');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});