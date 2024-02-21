import React from 'react'
import { Link, useParams } from "react-router-dom";
import { styled } from 'styled-components';
import members from '../../local-json/members.json';


const Wrapper = styled.section`
    width:100%;
    display:flex;
    column-gap:40px;
    ul {
        list-style: none;
    }
    .two-col {
        display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    }
    .two-col li{
        display:flex;
        width:100%;
        column-gap:20px;
    }
    .two-col li div {
        flex: 0 0 calc(50% - 20px);
    }
`

const Aside = styled.aside`
max-width: 400px;
width: 100%;
box-shadow: 0px 0px 12px 1px #ccccccd1;
  

    .prof-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 4px;
    }
    img {
        width: 128px;
        border-radius: 50%;
        height: 128px;
        object-fit: cover;
    }
    hr {
        margin: 20px 0;
    }
    
 
    .spc-2 {
        padding: 20px;
    }

`

const BoxWrap = styled.div`
max-width: 100%;
width: 100%;
box-shadow: 0px 0px 12px 1px #ccccccd1;
padding: 20px;
.two-col li div {
    max-width: 150px;
}
.skill-tag {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.skill-tag li {
    background: #5166ec;
    color: #fff;
    border-radius: 5px;
    padding: 2px 11px;
}
`

const Box = styled.div`
    margin-bottom: 20px;
`


const TeamDetails = () => {
    const { profileId } = useParams()
    const thisProfile = members.find(prof => prof.employeeID === profileId)
    return (
        <div>
            <Link to={'/home'}>Back</Link>
            <h2>Profile Details</h2>
            <Wrapper>
                <Aside>
                    <div className='prof-img spc-2'>
                        <img src={thisProfile.portrait} alt="" />
                        <strong>{thisProfile.name.first} {thisProfile.name.last}</strong>
                        <span>{thisProfile.designation}</span>
                        <span>{thisProfile.email}</span>
                        <span>Joined {thisProfile.hiredOn}</span>
                    </div>
                    <hr></hr>
                    <ul className='two-col spc-2'>
                        <li>
                            <div>Employee ID</div>
                            <div>{thisProfile.employeeID}</div>
                        </li>
                        <li>
                            <div>Department</div>
                            <div>{thisProfile.department}</div>
                        </li>
                        <li>
                            <div>Stream</div>
                            <div>{thisProfile.stream}</div>
                        </li>
                        <li>
                            <div>Virtual Team</div>
                            <div>{thisProfile.virtualTeam}</div>
                        </li>
                    </ul>
                </Aside>
                <BoxWrap>
                    <Box>
                        <h2>Projects</h2>
                        <ul className='list-box-info-proj'>
                            {thisProfile.projects.map((proj, j) => {
                                return (
                                    <li key={j}>
                                        <span>{proj.name}({proj.allocationPercentage}%)</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </Box>
                    <Box>
                        <h2>Skills</h2>
                        <ul className='skill-tag'>
                            {thisProfile.skills.map((k, l) => {
                                return (
                                    <li key={l}>{k}</li>
                                )

                            })}
                        </ul>
                    </Box>
                    <Box>
                        <h2>About</h2>
                        <ul className='two-col'>
                            <li>
                                <div>Date of Birth:</div>
                                <div>{thisProfile.dob}</div>
                            </li>
                            <li>
                                <div>Phone Number:</div>
                                <div>{thisProfile.phone}</div>
                            </li>
                            <li>
                                <div>Gender:</div>
                                <div>{thisProfile.gender}</div>
                            </li>
                            <li>
                                <div>Address:</div>
                                <address>
                                    {thisProfile.address.street},<br />
                                    {thisProfile.address.city},<br />
                                    {thisProfile.address.state},<br />
                                    {thisProfile.address.zip}
                                </address>
                            </li>

                        </ul>
                    </Box>
                </BoxWrap>
            </Wrapper>
        </div>
    )

}

export default TeamDetails