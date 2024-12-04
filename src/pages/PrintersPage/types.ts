export interface Location {
  floor: number;
  building: string;
}

export interface PrinterData {
  printerid: string;
  brand: string;
  model: string;
  location: Location;
  description: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
