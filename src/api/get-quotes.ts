import {
  request,
  AxiosResponse,
  isDevelopment,
  getQuotesFromLS,
} from "@/api/utils";
import { Quote } from "@/types/quote";

/**
 * @description GET /quotes
 * @returns {AxiosResponse} data: Quote[]
 */
const BE_GET_QUOTES = (): Promise<AxiosResponse<Quote[]>> =>
  request.get("/quotes");

/**
 * @description GET /quotes
 * @returns {Promise} data: Quote[]
 */
const LS_GET_QUOTES = (): Promise<{ data: Quote[] }> => {
  const quotes = getQuotesFromLS();

  return new Promise((res) => setTimeout(() => res({ data: quotes }), 1000));
};

export const GET_QUOTES = isDevelopment ? BE_GET_QUOTES : LS_GET_QUOTES;
