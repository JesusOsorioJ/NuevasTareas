const API_URL = 'https://fakestoreapi.com/products';

export async function getAllProduct() {
  const payload = {
    method: 'get',
  };
  try {
    const response = await fetch(`${API_URL}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneProduct(id) {
  const payload = {
    method: 'get',
  };
  console.log(`${API_URL}/${id}`);
  try {
    const response = await fetch(`${API_URL}/${id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
