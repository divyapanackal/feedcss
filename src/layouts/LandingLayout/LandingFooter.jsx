import React from 'react'
import { styled } from 'styled-components'

const Footer = styled.footer`
    text-align: center;
    padding: 30px 0;
    span {
      font-weight: 200;
      font-size: 14px;
    }
`

const LandingFooter = () => {
  return (
    
    <Footer>
        <div className='container'>
        <span>&copy; 2024 | All rights reserved.</span>
        </div>
    </Footer>
    
  )
}

export default LandingFooter