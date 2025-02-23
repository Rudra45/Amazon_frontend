import React from 'react';
import './navbarBanner.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu' ;
//import { Menu } from '@mui/material';

const NavbarBanner = () =>{
    const option = [
        {'name':'MX Player'},
        {'name':'Sell'},
        {'name':'Best Sellers'},
        {'name':"Today's Deals"},
        {'name':'Mobiles'},
        {'name':'Customer Service'},
        {'name':'Electronics'},
        {'name':'Prime'},
        {'name':'New Releases'},
        {'name':'Amazon Pay'},
        {'name':'Home & Kitchen'},
        {'name':'Fashion'},
        {'name':'Computers'},
        {'name':'Books'},
        {'name':'Cars & Motorbike'},
        {'name':'Toys & Games'},
    ]
    return(
        <div className="navbarBanner">
           <div className="navbarBannerOptionsLeft">

                <div className="optionsNavbarBanner">
                    <MenuIcon sx={{fontSize:"24px"}}/>
                    <div className="allOptionsNavbarBanner">All</div>
                </div>
                {
                    option.map((item,ind) => {
                        return(
                            <Link to ={'./products'} className="optionsNavbarBanner" key={ind}>
                            <div className="allOptionsNavbarBanner">{item.name}</div>
                            </Link>
                        )
                    })
                }

           </div>


        </div>
    )
}
export default NavbarBanner;