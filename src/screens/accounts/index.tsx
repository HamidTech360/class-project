import InfoCard from "../../components/infoCard";
import { useMarketWrapper } from "../../store";
import { useState } from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import { addDelimiterToNumber } from "../../utils";
import FlatList from "../../components/flatList";
import AppTable from "../../components/appTable";
// import { formatID , trimString} from "../../utils";
import styles from '../dashboard/dashboard.module.scss'

const Accounts = () => {

    const [isSaving, setIsSaving] = useState(false)
    const tableHeader = [
        {label:'Receipt Id', key:'receiptId'},
        {label:'Issued Date', key:'date'},
        {label:'Amount',  key:'amount'},
        {label:'Description', key:'description'},  
    ]

    const {
        addExpense,
        addSale,
        selectedMarket,
        markets
    } = useMarketWrapper((state)=>({
        addExpense: state.addExpense,
        addSale: state.addSale,
        selectedMarket:state.selectedMarket,
        markets:state.markets
    }))

    const storeData = ()=>{
        
        if(!selectedMarket?.marketId) return {}
        else return markets.find((item:any)=>item.marketId==selectedMarket.marketId) 
    }


    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const handleLogItem = ()=>{
        
        if(!category) return alert('Please Select a category')
        if(!amount || !date || !description) return alert('No field should be left empty')
        setIsSaving(true)
        const newEntry = {
            amount, 
            date,
            description,
        }
       setTimeout(() => {
            category == "Income"? addSale(newEntry):addExpense(newEntry)
        
            setAmount('')
            setDate('')
            setDescription('')
            setCategory('')
            setIsSaving(false)
            alert('Record saved succesfully')
       }, 1500);
        
    }

    const salesTotal = storeData()?.sales?.reduce((a:any, b:any)=>{
        return a + Number(b.amount)
    }, 0)
    
    const expensesTotal = storeData()?.expenses?.reduce((a:any, b:any)=>{
        return a + Number(b.amount)
    }, 0)

    


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
                        value={`₦${addDelimiterToNumber(expensesTotal || 0.00)}`}
                        // percentageValue={2.5}
                    />
                    </div>

                    <div className="mb-5">
                    <InfoCard
                        tagColor="#e5e5e5"
                        Icon={PiShoppingBagFill}
                        iconColor="#000000"
                        label="Total Sales"
                        value={`₦${addDelimiterToNumber(salesTotal || 0)}`}
                        // percentageValue={2.5}
                    />
                    </div>
                </div>

                <div className="bg-white flex flex-col border rounded-lg lg:w-[70%] lg:h-96 py-7 px-9">
                {!selectedMarket &&
                    <div className="text-red-400 font-bold text-xl flex-1 flex-col flex items-center justify-center">
                        NO STORE SELECTED
                        <div className="text-sm font-medium">Please select a store using the toggle</div>
                    </div>
                }
                {
                     selectedMarket && 
                    <>
                    <div className="text-lg font-semibold mb-5">Add New Entry</div>

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
                                type="datetime-local"
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
                    <button 
                        style={{opacity: isSaving?'0.5':''}} 
                        onClick={()=>handleLogItem()} 
                        className="py-3 px-5 bg-[#3E60FF] text-white rounded-md mt-5 text-sm"
                    >
                        {isSaving? 'Saving...':'Add Item'}
                    </button>
                    </div>
                    </>
                }
                </div>
                
            </div>


            <div className="xl:flex">
                <div className="xl:w-[30%] flex flex-col rounded-lg mt-7 xl:mr-5 border">
                   { (storeData()?.expenses )  &&
                   <FlatList
                        listTitle="All Expenses"
                        data = {storeData()?.expenses || []}
                    />
                 }

                    
                     {
                        (!storeData()?.expenses || storeData()?.expenses.length < 1)  &&
                        <div className="flex-1 bg-white  flex text-center justify-center items-center text-gray-300 text-xl font-semibold">
                            No Expense Record
                        </div>
                    }
                </div>

                <div className={`h-[500px] flex flex-col border  xl:w-[70%] overflow-x-scroll py-5 px-5 rounded-lg bg-white mt-7 overflow-y-scroll ${styles.tableContainer}`}>  
                    <AppTable
                        tableHeader={tableHeader}
                        tableTitle="All Sales"
                        tableData = {storeData()?.sales || []}
                    />
                    {
                        (!storeData()?.sales || storeData()?.sales.length < 1)  &&
                        <div className="flex-1  flex text-center justify-center items-center text-gray-300 text-xl font-semibold">
                            No Sales Record 
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Accounts;