import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #e5e5e5;
`
const Title = styled.h3`
  font-size: 22px;
  font-family: "Nunito";
  margin-left: 50px;
  color: #390099;
  margin-top: 10px;
`
const Text = styled.p`
  font-family: "Nunito";
  margin-left: 50px;
  font-style: italic;
  margin-top: 5px;
  width: 80%;
`
const Form = styled.form`
  margin-top: 30px;
  input {
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-family: 'Nunito';
    background-color: #fff;
  } 
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`
const Buttons = styled.div`
  margin-left: 70px;
`
const Create = styled.button`
  margin-top: 5px;
  padding: 3px 5px;
  color: #fff;
  background-color: #390099;
  outline: none;
  border-radius: 4px;
  border: none;
  font-size: 17px;
  font-family: "Nunito";
  font-weight: 700;
  cursor: pointer;
`
const Cancel = styled.button`
  margin-top: 5px;
  padding: 3px 5px;
  color: #fff;
  background-color: #2d3142;
  outline: none;
  border-radius: 4px;
  border: none;
  font-size: 17px;
  font-family: "Nunito";
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`
const Select = styled.div`
  
`
const Registration = styled.div`
`


export default function EditContact() {
  return (
    <>
       <Wrapper>
          <Title>Edit Contact</Title>
          <Text>
            Edit contact information for people you know. 
            You can use saved contact information to quickly restore it once its lost.
            You can create and store as many contacts as you need so 
            you'll always have important contact with you.
          </Text>
          <Registration>
            <Form style={{paddingLeft: "70px" }}>
                <input type='text' placeholder='Name'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <input type='text' placeholder='Photo Url'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <input type='number' placeholder='Mobile'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <input type='email ' placeholder='Email'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <input type='text' placeholder='Company'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <input type='text' placeholder='Title'
                  style={{width: '400px', 
                  marginRight:'10px'
                }}/>
                <Select>
                <select style={{border: "none", 
                      padding: "10px", 
                      width: "400px", 
                      backgroundColor:"#fff",
                      borderRadius:"5px",
                      fontFamily: "Nunito",
                      fontSize:"16px"}}>
                    <optgroup label='Category'>
                      <option value="family">Family</option>
                      <option value="friend">Friend</option>
                  </optgroup></select>
                </Select>
            </Form>
          </Registration>
          <Buttons>
              <Create>Update</Create>
              <Link to={"/contacts/list"}><Cancel>Cancel</Cancel></Link>
          </Buttons>    
       </Wrapper>
    </>
  )
}
