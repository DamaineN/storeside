export const getCollections = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections?_=${timestamp}`
  );
  const collections = await response.json();
  return collections;
};

export const getProducts = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?_=${timestamp}`
  );
  const products = await response.json();
  return products;
};

export const getProductDetails = async (productId: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}?_=${timestamp}`
  );
  const product = await response.json();
  return product;
};

export const getCollectionDetails = async (collectionId: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}?_=${timestamp}`
  );
  const collection = await response.json();
  return collection;
};

export const getSearchedProducts = async (query: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${query}?_=${timestamp}`
  );
  const searchedProducts = await response.json();
  return searchedProducts;
};

export const getOrders = async (customerId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    if (!response.ok) {
      if (response.status === 404) {
        return { message: 'No orders made' }; // return a specific response for no orders found
      }
      throw new Error(`API request failed with status ${response.status}`);
    }
    const orders = await response.json();
    return orders;
  } catch (error) {
    console.error(error);
    return { error: 'Failed to retrieve orders' }; // return an error object
  }
};

export const getRelatedProducts = async (productId: string) => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related?_=${timestamp}`
  );
  const relatedProducts = await response.json();
  return relatedProducts;
};
