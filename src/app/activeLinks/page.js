"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navigation = ()=>{
     const pathname = usePathname();
     return(
        <div>
            <ul>
                <li>
                   <Link href="/" className={pathname==='/'?'active':''}>
                    Home
                   </Link> 
                </li>
                <li>
                    <Link href="/about" className={pathname==='/about'?'active':''}>
                    About
                    </Link>
                </li>
            </ul>
        </div>
     )
}
export default Navigation;