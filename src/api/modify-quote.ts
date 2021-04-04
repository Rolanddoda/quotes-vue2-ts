import {
  request,
  AxiosResponse,
  isDevelopment,
  getQuotesFromLS,
} from "@/api/utils";
import { Quote } from "@/types/quote";

/**
 * @description PATCH /quotes/:id
 * @returns {AxiosResponse} data: "Ok"
 */
const BE_MODIFY_QUOTE = (quote: Quote): Promise<AxiosResponse<string>> =>
  request.patch(`/quotes/${quote.id}`, quote);

/**
 * @description PATCH /quotes/:id
 * @returns {Promise} data: "Ok"
 */
const LS_MODIFY_QUOTE = (quote: Quote): Promise<{ data: string }> => {
  const quotes = getQuotesFromLS();
  const quoteIndex = quotes.findIndex((q) => q.id === quote.id);

  if (~quoteIndex) {
    quotes.splice(quoteIndex, 1, { ...quote });
    localStorage.setItem("quotes", JSON.stringify(quotes));

    return new Promise((res) => setTimeout(() => res({ data: "Ok" }), 1000));
  }

  return Promise.reject({ error: "Couldn't update the quote." });
};

export const MODIFY_QUOTE = isDevelopment ? BE_MODIFY_QUOTE : LS_MODIFY_QUOTE;
