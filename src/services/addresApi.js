import api from "./api"

export async function postAddress(street, neighborhood, city, state, number, token){
    const response = await api.post("address", {street, neighborhood, city, state, number},
    {
        headers: {
            Authorization: `Bearer ${token}`,
        } 
    });
    return response.data; 
}

export async function findByAddressId(token, userId) {
    const response = await api.get(`/address/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };