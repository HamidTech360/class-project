import { StateCreator } from "zustand";

const createAccountSlice: StateCreator<any>= (set) => ({
    expenses:[],
    income:[],
    updateExpenses: (newExpense:any)=>{
        set((state:any)=>{
            return {expenses:[newExpense, ...state.expenses]}
        })
    }
})

export default createAccountSlice