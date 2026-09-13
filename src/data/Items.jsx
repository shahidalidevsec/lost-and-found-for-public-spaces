
const categories = [
  {
    name: "Phones & Tablets" ,
    icon: <img src="data:image/png;base64,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" alt="" />,
    color: "text-red-500",
    
  },
  {
    name: "Bags",
     icon: <img className="h-25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACUCAMAAABcK8BVAAAAaVBMVEX/AAD/////0ND/1tb/2tr/9/f/+vr/3t7/7Oz/6en/Rkb/YmL/urr/sLD/8fH/5eX/hIT/i4v/a2v/tbX/fn7/rKz/Pj7/kZH/x8f/Hh7/dnb/Jib/UFD/W1v/NDT/oaH/mpr/FBT/LS0QKi4qAAAGFklEQVR4nO2c13qjMBBGCR2MjTu447z/Q64xMYzKqGCQdLH/Xb4d4AQxTaON9zOB4jTx62WzWW+q6lD7STrFTX+8728RVNv85AE983MT2EcL1h5fzyaIbaLVewTsrb1vDa08i8BabRM7aLtfGZnnXXYW0OKNHOy9qpFptJV0MftFXZlFi5TJxrONRBN6Jq2zSbSDDpnnHcyhBU89tOeoADcK7co+Pd8fiqKui+Kw5v2rKTR6Oe/7msxJ/uZImYwJbyPQVtRr2XNCfklFvduI6DYCrSAeekK+o/Dy7WsbgUa8tDta/YR34rWZQCuJtyGoywLCMDOA9oAPFEYswrIxgLYAz7sKc1CaA9PF/GgJ/IQkHzeMMsdydrQaZIKnJCRkcEXr2dHgB7SVGd+A8WN2NFgNFTJjuKL72dFgVJNW/gl0mbnRYtBx/kpjVQp85qTb++miRTAeSBNjtAXmumlUFy0FzzpL30MMq2Hdxk8XDX49G7l5Bcx160ldNJgYFXJPA8x1A5sumu8uWg2epRBEYWCTRsEJ0ZZy852e+VdosMRVqFw1f5Ov0OBrUFgh/2kObTk86qnwXYcnc2hgQZ8Km6IpaF7m9lDQGRxV7EFDqltLalceQ/2ttEBDeafdU+kX4J/3oJCmXoo/9V2uvXeq37YkXTPSKNY4q66Pv2q3BmNa5Mjf7A8abWW2rJpwxEb9BCONufQfbYz+o40RihalZZkk4UtBJ/87BYPCt5IkKcssTVeY8/LRUo2xwPfa8uenXDSiRzOgBXfDiYtWye82rSpVtOguv9m04u5C89Ay+b2mFm9FeWiF6Ca3TbXORQY83bf7s/CiUBENG6d73m+Tta4el2edUdA2jOL2os0JNeH1jTw09PcDNZevMELudBkKbx+9M2+nl4O2wrwgh5VQgr8CQie4ViU9IPqIV8xz0HzsoWSdWiNWlMhmJUGsLpwamIO2Qy5fU3ZKcZleKWxiz+lpOWhIwGWGmj7fjhRzEbIknK0dFg3LUlc6LK5U0OiAFXGmpa32bJJn0VLE9xgnipGnEL8P88QF3/DIBl0WreRfy0G7IZbwIgYN+0LZPohFw7yAaXEjLBIA3ZnkiLw1zrYDi4blgpx+5UrfGl2KYd8ap/hg0dCyg/69lpghFD2VrLEMxwZdBi1Cozx9kkTBC17vmlpR9OwKO/Fg0ARnOMiw2KiQ0QuFFzXslhiDJjj4Quz1KS1nK7iktSDxMhtPDJro7NezvzzSqNGrfk0LUSnF+AGNJulYbrvw1Z8FS4W4Meh+CNI0C3dY3Oi0peMMjZbJHvp7zPOLxIbRKc+PsgLvSMcZGi2Q3GBG0UU4jSbsC+YVXRfRaFpn5qYVXQ/SaMZb0EF0PqDR7JF5DAr5Y2gTLRSiaR6CnFYHIRreHRvQWoRmeveKFJUPSDS0hTUi6kQUiaZ7qnViBQI0rC8wpKUAzaoX0H5Aoln91F7VkwDNLhmVD4ifsH0cYwpRNMteQB3PINAsewF1MhCixeLi3YCILRKIlmnvbE8tIh9ANMu5wKO2FyGaxb7gox2Cpvg/o+bUGkFT2MqbW1cEzTZXq5iLhu2UGlXCRXPAC4i6CKA54AWEHwA067mg1S3moKXWc0ErMKIb0NCpmVGBfDCgOeEFMB8MaI1tqE4VB80JL4Dzph4tUp5Yz6tLxKA5kQtaJQya4rx6fhUMmvHDOpg2DJojXgD84IO2sty4D+rnyR+00BEHfbloQKE5kgta7Si0h/wSU2pItNjoCUSxtjGBpjLiN6VjRKCl8ivMqSTQlA7hmFJBoDnkBb0f/KFZnRfQWkC02CEv6P2gQyu1R9Zz6u+cXYeGnlmxoxqgOeUFHz/o0Kxv4pLaD2j0X+iwre7vI7zRMie6Y6CsR7M61uYp6NGUjy6Z0qNHs3i4g69tj+ZULmh1/6CtXPMC75T+oTlVEXXy/9Cc84LuyEeL5sQmLql1hxY7Vax1ao98eAoH/SzomL3RrI+1eUreaM5sX0EVb7TGNgZP1RvNgYEeq+sbzTYFXy2a0tl880pfaA6mqVb1C83qGURcjxeag2mq1fqF5tDOGtT55x/1iUwH8jXyPgAAAABJRU5ErkJggg==" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Jewelry",
      icon: <img className="h-25" src="data:image/png;base64,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" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Watches",
       icon: <img className="h-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCN3Km0aWJGC9p3Z9AsmVAFEl8cKYqCCJWA5sHOB4Inw&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "People",
      icon: <img  className="h-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahxeMuefrw8BiGxaeR8fntL11VB35ASjlM9MewBT4WQ&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Documents",
     icon: <img className="h-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOCO7Wi1UBDPhy-WhqE9hkH9QxdVzrLUBMgAzflcpDw&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Keys",
    icon: <img className="h-19" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyh5ZHicuRUxjrPGRQujdmTdsPt9wZYcfZpbgE-W13Q&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Toys",
    icon: <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEtp8j1g7YuCZ9oC8iI60zKImpNo1tucNYUEcEgMwEg&s" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Laptop",
    icon: <img className=" h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmmCsweinEdXWRe63c4JVe_aiFJGOJ-4Ri4asszypgg&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Fashion Accessories",
     icon: <img className="h-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rglEDKrLrL66l5AaHP6IB-K05QK_8wU-el1EA5mHuw&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Clothes & Shoes",
    icon: <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIk79u3iaVzCjQs1dsM0Ntq0cx0NqgGLCNGxcoDPSbAw&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Pets",
    icon: <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEmsl-muzMtpYBEPn4HuxUXiSXeM8Qw1Bvuii_LzJAw&s" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Sports Equipment",
     icon: <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjilWbqGi5PHSkjgWcTIlexTnvKojGQCsKX5Xgso7TQ&s=10" alt="" />,
    color: "text-red-500",
  },
  {
    name: "Other",
    icon: <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWCqYT1d-keE5UfPDiSi1iBozSsHJ8JD9awsUnh5Q9A&s=10" alt="" />,
    color: "text-orange-500",
  },
  {
    name: "Automobile",
    icon: <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOlT_cMCwwzjbXdTuB63polHyTcKuxVX8ZU-gcxGf8A&s=10" alt="" />,
    color: "text-red-500",
  },
];


// --------------------------------------------------
// Item names
// --------------------------------------------------

const itemNames = {
  "Phones & Tablets": [
    "iPhone 15",
    "iPhone 14",
    "iPhone 13",
    "iPhone 12",
    "Samsung Galaxy S24",
    "Samsung Galaxy S23",
    "Samsung Galaxy A54",
    "OnePlus 12",
    "OnePlus 11",
    "Google Pixel 8",
    "Google Pixel 7",
    "Redmi Note 13",
    "Redmi Note 12",
    "Realme Phone",
    "Oppo Phone",
    "Vivo Phone",
    "iPad",
    "iPad Air",
    "iPad Mini",
    "Samsung Tablet",
  ],

  Bags: [
    "Black Backpack",
    "Blue Backpack",
    "College Bag",
    "Laptop Bag",
    "Travel Bag",
    "School Bag",
    "Office Bag",
    "Leather Bag",
    "Shoulder Bag",
    "Hand Bag",
    "Brown Backpack",
    "Grey Backpack",
    "Red Bag",
    "Sports Bag",
    "Camera Bag",
    "Trolley Bag",
    "Small Backpack",
    "Large Backpack",
    "Messenger Bag",
    "Crossbody Bag",
  ],

  Jewelry: [
    "Gold Ring",
    "Silver Ring",
    "Gold Chain",
    "Silver Chain",
    "Gold Bracelet",
    "Silver Bracelet",
    "Diamond Ring",
    "Pearl Necklace",
    "Earrings",
    "Gold Earrings",
    "Silver Earrings",
    "Pendant",
    "Necklace",
    "Bangle",
    "Gold Bangle",
    "Silver Bangle",
    "Anklet",
    "Brooch",
    "Jewelry Box",
    "Wedding Ring",
  ],

  Watches: [
    "Rolex Watch",
    "Casio Watch",
    "Titan Watch",
    "Fastrack Watch",
    "Apple Watch",
    "Samsung Watch",
    "Smart Watch",
    "Black Watch",
    "Silver Watch",
    "Gold Watch",
    "Digital Watch",
    "Analog Watch",
    "Sports Watch",
    "Fitness Watch",
    "Leather Watch",
    "Metal Watch",
    "Blue Watch",
    "Brown Watch",
    "Kids Watch",
    "Classic Watch",
  ],

  People: [
    "Missing Person",
    "Missing Child",
    "Missing Student",
    "Missing Elderly Person",
    "Missing Adult",
    "Missing Teenager",
    "Missing Family Member",
    "Missing Friend",
    "Missing Relative",
    "Missing Traveller",
    "Missing Tourist",
    "Missing Patient",
    "Missing Senior Citizen",
    "Missing Boy",
    "Missing Girl",
    "Missing Man",
    "Missing Woman",
    "Missing College Student",
    "Missing School Student",
    "Missing Person Report",
  ],

  Documents: [
    "Aadhaar Card",
    "PAN Card",
    "Driving License",
    "Passport",
    "College ID Card",
    "School ID Card",
    "Office ID Card",
    "Voter ID",
    "Bank Card",
    "Credit Card",
    "Debit Card",
    "Train Pass",
    "Metro Card",
    "Birth Certificate",
    "Marksheet",
    "Certificate",
    "Insurance Card",
    "Medical Card",
    "Employee Card",
    "Library Card",
  ],

  Keys: [
    "House Keys",
    "Car Keys",
    "Bike Keys",
    "Office Keys",
    "Room Keys",
    "Locker Keys",
    "Gate Keys",
    "Scooter Keys",
    "Apartment Keys",
    "Keychain",
    "Remote Key",
    "Smart Key",
    "Metal Keys",
    "Brass Keys",
    "Small Key",
    "Large Key",
    "Key Ring",
    "Door Keys",
    "Garage Keys",
    "Duplicate Keys",
  ],

  Toys: [
    "Teddy Bear",
    "Toy Car",
    "Toy Train",
    "Toy Gun",
    "Doll",
    "Robot Toy",
    "Building Blocks",
    "Puzzle",
    "Remote Car",
    "Toy Plane",
    "Toy Truck",
    "Action Figure",
    "Barbie Doll",
    "Soft Toy",
    "Rubik Cube",
    "Board Game",
    "Toy Dinosaur",
    "Toy Animal",
    "Kids Toy",
    "Electronic Toy",
  ],

  Laptop: [
    "MacBook Air",
    "MacBook Pro",
    "Dell Laptop",
    "HP Laptop",
    "Lenovo Laptop",
    "Acer Laptop",
    "Asus Laptop",
    "Microsoft Surface",
    "Gaming Laptop",
    "Office Laptop",
    "Student Laptop",
    "Black Laptop",
    "Silver Laptop",
    "Laptop Charger",
    "Laptop Adapter",
    "Laptop Mouse",
    "Laptop Keyboard",
    "Laptop Stand",
    "Laptop Sleeve",
    "Laptop Bag",
  ],

  "Fashion Accessories": [
    "Black Sunglasses",
    "Brown Sunglasses",
    "Reading Glasses",
    "Cap",
    "Black Cap",
    "Hat",
    "Scarf",
    "Belt",
    "Leather Belt",
    "Wallet",
    "Black Wallet",
    "Brown Wallet",
    "Purse",
    "Handkerchief",
    "Tie",
    "Bow Tie",
    "Hair Band",
    "Hair Clip",
    "Gloves",
    "Fashion Watch",
  ],

  "Clothes & Shoes": [
    "Black T-Shirt",
    "White T-Shirt",
    "Blue Shirt",
    "Black Shirt",
    "Jeans",
    "Blue Jeans",
    "Black Jeans",
    "Jacket",
    "Blue Jacket",
    "Black Jacket",
    "Hoodie",
    "Grey Hoodie",
    "Sweater",
    "Raincoat",
    "Black Shoes",
    "Sports Shoes",
    "Sneakers",
    "Sandals",
    "Slippers",
    "School Shoes",
  ],

  Pets: [
    "Dog",
    "Cat",
    "Puppy",
    "Kitten",
    "Parrot",
    "Rabbit",
    "Hamster",
    "Bird",
    "Pet Dog",
    "Pet Cat",
    "Golden Retriever",
    "German Shepherd",
    "Labrador",
    "Persian Cat",
    "White Dog",
    "Black Dog",
    "Brown Dog",
    "White Cat",
    "Black Cat",
    "Pet Bird",
  ],

  "Sports Equipment": [
    "Football",
    "Cricket Bat",
    "Cricket Ball",
    "Cricket Kit",
    "Tennis Racket",
    "Badminton Racket",
    "Badminton Shuttle",
    "Basketball",
    "Volleyball",
    "Hockey Stick",
    "Football Shoes",
    "Cricket Helmet",
    "Cricket Gloves",
    "Sports Bag",
    "Gym Bag",
    "Yoga Mat",
    "Skipping Rope",
    "Dumbbell",
    "Sports Watch",
    "Cycling Helmet",
  ],

  Other: [
    "Water Bottle",
    "Umbrella",
    "Notebook",
    "Calculator",
    "Power Bank",
    "Bluetooth Speaker",
    "Headphones",
    "Earphones",
    "Camera",
    "Flash Drive",
    "Memory Card",
    "Torch",
    "Lunch Box",
    "Coffee Mug",
    "Pen",
    "Book",
    "Diary",
    "Glasses Case",
    "Medicine Box",
    "Other Item",
  ],

  Automobile: [
    "Car",
    "Bike",
    "Scooter",
    "Motorcycle",
    "Bicycle",
    "Electric Scooter",
    "Electric Bike",
    "Car Number Plate",
    "Bike Number Plate",
    "Car Key",
    "Bike Key",
    "Helmet",
    "Car RC",
    "Bike RC",
    "Vehicle Documents",
    "Car Remote",
    "Bike Lock",
    "Bicycle Lock",
    "Car Accessories",
    "Vehicle Part",
  ],
};

const locations = [
  "Chembur",
  "Kurla",
  "Ghatkopar",
  "Andheri",
  "Bandra",
  "Dadar",
  "Sion",
  "Powai",
  "Vikhroli",
  "Mulund",
  "Thane",
  "BKC",
  "Vile Parle",
  "Mumbai Central",
  "Colaba",
];


// --------------------------------------------------
// Dummy Images for every category
// --------------------------------------------------

const categoryImages = {
  "Phones & Tablets": [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
  ],

  Bags: [
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
  ],

  Jewelry: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  ],

  Watches: [
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
  ],

  People: [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  ],

  Documents: [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
  ],

  Keys: [
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=800&q=80",
  ],

  Toys: [
    "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  ],

  Laptop: [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  ],

  "Fashion Accessories": [
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
  ],

  "Clothes & Shoes": [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  ],

  Pets: [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
  ],

  "Sports Equipment": [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
  ],

  Other: [
    "https://images.unsplash.com/photo-1609592424847-0a6f1b4c0a1b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
  ],

  Automobile: [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=80",
  ],
};


// --------------------------------------------------
// Generate 50 Lost + 50 Found
// for every category
// --------------------------------------------------

const items = [];

let id = 1;

categories.forEach((category) => {
  const names = itemNames[category.name];

  // Get images for this category
  const images = categoryImages[category.name] || [];

  // ------------------------------------------------
  // 50 LOST ITEMS
  // ------------------------------------------------

  for (let i = 0; i < 50; i++) {
    const name = names[i % names.length];

    const location = locations[i % locations.length];

    const image =
      images.length > 0
        ? images[i % images.length]
        : "";

    items.push({
      id: id++,

      name: `${name} ${Math.floor(i / names.length) + 1}`,

      category: category.name,

      status: "Lost",

      location: location,

      date: `2026-08-${String((i % 28) + 1).padStart(2, "0")}`,

      description:
        `${name} was reported lost in ${location}. ` +
        `If found, please contact the owner.`,

      image: image,
    });
  }


  // ------------------------------------------------
  // 50 FOUND ITEMS
  // ------------------------------------------------

  for (let i = 0; i < 50; i++) {
    const name = names[i % names.length];

    const location = locations[(i + 5) % locations.length];

    const image =
      images.length > 0
        ? images[i % images.length]
        : "";

    items.push({
      id: id++,

      name: `${name} ${Math.floor(i / names.length) + 1}`,

      category: category.name,

      status: "Found",

      location: location,

      date: `2026-09-${String((i % 30) + 1).padStart(2, "0")}`,

      description:
        `${name} was found in ${location}. ` +
        `The owner can contact the person who found it.`,

      image: image,
    });
  }
});


// --------------------------------------------------
// Exports
// --------------------------------------------------

export { categories };

export default items;