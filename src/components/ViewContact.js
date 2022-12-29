import React from 'react'
import styled from 'styled-components'
import User7 from '../images/user7.jpeg'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const User = styled.div`
  margin-top: 5%;
  margin-left: 5%;
`
const Details = styled.div`
  background-color: #fff;
  margin-left: 5px;
  display: inline-block;
  margin-top: 40px;
  line-height: 2.4;
  margin-left: 150px;
  padding-right: 10px;
  padding-left: 30px;
  border-radius: 7px;
  width: 60%;
  span {
    font-weight: 700;
  }
  p {
    border-bottom: 1px solid #edede9;
    width: 100%;
  }
`
const Back = styled.button`
  margin-left: 35%;
  margin-top: 15px;
  padding: 5px 8px;
  background-color: #fca311;
  font-family: "Nunito";
  font-size: 14px;
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


export default function ViewContact() {
  return (
    <>
        <Wrapper>
          <User>
            <img src={User7} alt="user"/>
          </User>
          <Details>
              <p>Name: <span>Peter Maina</span></p>
              <p>Mobile: <span>+254743126202</span></p>
              <p>Email: <span>peterkanyora341@gmail.com</span></p>
              <p>Title: <span>Sofware Engineer II</span></p>
              <p>Company: <span>Microsoft</span></p>
              <p style={{border: 'none'}}>Group:<span>Family</span></p>
          </Details>
        </Wrapper>
        <Link to={"/contacts/list"}>
          <Back>Back</Back>
        </Link>
    </>
  )
}