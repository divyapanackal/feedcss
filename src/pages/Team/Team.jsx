import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import members from '../../local-json/members.json';
import { Wrapper } from './Team.styles';

const Team = () => {

    const [membersData] = useState(members);

    return (
        <Wrapper>
            <h2>FEED CSS Team Members</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Projects</th>
                        <th>Location</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {membersData && membersData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
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
                                    <Link to={`team/${data.employeeID}`} className="btn-primary">Details</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Team