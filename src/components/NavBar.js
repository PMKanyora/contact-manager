import React from 'react'
import styled from 'styled-components'
import { FcContacts } from "react-icons/fc";
// import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    height: auto;

`
const Navbar = styled.div`
    background-color: #183a37;
    padding-left: 120px;
    display: flex;
    align-items: center;
    height: 50px;
`
const Link = styled.h3`
     color: #fff;
     font-size: 18px;
     font-family: 'Nunito';
     padding-left: 3px;
     span{
        color: #fca311;
     }

`

export default function AddContact() {
  return (
    <>
        <Wrapper>
            <Navbar>
                <FcContacts style={{fontSize:'30px'}}/>
                <Link to='/' >Contact <span>Manager</span></Link>
            </Navbar>
        </Wrapper>
    </>
  )
}