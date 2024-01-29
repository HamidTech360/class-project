import { StateCreator } from "zustand";

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
    addExpense: (expense:any)=>{
        
        set((state:any)=>{
            
            const currentMarket = state.markets.find((item:any)=>item.marketId == state.selectedMarket.marketId)
            const index =  state.markets.indexOf(currentMarket)
            console.log(index)
            const markets__c = [...state.markets]
            markets__c[index].expenses = [expense, ...markets__c[index].expenses ]
            return {markets:markets__c}
            
            //{expenses:[{id:newId, ...newExpense}, ...state.expenses]}
        })
    },

    addSale: (sale:any)=>{
        
        set((state:any)=>{
            
            const currentMarket = state.markets.find((item:any)=>item.marketId == state.selectedMarket.marketId)
            const index =  state.markets.indexOf(currentMarket)
            console.log(index)
            const markets__c = [...state.markets]
            markets__c[index].sales = [sale, ...markets__c[index].sales ]
            return {markets:markets__c}
            
            //{expenses:[{id:newId, ...newExpense}, ...state.expenses]}
        })
    }
})

export default marketSlice