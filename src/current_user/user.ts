import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface student{
    name: string;
    studentid:number;
    mail:string;
    pagebalance:number;
    
}
export interface studentStore{
    info:student;
    login:(student:student)=> void
    logout:()=> void
    getInfo:()=>student
    setPageBalance:(newBalance: number)=>void
}

const useStudentStore = create<studentStore>()(persist(
  (set, get) => ({
    // Initial state
    info: {
        name: "",
        studentid: 0,
        mail: "",
        pagebalance: 300
    },
  
    // Login: Set the student info
    login: (student) =>
      set(() => ({
        info: student,
      })),
  
    // Logout: Clear the student info
    logout: () =>
      set(() => ({
        info: {
            name: "",
            studentid: 0,
            mail: "",
            pagebalance: 300
        }
      })),
    // GetInfo: Return the current student info
    getInfo: () => get().info,

    setPageBalance: (newBalance: number) =>
      set((state) => ({
        info: {
          ...state.info, // Keep other info properties unchanged
          pagebalance: newBalance,
        },
      })),

  }),
  { name: "user-store"  }

));

export default useStudentStore