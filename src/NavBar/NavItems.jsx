
import Logo from "./Logo.jsx";
import img from "/src/assets/raz.png"
import Payments from "./Payments.jsx";
import Banking from "./Banking.jsx";
import CorporateCard from "./CorporateCard.jsx";
import Payroll from "./Payroll.jsx";
import Resources from "./Resources.jsx";
import Support from "./Support.jsx";
import Pricing from "./Pricing.jsx";
import Flag from "./Flag.jsx";
import flagImg from "/src/assets/flag.jpg";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
export default function NavBar(){
    
    
    return(
        <div className="flex justify-center items-center space-x-[30px] w-full h-[50px] bg-blue-950 text-white font-mullish">
    <Logo img= {img}/>  
    <Payments/>
    <Banking/>
    <CorporateCard/>
    <Payroll/>
    <Resources/>
    <Support/>
    <Pricing/>
     <Flag flag={flagImg}/>
<Login/>
<SignUp/>
        </div>
    );
}