import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import LandingFooter from './LandingFooter'
import LandingHeader from './LandingHeader'


const OuterWrapper = styled.main`
  width:100%;
  padding: 50px 0;
`

const LandingLayout = () => {
  return (
    <div>
      <LandingHeader />
      <OuterWrapper>
        <div className="container">
        <Outlet />
        </div>
      </OuterWrapper>
      <LandingFooter />

      
    </div>
  )
}

export default LandingLayout