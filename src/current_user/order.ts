import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface printProperties{
    size:string;
    side:number;
    pagenum:number;
    printnum:number
}
export interface order{
    name: string;
    printdate:string;
    filename:string;
    properties:printProperties;
    printerid:string;
   
}
export interface OrderStore {
    orders: order[]; // List of orders
    addOrder: (order: order) => void; // Add a new order
    getAllOrders: () => order[]; // Get all orders
   
  }
const useOrderStore=create<OrderStore>()(persist(
  (set,get)=>({
   orders:[],
    // Add an order to the first position in the array
  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
    })),

 
   // Return all orders
   getAllOrders: () => get().orders, 

}),
{ name: "order-store" }
));



export default useOrderStore