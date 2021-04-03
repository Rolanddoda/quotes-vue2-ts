import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Quote } from "@/types/quote";

const request: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

/**
 * @description GET /quotes
 * @returns {AxiosResponse} data: Quote[]
 */
export const GET_QUOTES = (): Promise<AxiosResponse<Quote[]>> =>
  request.get("/quotes");

/**
 * @description POST /quotes
 * @returns {AxiosResponse} data: { id: string } (id of the created quote)
 */
export const CREATE_QUOTE = (
  quote: Quote
): Promise<AxiosResponse<{ id: string }>> => request.post("/quotes", quote);

/**
 * @description GET /quotes/:id
 * @returns {AxiosResponse} data: Quote
 */
export const GET_QUOTE = (quoteId: string): Promise<AxiosResponse<Quote>> =>
  request.get(`/quotes/${quoteId}`);

/**
 * @description PATCH /quotes/:id
 * @returns {AxiosResponse} data: Quote
 */
export const MODIFY_QUOTE = (
  quoteId: string,
  quote: Quote
): Promise<AxiosResponse<string>> => request.patch(`/quotes/${quoteId}`, quote);

/**
 * @description DELETE /quotes/:id
 * @returns {AxiosResponse} data: string
 */
export const DELETE_QUOTE = (
  quoteId: string
): Promise<AxiosResponse<Quote[]>> => request.delete(`/quotes/${quoteId}`);
