import styles from '../../screens/dashboard/dashboard.module.scss'

const FlatList = ({listTitle}:any) => {
    return ( 
        <div className={`bg-white h-[500px] py-10 px-5 xl:px-3  rounded-lg overflow-y-scroll ${styles.tableContainer}`}>
             
            <div className="text-lg font-semibold">{listTitle}</div>
      
            <div className='mt-7'>
                {
                    [1,1,1,1,1,1,1,1,].map(()=>
                    <div className="flex mb-7">
                        <div className="max-w-32 font-medium">
                            Electricity Bill
                            <div className="text-sm text-[#A6A8B1]">12 December, 2024</div>
                        </div>
                        <div className="flex-1 flex justify-end text-[#3E60FF] items-baseline "> #3000 </div>
                    </div>  
                    )
                }  
            </div>
            
        </div>
     );
}
 
export default FlatList;