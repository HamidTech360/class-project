import { StateCreator } from "zustand";
import { formatID } from "../../utils";

const marketSlice: StateCreator<any>= (set) => ({
    selectedMarket:null,
    markets:[
        // {
        //     marketId:1,
        //     marketName:'default',
        //     expenses:[],
        //     sales:[]
        // }
    ],
    setSelectedMarket:(market:any)=>{
        set(()=>{
            return {selectedMarket:market}
        })
    },
    addStore :(newStore:any)=>{
        set((state:any)=>{
            return {markets:[
                {
                    marketId: state.markets.length + 1,
                    marketName: newStore.name,
                    expenses:[],
                    sales:[],
                    description:newStore.description,
                    dateOfEstablishment: newStore.dateOfEstablishment
                },
                ...state.markets
            ]}
        })
    },
    deleteStore: ()=>{
        set((state:any)=>{
            

            const filtered = state.markets.filter((item:any)=>item.marketId !== state.selectedMarket.marketId )
            console.log(filtered)
            return {markets: filtered}
        })
    },
    addExpense: (expense:any)=>{
        
        set((state:any)=>{
            
            const currentMarket = state.markets.find((item:any)=>item.marketId == state.selectedMarket.marketId)
            const index =  state.markets.indexOf(currentMarket)
            const markets__c = [...state.markets]
            const newExpense = {
                receiptId: formatID(markets__c[index].expenses.length + 1),
                ...expense
            }
            console.log(newExpense)
            markets__c[index].expenses = [newExpense, ...markets__c[index].expenses ]
            return {markets:markets__c}
            
            //{expenses:[{id:newId, ...newExpense}, ...state.expenses]}
        })
    },

    addSale: (sale:any)=>{
        
        set((state:any)=>{
            
            const currentMarket = state.markets.find((item:any)=>item.marketId == state.selectedMarket.marketId)
            const index =  state.markets.indexOf(currentMarket)
            const markets__c = [...state.markets]
            const newSale= {
                receiptId: formatID(markets__c[index].sales.length + 1),
                ...sale
            }
            console.log(newSale)
            markets__c[index].sales = [newSale, ...markets__c[index].sales ]
            return {markets:markets__c}
            
            //{expenses:[{id:newId, ...newExpense}, ...state.expenses]}
        })
    }

})

export default marketSlice