export default function CorporateCard(){
    return(
        <div className="flex flex-col space-y-1 group transition-all duration-300">
        <a href="#" className="hover:text-blue-200">Corporate Card</a>
        <div className="w-full h-0.5 bg-blue-100 opacity-80 hidden group-hover:block"></div>
        </div>
    )
}