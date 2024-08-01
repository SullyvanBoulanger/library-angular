import { BookStatus } from "./book-status";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  status: BookStatus;
}
