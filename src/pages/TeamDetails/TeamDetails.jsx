import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";
import members from '../../local-json/members.json';
import bgImg from '../../assets/bg-1.jpg';
import { Wrapper, Aside, BoxWrap, Box, TopBox, SubTitle } from './TeamDetails.styles';
import AddMember from '../../utils/AddMember/AddMember';
import { PieChart } from 'react-minimal-pie-chart';


const TeamDetails = () => {
    const location = useLocation();
    let { state } = location;


    let data = [];

    state.projects.map((obj) => {
        var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });

        let insert = {
            color: randomColor,
            title: obj.name,
            value: obj.allocationPercentage,
        };

        data.push(insert);
    });

    console.log(data)

    return (
        <div>
            <Link to={'/home'}>&lt; Back</Link>
            <SubTitle className=''>Profile Details</SubTitle>
            <div>
                <TopBox>
                    <img className='top-bg' src={bgImg} />
                    <div className='prof-img spc-2 prof-img-wrap'>
                        <img src={state && state.portrait} alt="" />
                    </div>
                    <div className='prof-name-info'>
                        <strong>{state.name.first} {state.name.last}</strong>
                        <span>{state.designation}</span>
                        <span>{state.email}</span>
                    </div>
                </TopBox>
                <Wrapper>
                    <Aside>
                        <ul className='two-col spc-2'>
                            <li>
                                <div>Employee ID</div>
                                <div>{state.employeeID}</div>
                            </li>
                            <li>
                                <div>Joined</div>
                                <div>{state.hiredOn}</div>
                            </li>
                            <li>
                                <div>Grade</div>
                                <div>{state.grade}</div>
                            </li>
                            <li>
                                <div>Department</div>
                                <div>{state.department}</div>
                            </li>
                            <li>
                                <div>Stream</div>
                                <div>{state.stream}</div>
                            </li>
                            <li>
                                <div>Virtual Team</div>
                                <div>{state.virtualTeam}</div>
                            </li>
                        </ul>
                    </Aside>
                    <BoxWrap>
                        <Box>
                            <div className='proj-info-box'>
                                <div>
                                    <h2>Projects</h2>
                                    <ul className='list-box-info-proj'>
                                        {state.projects.map((proj, j) => {
                                            return (
                                                <li key={j}>
                                                    <span>{proj.name}({proj.allocationPercentage}%)</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className='chart-box'>
                                    <PieChart data={data}
                                        radius={50}
                                        viewBoxSize={[100, 100]}
                                    />
                                </div>
                            </div>

                        </Box>
                        <Box>
                            <h2>Skills</h2>
                            <ul className='skill-tag'>
                                {state.skills.map((k, l) => {
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
                                    <div>{state.dob}</div>
                                </li>
                                <li>
                                    <div>Phone Number:</div>
                                    <div>{state.phone}</div>
                                </li>
                                <li>
                                    <div>Gender:</div>
                                    <div>{state.gender}</div>
                                </li>
                                <li>
                                    <div>Address:</div>
                                    <address>
                                        {state.address.street},<br />
                                        {state.address.city},<br />
                                        {state.address.state},<br />
                                        {state.address.zip}
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