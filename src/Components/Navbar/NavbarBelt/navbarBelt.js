import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import India from '../../../Assets/India.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';


const NavbarBelt = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='navbarBelt'>
      <div className="leftNavBelt">
       
        
        <Link to ={'/'}  className="leftNavBeltLogo">
          <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
          <span className='navbar_inLogo'>.in</span>
          </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <FmdGoodOutlinedIcon className='navbarrBeltLocationImgIcon' sx={{ fontSize: "22px" }} />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop"> Delivering to Bhubaneswar 751012 </div>
            <div className="navbarBeltLocationBottom"> Update Location </div>
          </div>
        </div>
        </div>
        <div className="navbarBeltSearchBox">
          <div className="navbarBeltSearchDiv">
            <div className="navbarBeltSearchBoxAll">
              <div className="navbarBeltSearchBoxAllText">All</div>
              <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
            </div>

            <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />
            <div className='searchIconNavbarBelt'>
              <SearchIcon sx={{ fontSize: '26px' }} className='searchIconNavbarBeltIcon' />
            </div>


          </div>

        </div>


        <div className='rightSideNavbarBelt'>
          <div className='IndiaFlagCode'>
            <img src={India} className='IndiaFlag'/>
            <div className='IndiaCodeNavbarBelt'>EN <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} className='IndiaCodeNavbarBeltDrop' /></div>
          </div>
          <div className='helloSignInNavbarBelt'>
            <div className='helloTopNavbarBelt'>Hello, Rudra</div>
            <div className='IndiaCodeNavbarBelt'>Account & Lists</div>
          </div>
          <div className='helloSignInNavbarBelt'>
            <div className='helloTopNavbarBelt'>Returns</div>
            <div className='IndiaCodeNavbarBelt'>& Orders</div>
          </div>

          <Link to = {'/cart'} className='helloSignInNavbarBelt'>
            <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
            <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon sx={{paddingTop:0.7}}/><span className='cartTitle'>Cart</span></div>


          </Link>
        </div>
      
    </div>



  )
}
export default NavbarBelt