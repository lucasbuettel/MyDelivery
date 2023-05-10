import api from "./api"

export async function postCart(productId, userId, amountProduct, totalPrice, token){
    const response = await api.post("/cart", {productId, userId, amountProduct, totalPrice},
    {
        headers: {
            Authorization: `Bearer ${token}`,
        } 
    });
    return response.data; 
}

export async function findProductByUserId(token, userId) {
    const response = await api.get(`/cart/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  export async function deleteProductInCart(productInCartId, token){
    console.log(productInCartId);
    const response = await api.delete("/cart", {
      data: {productInCartId}, 
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  console.log(response.data)
  return response.data;
  };