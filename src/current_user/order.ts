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
    orderLogout:()=>void
    deleteOrderByName: (name:string) =>void
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

   orderLogout: () =>
    set(() => ({
      orders:[]
    })),
    deleteOrderByName: (name:string) =>
      set((state) => ({
        orders: state.orders.filter((order) => order.name !== name),
      })),

}),
{ name: "order-store" }
));



export default useOrderStore