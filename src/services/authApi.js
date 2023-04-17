import api from "./api"

export async function signIn({ email, password }){
    const response = await api.post("user/signin", {email, password});
    return response.data;
}


export async function signUp( { completeName, cpf, phone, email, password } ) {
  const response = await api.post("user/signup", { completeName, cpf, phone, email, password });
  return response.data;
}