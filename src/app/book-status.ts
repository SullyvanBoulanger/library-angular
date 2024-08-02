export enum BookStatus {
  AVAILABLE = 'available',
  BORROWED = 'borrowed',
}
export const BookStatusLabelMapping: Record<BookStatus, string> = {
  [BookStatus.AVAILABLE]: 'Available',
  [BookStatus.BORROWED]: 'Borrowed',
};
