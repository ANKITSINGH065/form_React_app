import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function fromupdate(event) {
    const { value, name } = event.target;

    setContact((preve) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preve.lName,
          email: preve.email
        };
      } else if (name === "lName") {
        return {
          fName: preve.fName,
          lName: value,
          email: preve.email
        };
      } else if (name === "email") {
        return {
          fName: preve.fName,
          lName: preve.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={fromupdate}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={fromupdate}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={fromupdate}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
