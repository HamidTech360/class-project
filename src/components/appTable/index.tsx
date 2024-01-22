const AppTable = ({tableHeader}:any) => {
    const entries:any= []
    tableHeader.forEach((element:any) => {
        entries.push(element.key)
    });

    // const tableHeader = [
    //     {label:'Receipt Id', key:'receiptId'},
    //     {label:'Issued Date', key:'date'},
    //     {label:'Amount',  key:'amount'},
    //     {label:'Payment Method', key:'paymentMethod'},
        
    // ]
    const tableData = [
        {
            receiptId:'123456#',
            date:'Janaury, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'December, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'Janaury, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'December, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'Janaury, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'December, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'Janaury, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'December, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'Janaury, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        },
        {
            receiptId:'123456#',
            date:'December, 1998 12:45am',
            amount:45678,
            paymentMethod:'Card'
            
        }
    ]
    return ( 
        <table className="w-full mb-10" >
            <thead>
                <tr>
                    <td style={{borderBottom:'1px solid #E1E2E9'}}><input style={{border:'2px solid red'}} type="checkbox" className="h-4 w-4" id="" /></td>
                    {tableHeader.map((item:any, i:any)=>
                    <td style={{borderBottom:'1px solid #E1E2E9'}} className="font-semibold h-10 px-5" key={i}>{item.label}</td>
                    )}
                </tr>
            </thead>
            <tbody>
                {
                    tableData &&
                    tableData.map((row:any, i)=>
                        <tr>
                            <td style={{borderBottom:'1px solid #E1E2E9'}}><input className="h-4 w-4" type="checkbox" name="" id="" /></td>
                             {entries.map((item:any, i:any)=>
                                    <td style={{borderBottom:'1px solid #E1E2E9'}} className="py-3 px-5 text-[#6E7079]"  key={i}> {row[item]} </td>
                            )}
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}
 
export default AppTable;