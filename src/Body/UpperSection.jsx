export default function UpperSection(){
return (
    <div className="bg-blue-950">
<div className=" mx-auto flex w-10/12 justify-center items-center ">
    <section className="w-4/10 space-y-3 mr-[30px]">
<h1 className="text-white text-[30px] font-bold">Power your finance grow your business</h1>
<div className="w-3 bg-blue-200 h-1"></div>
<p className="text-white font-mullish opacity-80">Accepts Payments from Customers.Automate payout to vendors & employees. Never run out of working capital</p>
<a href=""><button className="bg-blue-400 text-white py-1 px-2 rounded-lg">Sign Up Now</button></a>
    </section>

    <section className="mt-7">
<img src="./src/assets/body.jpg" alt="" height="200px" width="400px" />
    </section>
</div>
</div>
);
}