import { StateCreator } from "zustand";

const marketSlice: StateCreator<any>= (set) => ({
    markets:[
        {
            marketId:1,
            marketName:'default',
            expenses:[],
            sales:[]
        }
    ],
    updateExpenses: ()=>{
        set((state:any)=>{
            const newId = state.markets.lenght - 1
            console.log(newId);
            
            return null
            //{expenses:[{id:newId, ...newExpense}, ...state.expenses]}
        })
    }
})

export default marketSlice