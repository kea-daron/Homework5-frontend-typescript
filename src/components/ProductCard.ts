// components/ProductCard.ts

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export function ProductCard(product: Product): string {
  console.log(product);

  // Clean up the title (remove extra text like "bangggsssss")
  const cleanTitle = product.title
    .replace(/\s+(bangggsssss|banggg|bang)+/gi, "")
    .trim();

  // Truncate description to fit the card better
  const truncatedDescription =
    product.description.length > 120
      ? product.description.substring(0, 120) + "..."
      : product.description;

  // Use the first image from the images array
  const primaryImage =
    product.images[0] || "https://via.placeholder.com/400x300?text=No+Image";

  // Generate a random rating (since it's not in the API)
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const fullStars = Math.floor(parseFloat(rating));
  const hasHalfStar = parseFloat(rating) % 1 >= 0.5;

  // Check if product is new (created within last 7 days)
  const isNew =
    new Date(product.creationAt) >
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  return `
   <body class="flex items-center justify-center min-h-screen p-4">
  <div class="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border dark:border-gray-700 transition-colors">
    <img src="${primaryImage}" alt=""
      class="w-full h-64 object-cover" />
    
    <div class="p-4 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-sm font-semibold text-pink-600 dark:text-pink-400">Essence</span>
        <span class="text-xs bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 px-2 py-0.5 rounded">
          In Stock (99)
        </span>
      </div>

      <h2 class="text-lg font-bold">${cleanTitle}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-300">
        The Essence Mascara is known for volumizing and lengthening. Cruelty-free, dramatic lashes.
      </p>

      <div class="flex items-center gap-2 text-yellow-500">
        <span class="text-sm">Rating:</span>
        <div class="flex">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span class="text-gray-300 dark:text-gray-600">⭐</span>
          <span class="text-gray-300 dark:text-gray-600">⭐</span>
        </div>
        <span class="text-sm text-gray-500 dark:text-gray-400">(2.56)</span>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <span class="text-lg font-bold text-gray-900 dark:text-white">$9.99</span>
          <span class="text-sm line-through text-gray-500 ml-2">$11.16</span>
        </div>
        <span class="text-xs bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 px-2 py-0.5 rounded">
          -10.48%
        </span>
      </div>

      <div class="text-xs mt-2 text-gray-500 dark:text-gray-400">
        Ships in 3-5 business days | 1-week warranty
      </div>

      <button class="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-all dark:bg-pink-500 dark:hover:bg-pink-600">
        Add to Cart
      </button>
    </div>
  </div>

  <!-- Dark mode toggle -->
  
</body>
  `;
}

// Optional: Helper functions for button interactions
export function addToCart(productId: number): void {
  console.log(`Adding product ${productId} to cart`);
  // Add your cart logic here
}

export function toggleWishlist(productId: number): void {
  console.log(`Toggling wishlist for product ${productId}`);
  // Add your wishlist logic here
}