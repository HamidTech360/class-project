import InfoCard from "../../components/infoCard";
import { useMarketWrapper } from "../../store";
import { useState } from "react";
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
        {label:'Description', key:'description'},
        
    ]

    const {
        addExpense,
        addSale
    } = useMarketWrapper((state)=>({
        addExpense: state.addExpense,
        addSale: state.addSale
    }))

    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const handleLogItem = ()=>{

        
        const newExpense = {
            amount, 
            date,
            description
        }
        // addExpense()
    }


    return ( 
        <div>
            <div className="font-bold text-2xl mb-5">Accounts</div>
            <div className="lg:flex">
                <div className="lg:w-[30%] lg:mr-5">
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

                    <div className="mb-5">
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

                <div className="bg-white border rounded-lg lg:w-[70%] lg:h-96 py-5 px-7">
                    <div className="text-lg font-semibold mb-5">Add New Expenses</div>

                    <div className="grid lg:grid-cols-2 gap-y-5 gap-x-5">
                       <div>
                            <div className="mb-1 font-medium">Entry Category</div>
                            <select 
                                className="w-full text-[gray] h-10 outline-none focus:outline-none border border-[#DADADA] rounded-md"
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}
                            >
                                <option value="">Select category</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </select>
                       </div>

                       <div>
                            <div className="mb-1 font-medium">Amount</div>
                            <input 
                                type="number"
                                value={amount}
                                onChange={(e)=>setAmount(e.target.value)}
                                className="h-10 outline-none focus:outline-none border border-[#DADADA] rounded-md w-full"
                            />
                       </div>

                       <div>
                            <div className="mb-1 font-medium">Date</div>
                            <input 
                                type="Date"
                                value={date}
                                onChange={(e)=>setDate(e.target.value)}
                                className="h-10 outline-none focus:outline-none border border-[#DADADA] rounded-md w-full"
                            />
                       </div>

                       <div>
                            <div className="mb-1 font-medium">Entry Description</div>
                            <input 
                                type="text"
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                className="h-10 outline-none focus:outline-none border border-[#DADADA] rounded-md w-full"
                            />
                       </div>

                    </div>

                    <div className="flex justify-end">
                    <button
                        
                        className="py-3 px-7 bg-[#BEC0CA] text-white rounded-md mt-5 mr-3 text-sm"
                    >
                        Cancel
                    </button>
                    <button onClick={()=>handleLogItem()} className="py-3 px-5 bg-[#3E60FF] text-white rounded-md mt-5 text-sm">Add Item</button>
                    </div>
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