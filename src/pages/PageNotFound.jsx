import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import LandingHeader from '../layouts/LandingLayout/LandingHeader'
import LandingFooter from '../layouts/LandingLayout/LandingFooter'
import notFoundImg from '../assets/404.svg'

const Wrapper = styled.section`
  max-width:40%; 
  margin: 80px auto 0 auto;
  padding: 30px;
  text-align: center;
  
  h1 {
    font-size:80px;
    margin-bottom: 20px;
  }
  p{
    font-size: 25px;
    margin-bottom: 20px;
  }
  a {
    color: #fff;
    font-size: 20px;
    background: #0b579a;
    padding: 10px 48px;
    display: inline-block;
    border-radius: 8px;
  }
  img {
    width: 100%;
    max-width: 400px;
  }
`

const PageNotFound = () => {
  return (
    <>
      <LandingHeader />
      <Wrapper>
        <img src={notFoundImg} alt="404" />
        <p>The page you're looking for is not found.</p>
        <Link to={`/home`} >Home</Link>
      </Wrapper>
      <LandingFooter />
    </>
  )
}

export default PageNotFound