import Link from "next/link";

export default function interceptedRoute(){
    return (
    <>
    <h1>Hello from intercepted routes</h1>
    <div>
        <Link href="/interceptedRoute/F2">F2 Page</Link>
    </div>
    </>   
 )
}
