import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <ul>
            <li><Link href="">Home</Link></li>
            <li> <Link href='/about'>About</Link></li>
            <li><Link href='/product'>product</Link></li>
            <li><Link href='/privacy'>privacy</Link></li>
            <li><Link href="/rules">rules</Link></li>

            
        </ul>
        </>


    )
};