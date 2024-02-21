import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import members from '../../local-json/members.json';
import { Wrapper, Button } from './ProfileListing.styles';

const ProfileListing = () => {

    const [membersData] = useState(members);

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Projects</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {membersData && membersData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.employeeID}</td>
                                <td>
                                    <div className='flex-box'>
                                        <span className='list-box-avatar'><img src={data.portrait} alt={data.name.first} /></span>
                                        <span className='list-box-name'>
                                            <span>{data.name.first} {data.name.last}</span>
                                            <span className='txt-grey'>{data.designation}</span>
                                        </span>
                                    </div>
                                </td>
                                <td>{data.email}</td>
                                <td>
                                    <ul className='list-box-info-proj'>
                                       {data.projects.map((proj, j) => {
                                           return (
                                               <li key={j}>
                                                   <span>{proj.name}({proj.allocationPercentage}%)</span>
                                               </li>
                                           )
                                       })}
                                   </ul>                                
                                </td>
                                <td>{data.virtualTeam}</td>
                                <td>
                                    <Button><Link to={`profile/${data.employeeID}`}>View Details</Link></Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default ProfileListing