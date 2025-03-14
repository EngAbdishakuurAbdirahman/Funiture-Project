import React from 'react'
import SideNavList from './SideNavList'
import { Link } from 'react-router-dom'

function SideNav({children}) {
  return <>

  <div className="bg-[#183B50] w-[23%] pl-8 pt-20 h-screen fixed">
    <SideNavList title="Dashboard" icon="fa-box" />
    <Link to="/StudentTable"><SideNavList icon={"fa-solid fa-cart-shopping"} title={"Products"} /></Link>
    <Link to="/StudentTable"><SideNavList icon={"fa-solid fa-user-tie"} title={"Admin"} /></Link>
    <SideNavList title="Document" icon="fa-file" />
    <SideNavList title="Logout" icon="fa-right-from-bracket" />
  </div>

  <div className="ml-[24%]">
            {children}
        </div>
 
  </>
}

export default SideNav