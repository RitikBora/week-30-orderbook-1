import { on } from "events"

export const PrimaryButton = ({ children, onClick }: { children: string, onClick?: () => void }) => {
    return <button type="button" className="text-center font-semibold rounded-lg focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-[60px] w-[128px]  px-3 py-1.5 mr-4 
    " onClick={onClick} style={{fontSize : '1.3rem'}}>
        <div className="absolute inset-0 bg-blue-500 opacity-[16%]"></div>
        <div className="flex flex-row items-center justify-center gap-4"><p className="text-blue-500">{children}</p></div>
    </button>

} 

export const SuccessButton = ({ children, onClick }: { children: string, onClick?: () => void }) => {
    return <button type="button" className="text-center font-semibold rounded-lg focus:ring-green-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-[60px] w-[220px] px-3 py-1.5 mr-4 "
    onClick={onClick} style={{fontSize : '1.3rem'}}>
        <div className="absolute inset-0 bg-green-500 opacity-[16%]"></div>
        <div className="flex flex-row items-center justify-center gap-4"><p className="text-green-500">{children}</p></div>
    </button>

} 