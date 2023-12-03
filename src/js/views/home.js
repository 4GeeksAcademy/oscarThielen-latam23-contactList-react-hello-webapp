import React, { useEffect, useState } from "react";
import { Card } from "../component/ContactCard.jsx";

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/oscar-agenda");
      if (response.status !== 200) {
        console.log("Ha ocurrido un error", error);
        return;
      }
      const body = await response.json();
      console.log(body);
      setContacts(body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status !== 201) {
        console.log("error", error);
        return;
      }
      // Vuelve a obtener los contactos después de eliminar uno
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {contacts.map((item) => (
        <Card
          id={item.id}
          name={item.full_name}
          address={item.address}
          email={item.email}
          phone={item.phone}
          key={item.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};