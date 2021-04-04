import {
  request,
  AxiosResponse,
  isDevelopment,
  getQuotesFromLS,
} from "@/api/utils";
import { Quote } from "@/types/quote";

/**
 * @description POST /quotes
 * @returns {AxiosResponse} data: { id: string } (id of the created quote)
 */
const BE_CREATE_QUOTE = (
  quote: Quote
): Promise<AxiosResponse<{ id: string }>> => request.post("/quotes", quote);

/**
 * @description POST /quotes
 * @returns {Promise} data: { id: string } (id of the created quote)
 */
const LS_CREATE_QUOTE = (quote: Quote): Promise<{ data: { id: string } }> => {
  const quotes = getQuotesFromLS();
  const newId = Date.now().toString();
  quotes.push({ ...quote, id: newId });
  localStorage.setItem("quotes", JSON.stringify(quotes));

  return new Promise((res) =>
    setTimeout(() => res({ data: { id: newId } }), 1000)
  );
};

export const CREATE_QUOTE = isDevelopment ? BE_CREATE_QUOTE : LS_CREATE_QUOTE;
