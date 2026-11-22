// =========================================================================
// SLAO STORE SETTINGS, COLOR PICTURES & SIZE PRICES (v7)
// =========================================================================

const SLAO_DELIVERY_FEE = 0;          // Standard Delivery Charges (3 to 6 Days) - PKR
const SLAO_URGENT_FEE = 0;            // Urgent / Express Delivery Charges (1 to 3 Days) - PKR
const SLAO_FREE_SHIPPING_MIN = 3500;  // Standard Delivery FREE above Rs. 3,500
const SLAO_COD_FEE = 80;                // Additional Cash on Delivery Fee - PKR

// Price difference by size:
const SLAO_SIZE_PRICE_DIFF = {
    "S": -200,
    "M": 0,
    "L": 300,
    "XL": 600
};

const SLAO_PRODUCTS = [
    {
        id: 1,
        name: "Noir Embroidered Lawn 3-Piece",
        category: "unstitched",
        price: 6490,
        originalPrice: 7990,
        isSale: true,
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Black": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
            "Maroon": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
            "Emerald": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Black", "Maroon", "Emerald"],
        tag: "Bestseller",
        description: "Exquisite embroidered lawn shirt accompanied by organza bordered trousers and printed chiffon dupatta."
    },
    {
        id: 2,
        name: "Dusty Rose Printed Pret Kurti",
        category: "ready",
        price: 3850,
        originalPrice: 3850,
        isSale: false,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Dusty Rose": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
            "White": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop",
            "Peach": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Dusty Rose", "White", "Peach"],
        tag: "New",
        description: "Soft cotton pret kurti with delicate neck embroidery and straight cut silhouette."
    },
    {
        id: 3,
        name: "Lilac Chiffon Festive Edition",
        category: "unstitched",
        price: 8990,
        originalPrice: 10990,
        isSale: true,
        image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Lilac": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=800&auto=format&fit=crop",
            "Gold": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
            "Lavender": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Lilac", "Gold", "Lavender"],
        tag: "Luxury",
        description: "Graceful unstitched 3-piece suit featuring zari thread work."
    },
    {
        id: 4,
        name: "Maroon Embroidered Kurti Suit",
        category: "ready",
        price: 7450,
        originalPrice: 7450,
        isSale: false,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Maroon": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
            "Black": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
            "Gold": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Maroon", "Black", "Gold"],
        tag: "Trending",
        description: "Deep stitched ensemble tailored to perfection for formal evening wear."
    },
    {
        id: 5,
        name: "Olive Floral Daily Pret",
        category: "ready",
        price: 2950,
        originalPrice: 3500,
        isSale: true,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Olive": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
            "Sage": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop",
            "Cream": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Olive", "Sage", "Cream"],
        tag: "Sale",
        description: "Vibrant printed kurti set crafted in lightweight breathable cotton."
    },
    {
        id: 6,
        name: "Beige Minimal Silk Tunic",
        category: "western",
        price: 5290,
        originalPrice: 5290,
        isSale: false,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Beige": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
            "Ivory": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop",
            "Brown": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Beige", "Ivory", "Brown"],
        tag: "Modern",
        description: "Elegant tunic crafted from premium silk blend fabric."
    },
    {
        id: 7,
        name: "Royal Crimson Jacquard 2-Piece",
        category: "unstitched",
        price: 5490,
        originalPrice: 6500,
        isSale: true,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Crimson": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
            "Maroon": "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
            "Black": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Crimson", "Maroon", "Black"],
        tag: "Limited",
        description: "Rich jacquard weave fabric with detailed neck motif."
    },
    {
        id: 8,
        name: "Classic Ivory Linen Co-Ord Set",
        category: "western",
        price: 3200,
        originalPrice: 3200,
        isSale: false,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop",
        colorImages: {
            "Ivory": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=800&auto=format&fit=crop",
            "Sand": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
            "Black": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
        },
        colors: ["Ivory", "Sand", "Black"],
        tag: "Casual",
        description: "Minimalist matching co-ord set ideal for summer daytime outings."
    }
];

function getPriceForSize(product, size = "M") {
    if (product.sizePrices && typeof product.sizePrices[size] === "number") {
        return Math.max(0, product.sizePrices[size]);
    }
    const diff = SLAO_SIZE_PRICE_DIFF[size] || 0;
    return Math.max(0, product.price + diff);
}

function getImageForColor(product, color) {
    if (product.colorImages && color && product.colorImages[color]) {
        return product.colorImages[color];
    }
    return product.image;
}

function resolveProductImage(imgPath, prefix = "") {
    if (!imgPath) return "";
    if (imgPath.startsWith("http://") || imgPath.startsWith("https://") || imgPath.startsWith("data:")) {
        return imgPath;
    }
    return prefix + imgPath;
}

function getCart() {
    return JSON.parse(localStorage.getItem('slao_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('slao_cart', JSON.stringify(cart));
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function calculateDeliveryCharges(subtotal, deliveryType = "STANDARD") {
    return 0;
}

function calculateCodCharges(subtotal, payType = "COD") {
    if (subtotal <= 0) return 0;
    return payType === "COD" ? SLAO_COD_FEE : 0;
}
