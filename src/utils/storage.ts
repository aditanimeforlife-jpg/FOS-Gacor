// Tambahkan di dalam initializeDemoData (lanjutan demoStores)

const additionalSellers: User[] = [
  {
    id: "4",
    email: "seller@kopikuy.com",
    password: "kopikuy123",
    role: "seller",
    name: "Kopi Kuy",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    email: "seller@satepadang.com",
    password: "sate123",
    role: "seller",
    name: "Sate Padang Maknyus",
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    email: "seller@baksohebat.com",
    password: "bakso123",
    role: "seller",
    name: "Bakso Hebat",
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    email: "seller@ayamgeprek.com",
    password: "geprek123",
    role: "seller",
    name: "Ayam Geprek Mantul",
    createdAt: new Date().toISOString(),
  },
];
saveUsers([...getUsers(), ...additionalSellers]);

const additionalStores: Store[] = [
  {
    id: "2",
    sellerId: "4",
    name: "Kopi Kuy",
    image: "https://picsum.photos/400/300?random=11",
    qrisImage: "https://picsum.photos/300/300?random=21",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    sellerId: "5",
    name: "Sate Padang Maknyus",
    image: "https://picsum.photos/400/300?random=12",
    qrisImage: "https://picsum.photos/300/300?random=22",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    sellerId: "6",
    name: "Bakso Hebat",
    image: "https://picsum.photos/400/300?random=13",
    qrisImage: "https://picsum.photos/300/300?random=23",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    sellerId: "7",
    name: "Ayam Geprek Mantul",
    image: "https://picsum.photos/400/300?random=14",
    qrisImage: "https://picsum.photos/300/300?random=24",
    createdAt: new Date().toISOString(),
  },
];
saveStores([...getStores(), ...additionalStores]);

const additionalIngredients: Ingredient[] = [
  {
    id: "4",
    sellerId: "4",
    name: "Coffee Beans",
    stock: 10,
    unit: "kg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    sellerId: "5",
    name: "Beef",
    stock: 20,
    unit: "kg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    sellerId: "6",
    name: "Meatballs",
    stock: 50,
    unit: "pcs",
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    sellerId: "7",
    name: "Chicken Fillet",
    stock: 30,
    unit: "kg",
    createdAt: new Date().toISOString(),
  },
];
saveIngredients([...getIngredients(), ...additionalIngredients]);

const additionalMenus: Menu[] = [
  {
    id: "5",
    sellerId: "4",
    storeName: "Kopi Kuy",
    name: "Es Kopi Susu Gula Aren",
    description: "Signature iced coffee with palm sugar and milk",
    price: 18000,
    image: "https://picsum.photos/400/300?random=34",
    category: "Beverages",
    ingredients: [
      { ingredientId: "4", ingredientName: "Coffee Beans", quantity: 0.02 },
    ],
    rating: 4.7,
    reviewCount: 30,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    sellerId: "5",
    storeName: "Sate Padang Maknyus",
    name: "Sate Padang Komplit",
    description: "Traditional Padang satay with spicy sauce and rice cake",
    price: 20000,
    image: "https://picsum.photos/400/300?random=35",
    category: "Main Course",
    ingredients: [
      { ingredientId: "5", ingredientName: "Beef", quantity: 0.3 },
    ],
    rating: 4.6,
    reviewCount: 22,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    sellerId: "6",
    storeName: "Bakso Hebat",
    name: "Bakso Komplit",
    description: "Meatball soup with noodles, tofu, and egg",
    price: 17000,
    image: "https://picsum.photos/400/300?random=36",
    category: "Main Course",
    ingredients: [
      { ingredientId: "6", ingredientName: "Meatballs", quantity: 5 },
    ],
    rating: 4.4,
    reviewCount: 28,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    sellerId: "7",
    storeName: "Ayam Geprek Mantul",
    name: "Ayam Geprek Level 5",
    description: "Spicy smashed fried chicken with sambal",
    price: 16000,
    image: "https://picsum.photos/400/300?random=37",
    category: "Main Course",
    ingredients: [
      { ingredientId: "7", ingredientName: "Chicken Fillet", quantity: 0.3 },
    ],
    rating: 4.9,
    reviewCount: 35,
    createdAt: new Date().toISOString(),
  },
];
saveMenus([...getMenus(), ...additionalMenus]);
