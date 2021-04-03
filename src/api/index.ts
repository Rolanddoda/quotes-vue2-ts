import axios, { AxiosInstance, AxiosPromise } from "axios";
import { Quote } from "@/types/quote";

const request: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

/**
 * @description GET /quotes
 * @returns {AxiosPromise<any>}
 */
export const GET_QUOTES = (): AxiosPromise => request.get("/quotes");

/**
 * @description POST /quotes
 * @returns {AxiosPromise<any>}
 */
export const CREATE_QUOTE = (quote: Quote): AxiosPromise =>
  request.post("/quotes", quote);

/**
 * @description GET /quotes/:id
 * @returns {AxiosPromise<any>}
 */
export const GET_QUOTE = (quoteId: string): AxiosPromise =>
  request.get(`/quotes/${quoteId}`);

/**
 * @description PATCH /quotes/:id
 * @returns {AxiosPromise<any>}
 */
export const MODIFY_QUOTE = (quoteId: string, quote: Quote): AxiosPromise =>
  request.patch(`/quotes/${quoteId}`, quote);

/**
 * @description DELETE /quotes/:id
 * @returns {AxiosPromise<any>}
 */
export const DELETE_QUOTE = (quoteId: string): AxiosPromise =>
  request.delete(`/quotes/${quoteId}`);
