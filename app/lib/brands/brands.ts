export async function fetchBrands() {
    try {
        const url = process.env.BACKEND_URL;
        const response = await fetch(`${url}/brands`, {
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache',
        });
  
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
  
        const brands = await response.json();
        return brands;
    } catch (error) {
        throw error;
    }
  }
  