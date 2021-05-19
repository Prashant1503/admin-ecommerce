import React, { useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);

    setContact(...contacts, contact);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
