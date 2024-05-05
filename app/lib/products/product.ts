export async function fetchProducts() {
  try {
      const url = process.env.BACKEND_URL;
      const response = await fetch(`${url}/products`, {
          headers: {
              'Content-Type': 'application/json',
          },
          cache: 'no-cache',
      });

      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }

      const products = await response.json();
      return products;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
  }
}
