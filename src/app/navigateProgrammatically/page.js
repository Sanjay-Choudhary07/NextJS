"use client"
import { useRouter } from "next/navigation";
const PlaceOrder = ()=>{
    const router = useRouter();
    const handleClick = ()=>{
        console.log("placing your order");
        router.push("/");
    }
    return(
        <div>
         <h2>Place order</h2>
         <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default PlaceOrder