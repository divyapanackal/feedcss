import React from 'react'
import { ButtonWrap } from './Button.styles';


const Button = ({children}) => {
  return (    
    <ButtonWrap >
        {children}
    </ButtonWrap>    
  )
}

export default Button