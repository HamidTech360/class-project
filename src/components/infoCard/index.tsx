const InfoCard = ({tagColor, iconColor, Icon, label, value, percentageValue}:any) => {
    return ( 
        <div className="bg-white border rounded-md h-44 py-3 px-5">
           <div className="flex">
                <div 
                    style={{backgroundColor:tagColor}}
                    className={`rounded-md h-10 w-10 flex justify-center items-center`}
                >
                        {<Icon size={17} color={iconColor} />}
                    </div>
                <div  className="flex-1 flex justify-end">
                    <select className="bg-white text-sm text-[#8B8B8B] focus:appearance-none outline-none">
                        <option className="text-[red]" value="">Today</option>
                    </select>
                </div>
           </div>

           <div className="text-base mt-10">{label}</div>
           <div className="flex">
                <div className="text-2xl font-semibold">{value}</div>
                <div className="flex-1 flex justify-end" style={{color: percentageValue < 0 ? '#C3002F':'#519C66'}}>
                    {percentageValue}%
                </div>
           </div>

        </div>
     );
}
 
export default InfoCard;
