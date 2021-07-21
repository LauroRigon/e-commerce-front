import axios from "axios"

const client = axios.create({
  baseURL: "https://viacep.com.br/ws/",
})

export async function getCepInfo(cep) {
  const { data } = await client.get(`${cep}/json`)

  if (data.erro) {
    throw new Error("Erro ao buscar CEP")
  }

  return data
}