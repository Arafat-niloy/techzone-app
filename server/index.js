const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy Data (12 Products with Online Image URLs)
// Note: Using Unsplash images ensures they load on Vercel deployments
let products = [
  { 
    id: 1, 
    title: "Wireless Headphones", 
    shortDesc: "Noise cancelling, 20h battery", 
    fullDesc: "Experience superior sound quality with active noise cancellation.", 
    price: 120, 
    category: "Audio", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" 
  },
  { 
    id: 2, 
    title: "Smart Watch", 
    shortDesc: "Fitness tracker, Heart rate", 
    fullDesc: "Stay fit and connected with this advanced smartwatch.", 
    price: 80, 
    category: "Wearable", 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" 
  },
  { 
    id: 3, 
    title: "Gaming Mouse", 
    shortDesc: "RGB Lighting, 16000 DPI", 
    fullDesc: "Precision gaming mouse with customizable RGB lighting.", 
    price: 45, 
    category: "Gaming", 
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80" 
  },
  { 
    id: 4, 
    title: "Mechanical Keyboard", 
    shortDesc: "Blue switches, Compact", 
    fullDesc: "Tactile feedback for the best typing experience.", 
    price: 100, 
    category: "Gaming", 
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=600&q=80" 
  },
  { 
    id: 5, 
    title: "DSLR Camera", 
    shortDesc: "24MP, 4K Video", 
    fullDesc: "Capture stunning moments with high resolution.", 
    price: 450, 
    category: "Camera", 
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80" 
  },
  { 
    id: 6, 
    title: "Laptop Stand", 
    shortDesc: "Aluminum, Adjustable", 
    fullDesc: "Ergonomic design to reduce neck strain.", 
    price: 30, 
    category: "Accessory", 
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80" 
  },
  { 
    id: 7, 
    title: "Bluetooth Speaker", 
    shortDesc: "Waterproof, 360 Sound", 
    fullDesc: "Portable speaker with deep bass and IPX7 waterproof rating.", 
    price: 60, 
    category: "Audio", 
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80" 
  },
  { 
    id: 8, 
    title: "4K Monitor", 
    shortDesc: "27-inch, IPS Panel", 
    fullDesc: "Ultra HD monitor for professional editing and gaming.", 
    price: 300, 
    category: "Electronics", 
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80" 
  },
  { 
    id: 9, 
    title: "Gaming Chair", 
    shortDesc: "Ergonomic, Lumbar Support", 
    fullDesc: "High-back gaming chair providing ultimate comfort for long sessions.", 
    price: 150, 
    category: "Furniture", 
    image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&q=80" 
  },
  { 
    id: 10, 
    title: "Power Bank", 
    shortDesc: "20000mAh, Fast Charging", 
    fullDesc: "High capacity power bank to charge your devices on the go.", 
    price: 40, 
    category: "Accessory", 
    image: "https://images.unsplash.com/photo-1609592803668-b70062b3394a?w=600&q=80" 
  },
  { 
    id: 11, 
    title: "VR Headset", 
    shortDesc: "Immersive 3D, Wireless", 
    fullDesc: "Step into a new reality with this advanced VR headset.", 
    price: 350, 
    category: "Gaming", 
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=600&q=80" 
  },
  { 
    id: 12, 
    title: "USB-C Hub", 
    shortDesc: "7-in-1 Adapter", 
    fullDesc: "Expand your laptop's connectivity with HDMI, USB, and SD card slots.", 
    price: 25, 
    category: "Accessory", 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" 
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
    // Fallback image if user doesn't provide one
    image: req.body.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80" 
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