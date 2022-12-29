import React, { useEffect, useState } from 'react'
import styled from 'styled-components' 
import {Link} from 'react-router-dom'
import { BiAddToQueue } from "react-icons/bi";
import User1 from '../images/user1.png'
import { MdVisibility } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { getallUsers } from '../services/ContactService';
import Spinner from '../images/loading2.gif';


const Wrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: auto;
  /* padding-left: 120px; */
`
const SubHeading = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 120px; 
`
const Text = styled.p`
  font-size: 25px;
  font-family: "Nunito";
  margin-right: 5px;
`
const Add = styled.button`
  padding: 0 7px ;
  background-color: #183a37;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #fca311;
    color: #2a9d8f;
  }
`
const Description = styled.p`
  max-width: 80%;
  font-style: italic;
  color: #14213d;
  padding-left: 120px; 
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
`
const Button = styled.button`
  font-size: 16px;
  background-color: #fff;
  padding: 9px 15px;
  border-radius: 5px;
  border: none;
  &:hover{
    background-color: #fca311;
  }
`
const Card = styled.div`
  background-color: #fff;
  width: auto;
  height: auto;
  margin-top: 25px;
  display: flex;
  border-radius: 7px;
`
const User = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
  padding: 15px;
`
const Details = styled.div`
  margin-left: 5px;
  display: inline-block;
  margin-top: 40px;
  line-height: 2.4;
  span {
    font-weight: 700;
  }
  p{
    border-bottom: 1px solid #edede9;
  }
`
const CallToAction = styled.div`
  margin-left: 5px;
  display: grid;
  row-gap: 3px;
  margin-top: 50px;
  grid-template-columns: 5px;
  margin-left: 30px;
  padding-bottom: 30px;
`
const MultIcards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 70px;
  padding-bottom: 30px;
  column-gap: 30px;
  margin-right: 70px;
`

export default function ContactList() {
    const [user, setUser] = useState({
      loading: false,
      contacts : [],
      errorMessage : ''
    });
    useEffect(() => {
      getUsers();
    },[])

    const getUsers = async () => {
      try {
        setUser({...user, loading: true});
        const response = await getallUsers();
        console.log(response);
        setUser({...user, loading: false, contacts: response.data})
      }
      catch (error){
        setUser({...user, loading: false, errorMessage: error.message})
      }
    } 
  let {loading, contacts, errorMessage} = user;
  
  return (
    <>
      <pre>{JSON.stringify(contacts)}</pre>
        <Wrapper>
            <SubHeading>
              <Text>Phone Directory</Text>
              <Add>
                <Link to={"/contacts/Add"} 
                style={{fontSize:'16px',
                fontWeight:'700', 
                color:'#fff', 
                textDecoration: 'none'}}>
                  <BiAddToQueue style={{fontSize:'16px', 
                  fontWeight:'700', 
                  color:'#fff'}}/> 
                  New
                </Link>
              </Add>
            </SubHeading>
            <Description>
              Capture and organize information about people by saving new contacts in your address book. 
              Why have fear of losing contacts and you can save them where you can easily access them?
            </Description>
            <Form style={{paddingLeft: "120px" }}>
              <input type='text' placeholder='Search Contact'
                style={{width: '260px', 
                marginRight:'10px'
              }}/>
              <Button type='submit'
                style={{
                cursor:'pointer', 
                outline:'none',
                }}> Search</Button>
            </Form>
            <MultIcards> 
              {
                contacts.length > 0 && 
                  contacts.map(contact => {
                  return (
                    <><Card key ={contact.id}>
                      {/* {
    loading ? <Spinner /> : <> */}
                      <User>
                        <img src={contact.photo} alt='User1' />
                      </User>
                      <Details>
                        <p>Name: <span>{contact.name}</span></p>
                        <p>Mobile: <span>+254743126202</span></p>
                        <p style={{ border: 'none' }}>Email: <span>peterkanyora341@gmail.com</span></p>
                      </Details>
                      <CallToAction>
                        <Link to={"/contacts/view/:contactId"}
                          style={{ color: "black" }}><MdVisibility style={{
                            fontSize: '30px',
                            backgroundColor: ' #fca311',
                            padding: '5px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }} />
                        </Link>
                        <Link to={"/contacts/edit/:contactId"}
                          style={{ color: "black" }}><FaPencilAlt style={{
                            fontSize: '30px',
                            backgroundColor: 'lightBlue',
                            padding: '5px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }} />
                        </Link>
                        <FaTrashAlt style={{
                          fontSize: '28px',
                          backgroundColor: ' red',
                          padding: '5px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }} />

                      </CallToAction>

                      {/* </>
  }
    */}
                    </Card><Card>
                        {/* {
    loading ? <Spinner /> : <> */}
                        <User>
                          <img src={User1} alt='User1' />
                        </User>
                        <Details>
                          <p>Name: <span>Peter Maina</span></p>
                          <p>Mobile: <span>+254743126202</span></p>
                          <p style={{ border: 'none' }}>Email: <span>peterkanyora341@gmail.com</span></p>
                        </Details>
                        <CallToAction>
                          <Link to={"/contacts/view/:contactId"}
                            style={{ color: "black" }}><MdVisibility style={{
                              fontSize: '30px',
                              backgroundColor: ' #fca311',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <Link to={"/contacts/edit/:contactId"}
                            style={{ color: "black" }}><FaPencilAlt style={{
                              fontSize: '30px',
                              backgroundColor: 'lightBlue',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <FaTrashAlt style={{
                            fontSize: '28px',
                            backgroundColor: ' red',
                            padding: '5px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }} />

                        </CallToAction>

                        {/* </>
  }
    */}
                      </Card><Card>
                        {/* {
    loading ? <Spinner /> : <> */}
                        <User>
                          <img src={User1} alt='User1' />
                        </User>
                        <Details>
                          <p>Name: <span>Peter Maina</span></p>
                          <p>Mobile: <span>+254743126202</span></p>
                          <p style={{ border: 'none' }}>Email: <span>peterkanyora341@gmail.com</span></p>
                        </Details>
                        <CallToAction>
                          <Link to={"/contacts/view/:contactId"}
                            style={{ color: "black" }}><MdVisibility style={{
                              fontSize: '30px',
                              backgroundColor: ' #fca311',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <Link to={"/contacts/edit/:contactId"}
                            style={{ color: "black" }}><FaPencilAlt style={{
                              fontSize: '30px',
                              backgroundColor: 'lightBlue',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <FaTrashAlt style={{
                            fontSize: '28px',
                            backgroundColor: ' red',
                            padding: '5px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }} />

                        </CallToAction>

                        {/* </>
  }
    */}
                      </Card><Card>
                        {/* {
    loading ? <Spinner /> : <> */}
                        <User>
                          <img src={User1} alt='User1' />
                        </User>
                        <Details>
                          <p>Name: <span>Peter Maina</span></p>
                          <p>Mobile: <span>+254743126202</span></p>
                          <p style={{ border: 'none' }}>Email: <span>peterkanyora341@gmail.com</span></p>
                        </Details>
                        <CallToAction>
                          <Link to={"/contacts/view/:contactId"}
                            style={{ color: "black" }}><MdVisibility style={{
                              fontSize: '30px',
                              backgroundColor: ' #fca311',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <Link to={"/contacts/edit/:contactId"}
                            style={{ color: "black" }}><FaPencilAlt style={{
                              fontSize: '30px',
                              backgroundColor: 'lightBlue',
                              padding: '5px',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }} />
                          </Link>
                          <FaTrashAlt style={{
                            fontSize: '28px',
                            backgroundColor: ' red',
                            padding: '5px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }} />

                        </CallToAction>

                        {/* </>
  }
    */}
                      </Card></>            
                  )
                })
              }
             
            </MultIcards>
           
        </Wrapper>
    </>
  )
}