import React from 'react'
import styled from 'styled-components'
import SpinnerImg from '../images/loading2.gif'

const Spinner1 = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 200px;
    }
`

export default function Spinner() {
  return (
    <>
        <Spinner1>
        <img src={SpinnerImg} alt="spinner"/>
        </Spinner1>
    </>
  )
}
