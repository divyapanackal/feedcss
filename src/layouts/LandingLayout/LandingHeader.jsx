import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { styled } from "styled-components";


const Header = styled.header`
    padding: 20px 0;
    box-shadow:0 0 2rem 0 rgba(41,48,66,.1);
    background: #005EB1;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
    }
    h1 {
        font-size: 26px;
        font-weight: normal;
    }     
    h1  a {
        font-weight: 300;
        color: #fff;
        letter-spacing: 2px;
    }
    ul {
        list-style:none;
        display: flex;
        column-gap: 20px;
    }
    li a {
        color:#747579;
    }
    li a.active {
        color: #066ac9;
    }
`




const LandingHeader = () => {
  return (
    <Header>
        <div className="container">
        <h1><Link to="/">FEED</Link></h1>
        {/* <nav>
            <ul>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
        </nav> */}
        </div>
    </Header>
  )
}

export default LandingHeader