import Link from "next/link";

const Header = () => {
    return (  
   <div>
         <ul>
             <li>
                 <Link href="/" >
                     <a> Home </a> 
                </Link>
             </li>
             <li>
                 <Link href="/about" >
                     <a> About </a> 
                </Link>
             </li>
             <li>
                 <Link href="/contact" >
                     <a> Contact </a> 
                </Link>
             </li>
         </ul>
         </div>
    );
}
 
export default Header;