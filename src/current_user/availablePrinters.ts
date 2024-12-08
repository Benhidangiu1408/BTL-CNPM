import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface location {
  floor: number;
  building: string;
}
export interface printer {
  printerid: string;
  brand: string;
  model: string;
  location: location;
  description: string;
}
export interface printerStore {
  printers: printer[];
  addPrinter: (printer: printer) => void;
  getAllPrinters: () => printer[];
}
const usePrinterStore = create<printerStore>()(
  persist(
    (set, get) => ({
      printers: [],

      addPrinter: (printer) =>
        set((state) => ({
          printers: [...state.printers, printer],
        })),

      getAllPrinters: () => get().printers,
    }),
    { name: "printer-store" }
  )
);

export default usePrinterStore;
