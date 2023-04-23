import axios from "axios";
import { Seller, Transaction } from "./types";

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

    setResponse(response.data.result);
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
