import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar";
import ContactList from "./components/ContactList"
import AddContact from "./components/AddContact";
import ViewContact from "./components/ViewContact";
import EditContact from "./components/EditContact"
import GlobalStyle from "./styles/globalStyles";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to ={'contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </>
  );
}

export default App;
 