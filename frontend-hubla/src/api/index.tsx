import axios from "axios";
import { Seller, TLoginForm, Transaction } from "./types";

const baseURL: string = "http://localhost:3003";

export const sendFile = async (
  file: FormData,
  setResponse: React.Dispatch<
    React.SetStateAction<string | Transaction[] | undefined>
  >
): Promise<void> => {
  try {
    const response = await axios.post(`${baseURL}/transactions`, file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setResponse(response.data.message);

  } catch (error:any) {
    setResponse(error.message);
  }
};

export const findSellers = async (
  setResponse: React.Dispatch<React.SetStateAction<Seller[] >>
): Promise<void> => {
  try {
    const response = await axios.get(`${baseURL}/sellers`)
    setResponse(response.data.result);
  } catch (error:any) {
    alert(error.message)
  }
};

export const findSellerById = async (
  id: string,
  setResponse: React.Dispatch<React.SetStateAction<Seller | undefined>>
): Promise<void> => {
  try {
    const response = await axios.get(`${baseURL}/sellers/${id}`)

    setResponse(response.data.result);
  } catch (error:any) {
    alert(error.message)
  }
};

export const findTransactions = async (
  setResponse: React.Dispatch<React.SetStateAction<Transaction[] >>
): Promise<void> => {
  try {
    const response = await axios.get(`${baseURL}/transactions`)

    setResponse(response.data.result);
  } catch (error:any) {
    alert(error.message)
  }
};

export const login = async (form: TLoginForm): Promise<void> => {
  try {
    const res =  await axios.post(`${baseURL}/login`, form)
    localStorage.setItem("token", res.data.token)
  } catch (error:any) {
    alert(error.message)
  }
};