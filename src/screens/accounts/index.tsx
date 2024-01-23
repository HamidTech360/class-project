import InfoCard from "../../components/infoCard";
import { PiShoppingBagFill } from "react-icons/pi";
import { addDelimiterToNumber } from "../../utils";
import FlatList from "../../components/flatList";
import AppTable from "../../components/appTable";
import styles from '../dashboard/dashboard.module.scss'

const Accounts = () => {

    const tableHeader = [
        {label:'Receipt Id', key:'receiptId'},
        {label:'Issued Date', key:'date'},
        {label:'Amount',  key:'amount'},
        {label:'Payment Method', key:'paymentMethod'},
        
    ]

    return ( 
        <div>
            <div className="font-bold text-2xl mb-5">Accounts</div>
            <div className="flex">
                <div className="w-[30%] mr-5">
                    <div className="mb-5">
                    <InfoCard
                        tagColor="#fef7ed"
                        Icon={PiShoppingBagFill}
                        iconColor="#FFB35B"
                        label="Total Expenses"
                        value={`₦${addDelimiterToNumber(50000)}`}
                        percentageValue={2.5}
                    />
                    </div>

                    <div>
                    <InfoCard
                        tagColor="#e5e5e5"
                        Icon={PiShoppingBagFill}
                        iconColor="#000000"
                        label="Current Profit"
                        value={`₦${addDelimiterToNumber(30000)}`}
                        percentageValue={2.5}
                    />
                    </div>
                </div>
                <div className="bg-white border rounded-lg w-[70%] h-96">

                </div>
            </div>


            <div className="xl:flex">
                <div className="xl:w-[30%] rounded-lg mt-7 xl:mr-5 border">
                    <FlatList
                        listTitle="All Expenses"
                    />
                </div>

                <div className={`h-[500px] border  xl:w-[70%] overflow-x-scroll py-5 px-5 rounded-lg bg-white mt-7 overflow-y-scroll ${styles.tableContainer}`}>  
                    <AppTable
                        tableHeader={tableHeader}
                        tableTitle="All Sales"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Accounts;