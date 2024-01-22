// import { useMarketWrapper } from "../../store";
import InfoCard from "../../components/infoCard";
import { PiShoppingBagFill } from "react-icons/pi";
import { addDelimiterToNumber } from "../../utils";
import AppTable from "../../components/appTable";
import styles from './dashboard.module.scss'
import { CiFilter } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

const Dashboard = () => {

    // const {updateExpenses, markets} = useMarketWrapper((state)=>({
    //     updateExpenses: state.updateExpenses,
    //     markets: state.markets
    // }))
    

    const tableHeader = [
        {label:'Receipt Id', key:'receiptId'},
        {label:'Issued Date', key:'date'},
        {label:'Amount',  key:'amount'},
        {label:'Payment Method', key:'paymentMethod'},
        
    ]
    
   

    return ( 
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-3">
                <InfoCard
                    tagColor="#edf0fe"
                    Icon={PiShoppingBagFill}
                    iconColor="#3E60FF"
                    label="Total Income"
                    value={`₦${addDelimiterToNumber(400000)}`}
                    percentageValue={2.5}
                />
                <InfoCard
                    tagColor="#fef7ed"
                    Icon={PiShoppingBagFill}
                    iconColor="#FFB35B"
                    label="Total Expenses"
                    value={`₦${addDelimiterToNumber(50000)}`}
                    percentageValue={2.5}
                />
                <InfoCard
                    tagColor="#e5e5e5"
                    Icon={PiShoppingBagFill}
                    iconColor="#000000"
                    label="Current Profit"
                    value={`₦${addDelimiterToNumber(30000)}`}
                    percentageValue={2.5}
                />
                <InfoCard
                    tagColor="#f6eef7"
                    Icon={PiShoppingBagFill}
                    iconColor="#A35FCC"
                    label="Total Customers"
                    value={300}
                    percentageValue={2.5}
                />
            </div>

            <div className={`h-[500px] overflow-x-scroll py-5 px-5 rounded-md bg-white mt-7 overflow-y-scroll ${styles.tableContainer}`}>
                <div className="flex py-5 mb-4 border-b">
                    <div className="text-2xl font-semibold">Recent</div>
                    <div className="flex-1 flex justify-end">
                        <div className="w-14 h-7 mr-3 text-sm rounded-md justify-center flex items-center bg-[#F3F3F3]">
                            <CiFilter className="mr-1" />
                            Filter
                        </div>
                        <div className="w-14 h-7 flex items-center bg-[#F3F3F3] text-sm rounded-md justify-center">
                            <MdDateRange className="mr-1" />
                            Date
                        </div>
                    </div>
                </div>
                <AppTable
                    tableHeader={tableHeader}

                />
            </div>
        </div>
     );
}
 
export default Dashboard;
