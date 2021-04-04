import {
  request,
  AxiosResponse,
  isDevelopment,
  getQuotesFromLS,
} from "@/api/utils";
import { Quote } from "@/types/quote";

/**
 * @description DELETE /quotes/:id
 * @returns {AxiosResponse} data: string
 */
const BE_DELETE_QUOTE = (quoteId: string): Promise<AxiosResponse<Quote[]>> =>
  request.delete(`/quotes/${quoteId}`);

/**
 * @description DELETE /quotes/:id
 * @returns {Promise} data: string
 */
const LS_DELETE_QUOTE = (quoteId: string): Promise<{ data: string }> => {
  const quotes = getQuotesFromLS();
  const quoteIndex = quotes.findIndex((q) => q.id === quoteId);

  if (~quoteIndex) {
    quotes.splice(quoteIndex, 1);
    localStorage.setItem("quotes", JSON.stringify(quotes));

    return new Promise((res) =>
      setTimeout(() => res({ data: "Successfully deleted quote" }), 1000)
    );
  }

  return Promise.reject({ error: "Couldn't delete the quote." });
};

export const DELETE_QUOTE = isDevelopment ? BE_DELETE_QUOTE : LS_DELETE_QUOTE;
