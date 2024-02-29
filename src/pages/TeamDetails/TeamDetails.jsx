import React from 'react'
import { Link, useParams } from "react-router-dom";
import { styled } from 'styled-components';
import members from '../../local-json/members.json';
import bgImg from '../../assets/bg-1.jpg';


const Wrapper = styled.section`
width: 100%;
display: flex;
column-gap: 1px;
margin-top: -31px;
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
padding-top: 65px;
max-width: 330px;
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
        padding: 20px 30px;
    }

`

const BoxWrap = styled.div`
max-width: 100%;
width: 100%;
box-shadow: 3px 0px 12px 1px #ccccccd1;
padding: 36px 40px;
.two-col li div {
    max-width: 150px;
}
.skill-tag {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.skill-tag li {
    background: #0b579a;
    color: #fff;
    border-radius: 5px;
    padding: 2px 11px;
    font-size: 14px;
}
`

const Box = styled.div`
    margin-bottom: 20px;
    h2 {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
    }
`

const TopBox = styled.div`
position: relative;
display: flex;
padding: 30px 30px 0 30px;

.top-bg {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.prof-img-wrap {
    position: relative;
    top: 25px;
}
.prof-img-wrap img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 10px solid #fff;
    box-shadow: 1px 1px 6px 0px #000000;
}
.prof-name-info {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    color: #fff;
    font-size: 20px;
    padding-top: 38px;
    font-weight: 200;
}
.prof-name-info strong {
    font-size: 24px;
}
`
const SubTitle = styled.h2`
margin-bottom: 20px;
`



const TeamDetails = () => {
    const { profileId } = useParams()
    const thisProfile = members.find(prof => prof.employeeID === profileId)
    return (
       

          

        
        <div>
            <Link to={'/home'}>&lt; Back</Link>
            <SubTitle className=''>Profile Details</SubTitle>
            <div>
                <TopBox>
                    <img className='top-bg' src={bgImg} />
                    <div className='prof-img spc-2 prof-img-wrap'>
                        <img src={thisProfile && thisProfile.portrait} alt="" />
                    </div>
                    <div className='prof-name-info'>
                        <strong>{thisProfile.name.first} {thisProfile.name.last}</strong>
                        <span>{thisProfile.designation}</span>
                        <span>{thisProfile.email}</span>
                    </div>


                </TopBox>
                <Wrapper>
                    <Aside>
                        <ul className='two-col spc-2'>
                            <li>
                                <div>Employee ID</div>
                                <div>{thisProfile.employeeID}</div>
                            </li>
                            <li>
                                <div>Joined</div>
                                <div>{thisProfile.hiredOn}</div>
                            </li>
                            <li>
                                <div>Grade</div>
                                <div>{thisProfile.grade}</div>
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
        </div>
                            
                         
    )

}

export default TeamDetails