import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import members from '../../local-json/members.json';
import AddMember from '../../utils/AddMember/AddMember';
import { Wrapper, TitleArea } from './Team.styles';


const Team = () => {

    const [membersData] = useState(members);
    const modal = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const AddMemberHandler = () => {
        setIsVisible(!isVisible);
        modal.current.open();
    };

    const closeModalHandler = () => {
        modal.current.close();
    };


    return (
        <Wrapper>
            <TitleArea>
                <h2>FEED CSS Team Members</h2>
                <button onClick={() => { AddMemberHandler() }}>Add Member</button>
            </TitleArea>
            <Modal ref={modal}>
                <button
                    onClick={closeModalHandler}
                    id="closeModal"
                    className="dialog-close-btn border-2 rounded-full border-indigo-600 block ml-auto w-[30px] h-[30px]"
                >
                    X
                </button>

                <AddMember />
            </Modal>

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
                                <td>{i + 1}</td>
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
                                    <Link state={data} to={`team/${data.employeeID}`} className="btn-primary">Details</Link>
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