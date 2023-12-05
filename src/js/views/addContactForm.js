import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Newcontact = () => {
  const { } = useContext(Context);
  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: ""
  });
  const navigate = useNavigate();

  const handleNewContact = (key, value) => {
    setNewContact((prev) => {
      return {
        ...prev,
        [key]: value
      };
    });
  };

// const createContact = async () => {
//     try {
//       const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           "full_name": "Oscar Thielen",
//           "email": "oscar@gmail.com",
//           "agenda_slug": "oscar-agenda",
//           "address":"47569 NW 34ST, 33434 FL, USA",
//           "phone":"7864445567"
//         })
//       });
//       if (response.status !== 201) {
//         console.log("error", error);
//         return;
//       }
//       await getContacts();
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const createContact = async () => {
    console.log("Creando Contacto")
    try {
      const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "full_name": newContact.fullName,
          "email": newContact.email,
          "agenda_slug": "oscar-agenda",
          "address": newContact.address,
          "phone": newContact.phone
        })
      });
      if (response.status !== 201) {
        console.log("error", error);
        return;
      }
      await getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/; 
    if (value === "" || regex.test(value)) {
      handleNewContact("phone", value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newContact);
    e.target.reset();
    createContact(newContact);
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="fs-1">Add a new contact</h1>
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <p>Full name</p>
              </label>
              <input
                name="name"
                className="form-control"
                type="text"
                placeholder="Full name"
                value={newContact.fullName}
                onChange={(event) => {
                  handleNewContact("fullName", event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <p>Email</p>
              </label>
              <input
                name="email"
                className="form-control"
                type="email"
                placeholder="Enter Email"
                value={newContact.email}
                onChange={(event) => {
                  handleNewContact("email", event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <p>Phone</p>
              </label>
              <input
                name="phone"
                className="form-control"
                type="tel"
                placeholder="Enter phone"
                value={newContact.phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <p>Address</p>
              </label>
              <input
                name="address"
                className="form-control"
                type="text"
                placeholder="Enter the Address"
                value={newContact.address}
                onChange={(event) => {
                  handleNewContact("address", event.target.value);
                }}
                required
              />
            </div>
            <br></br>
            <div className="form-group mb-4">
              <input className="btn btn-warning me-2" type="submit" value="Save" />
              <Link to="/">
                <button className="btn btn-primary">Back to Agenda</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};