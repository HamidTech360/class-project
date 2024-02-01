import { useMarketWrapper } from "../../store";
import InfoCard from "../../components/infoCard";
import { PiShoppingBagFill } from "react-icons/pi";
import { addDelimiterToNumber } from "../../utils";
import AppTable from "../../components/appTable";
import FlatList from "../../components/flatList";
import styles from './dashboard.module.scss'


const Dashboard = () => {

    const {
        selectedMarket,
        markets
    } = useMarketWrapper((state)=>({
        // addExpense: state.addExpense,
        // addSale: state.addSale,
        selectedMarket:state.selectedMarket,
        markets:state.markets
    }))
    

    const tableHeader = [
        {label:'Receipt Id', key:'receiptId'},
        {label:'Issued Date', key:'date'},
        {label:'Amount',  key:'amount'},
        {label:'Description', key:'description'},
        
    ]
    
    const storeData = ()=>{
        
        if(!selectedMarket?.marketId) return {}
        else return markets.find((item:any)=>item.marketId==selectedMarket.marketId)
                         
    }

    const recentExpenses = storeData().expenses?.slice(0,4)

    const salesTotal = storeData()?.sales?.reduce((a:any, b:any)=>{
        return a + Number(b.amount)
    }, 0)
    
    const expensesTotal = storeData()?.expenses?.reduce((a:any, b:any)=>{
        return a + Number(b.amount)
    }, 0)
   

    return ( 
        <div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-3">
                <InfoCard
                    tagColor="#edf0fe"
                    Icon={PiShoppingBagFill}
                    iconColor="#3E60FF"
                    label="Total Income"
                    value={`₦${addDelimiterToNumber(salesTotal || 0)}`}
                    // percentageValue={-5.5}
                />
                <InfoCard
                    tagColor="#fef7ed"
                    Icon={PiShoppingBagFill}
                    iconColor="#FFB35B"
                    label="Total Expenses"
                    value={`₦${addDelimiterToNumber(expensesTotal || 0)}`}
                    // percentageValue={2.5}
                />
                <InfoCard
                    tagColor="#e5e5e5"
                    Icon={PiShoppingBagFill}
                    iconColor="#000000"
                    label="Current Profit"
                    value={`₦${addDelimiterToNumber((salesTotal - expensesTotal) || 0 )}`}
                    percentageValue={(salesTotal - expensesTotal)/salesTotal * 100}
                />
                <InfoCard
                    tagColor="#f6eef7"
                    Icon={PiShoppingBagFill}
                    iconColor="#A35FCC"
                    label="Total Stores"
                    value={markets.length}
                    // percentageValue={2.5}
                />
            </div>

            <div className="xl:flex ">
                <div className={`h-[500px] border  xl:mr-5 xl:w-[70%] overflow-x-scroll py-5 px-5 rounded-lg bg-white mt-7 overflow-y-scroll ${styles.tableContainer}`}>  
                    <AppTable
                        tableHeader={tableHeader}
                        tableTitle="Recent"
                        tableData={storeData()?.sales.slice(0, 3)}
                    />
                </div>

                <div className="xl:w-[30%] rounded-lg border mt-7">
                    <FlatList
                        listTitle="Recent Expenses"
                        data={recentExpenses}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;
