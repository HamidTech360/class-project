import styles from '../../screens/dashboard/dashboard.module.scss'

const FlatList = ({listTitle, data=[]}:any) => {
    return ( 
        <div className={`bg-white h-full  py-10 px-5 xl:px-3  rounded-lg overflow-y-scroll ${styles.tableContainer}`}>
             
            <div className="text-lg font-semibold">{listTitle}</div>
      
            <div className='mt-7'>
                {
                    data.map((item:any)=>
                    <div className="flex mb-7">
                        <div className="max-w-32 mr-5 font-medium">
                            {item.description}
                            <div className="text-sm text-[#A6A8B1]">{item.date}</div>
                        </div>
                        <div className="flex-1 flex justify-end text-[#3E60FF] items-baseline "> #{item.amount} </div>
                    </div>  
                    )
                }  
            </div>
            
        </div>
     );
}
 
export default FlatList;