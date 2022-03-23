import {Link} from "react-router-dom"
import "./style/nav.css"

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title:"About",
    link:"/about"
  },
  {
    title:"Products",
    link:"/products"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((item)=>{
          return <li><Link to={item.link}>{item.title}</Link></li>
        })}
      </ul>
    </nav>

  )
  
  
};
