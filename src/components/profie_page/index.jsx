import React from 'react'
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import PortfolioPictures from './PortfolioPictures';
import "./profile.css";

const Profie_section = () => {
  return (
    <div className='profile-section'>
         <ProfileHeader />
         <ProfileDetails />
         <PortfolioPictures />
    </div>
  )
}

export default Profie_section