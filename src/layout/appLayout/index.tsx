import { useLocation, Link, Outlet } from 'react-router-dom';
import styles from './applayout.module.scss'
import { useState } from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../components/modal';
import { IoMdClose } from "react-icons/io";
import { useMarketWrapper } from '../../store';

const AppLayout = () => {
    const location = useLocation()
    const [openModal, setOpenModal] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [dateOfEstablishment, setDateOfEstablishment] = useState('')
    
    const {addStore, markets, selectedMarket, setSelectedMarket} = useMarketWrapper((state)=>({
        addStore: state.addStore,
        markets: state.markets,
        selectedMarket:state.selectedMarket,
        setSelectedMarket: state.setSelectedMarket
    }))
    
    const currentPath = location.pathname
    const navOptions = [
        {
          label: 'Dashboard',
          paths: ['/'],
          link: '/',
          icon: AiOutlineAppstore,
        },
        {
          label: 'Accounts',
          paths: ['/accounts'],
          link: '/accounts',
          icon: MdOutlineAccountBalance,
        },
        {
          label: 'Settings',
          paths: ['/settings'],
          link: '/settings',
          icon: IoSettingsOutline,
        },
      ]

    const handleSwitchStore = (storeId:any)=>{
        console.log(storeId);
        const currentStore = markets.find((item:any)=>item.marketId==storeId)
        console.log(currentStore)
        setSelectedMarket(currentStore)
    }

    const handleCreateStore = ()=>{
        setIsAdding(true)
        const newStore = {
            name,
            description,
            dateOfEstablishment
        }
        setTimeout(() => {
            addStore(newStore)
            setIsAdding(false)
            setOpenModal(false)
        }, 1500);
        
    }


    return ( 
        <div className='flex' style={{ height: '100vh' }}>
            <div className={`${styles.sideBar} hidden py-7 px-10 flex-col  md:flex`}>
                <div className='text-[#001889] font-bold text-2xl'>TradeTally</div>
                <div className="mt-10">
                    {
                        navOptions.map((item, i)=>
                            <Link to={item.link} key={i}>
                                <div 
                                style={{backgroundColor:item.paths.includes(currentPath)? '#3E60FF':''}}
                                className={`mb-3 flex px-3 rounded-md py-3 font-semibold ${item.paths.includes(currentPath) ? 'text-white':'text-[#53545C]'}`}
                                >
                                    <item.icon size={23} />
                                    <span className='ml-3'>{item.label}</span>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className='bg-[#f7f8fd] flex-1' style={{overflowY:'scroll'}}>
                <div className="bg-white  py-5 px-7 flex ">
                    <div className="border hidden  md:flex items-center px-3 border-[#DADADA] rounded-md w-72 h-8 flex">
                        <CiSearch size={24} color='gray' />
                        <input 
                            type="text" 
                            placeholder='Search'
                            className="w-full ml-3 border-none appearance-none focus:outline-none rounded-md outline-none" 
                        />
                    </div>
                    <div className="flex flex-1 items-center md:justify-end" >
                        <FaPlus 
                            size={20} 
                            color='#3E60FF' 
                            className='cursor-pointer' 
                            onClick={()=>setOpenModal(true)}
                        />
                        <select 
                            className='bg-[#FEF5EA] ml-2 rounded-md mr-3 h-10 px-3 font-semibold w-44' 
                            onChange={(e)=>handleSwitchStore(e.target.value)}
                            value={selectedMarket? selectedMarket.marketId:''}
                        >
                            <option value="">Select Store</option>
                            {markets?.map((item:any)=>
                                <option  value={item.marketId}>{item.marketName}</option>
                            )}
                        </select>
                        <div className=' flex flex-1 md:flex-none justify-end md:inline'><FaBell  size={25} color='#3E60FF' /></div>
                        
                    </div>
                </div>
                <div className='py-7 md:px-5 px-3'>
                    <Outlet/>
                </div>
                

            </div>

            <Modal open={openModal}>
                    <div className="min-h-72 bg-white rounded-lg w-[40vw] py-10 px-10">
                        <IoMdClose 
                            size={23} 
                            className='cursor-pointer'
                            onClick={()=>setOpenModal(false)}  
                        />
                        <div className="text-2xl text-center font-bold mb-7">Add New Store</div>
                        <div>
                            <div className='mb-3'>
                                <div className="font-semibold mb-1">Store Name</div>
                                <input 
                                    type="text" 
                                    className="w-full focus:outline-none px-5 appearance-none h-12 border rounded-md border border-[#DADADA]"
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <div className="font-semibold mb-1">Service Offering</div>
                                <input 
                                    type="text" 
                                    className="w-full focus:outline-none px-5 appearance-none h-12 border rounded-md border border-[#DADADA]"
                                    onChange={(e)=>setDescription(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <div className="font-semibold mb-1">Date of establishment</div>
                                <input 
                                    type="date" 
                                    className="w-full focus:outline-none px-5 appearance-none h-12 border rounded-md border border-[#DADADA]"
                                    onChange={(e)=>setDateOfEstablishment(e.target.value)}
                                />
                            </div>

                            <button
                                 onClick={handleCreateStore}
                                 style={{opacity: isAdding?'0.5':''}}
                                 className="w-full py-3 bg-[#3E60FF] mt-5 rounded-md text-white"
                            >
                                {isAdding? 'Creating store...':'Add Store'}
                            </button>
                        </div>
                    </div>
            </Modal>
        </div>
     );
}
 
export default AppLayout;