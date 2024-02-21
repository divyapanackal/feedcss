import React from 'react';
import {useParams} from "react-router-dom";
import members from '../../local-json/members.json';

const ProfileDetail = () => {
    const {profileId} = useParams()
    const thisProfile = members.find(prof => prof.employeeID === profileId)
  return (
    <div>ProfileDetail</div>
  )
}

export default ProfileDetail