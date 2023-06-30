import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {



  return (
    <div className='True_side_nav'>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><div className="home">Home</div></Link>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/Reviews"><div className="review">Reviews</div></Link>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/Profile"><div className="profile">Profile</div></Link>
    </div>
  );
}

export default SideNavBar;