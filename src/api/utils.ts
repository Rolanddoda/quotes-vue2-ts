import axios, { AxiosInstance } from "axios";
import { Quote } from "@/types/quote";

export const isDevelopment = process.env.NODE_ENV === "development";

export const request: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export { AxiosResponse } from "axios";

export function getQuotesFromLS(): Quote[] {
  const quotesFromLS = localStorage.getItem("quotes");
  return quotesFromLS ? JSON.parse(quotesFromLS) : [];
}
