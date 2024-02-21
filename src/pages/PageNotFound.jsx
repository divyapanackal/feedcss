import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.section`
  max-width:40%;
  margin: 0 auto;
  box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
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
    background: #066ac9;
    padding: 5px 20px;
    display: inline-block;
    border-radius: 8px;
  }
`

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>The page you're looking for is not found.</p>
      <Link to={`/home`} >Home</Link>

    </Wrapper>
  )
}

export default PageNotFound