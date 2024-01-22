import { useLocation, Link, Outlet } from 'react-router-dom';
import styles from './applayout.module.scss'
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

const AppLayout = () => {

    const location = useLocation()
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
                <div className="bg-white h-[9vh] py-5 px-7 flex ">
                    <div className="border hidden  md:flex items-center px-3 border-[#DADADA] rounded-md w-72 h-8 flex">
                        <CiSearch size={24} color='gray' />
                        <input 
                            type="text" 
                            placeholder='Search'
                            className="w-full ml-3 border-none appearance-none focus:outline-none rounded-md outline-none" 
                        />
                    </div>
                    <div className="flex flex-1 md:justify-end" >
                        <select className='bg-[#FEF5EA] rounded-md mr-3 h-10 px-3 font-semibold w-44' name="" id="">
                            <option value="">Ojaja Mall</option>
                        </select>
                        <div className=' flex flex-1 md:flex-none justify-end md:inline'><FaBell  size={25} color='#3E60FF' /></div>
                        
                    </div>
                </div>
                <div className='py-7 md:px-5 px-3'>
                    <Outlet/>
                </div>
                
            </div>
        </div>
     );
}
 
export default AppLayout;