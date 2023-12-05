import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Editcontact = () => {
    const { store } = useContext(Context);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    const fullNameHandler = (e) => {
        setFullName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const addressHandler = (e) => {
        setAddress(e.target.value);
    };

    const phoneHandler = (e) => {
        const cleanedValue = e.target.value.replace(/\D/g, '');
        setPhone(cleanedValue);
    };

    const createContact = async (contact) => {
        try {
            const response = await fetch("https://playground.4geeks.com/apis/fake/contact/"+ params.contactid, {
                method: "PUT",
                body: JSON.stringify({
                    full_name: `${fullName}`,
                    email: `${email}`,
                    agenda_slug: "oscar-agenda",
                    address: `${address}`,
                    phone: `${phone}`
                }),
                headers: { 'Content-type': 'application/json' }
            });
            if (response.status !==201) {
                console.log('contacto creado');
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="mt-5">
                <h1 className="fs-1 fw-bolder mb-3 text-start">Edit Contact</h1>
                <div className="container">
                    <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        //console.log(newContact);
                        e.target.reset();
                        createContact();
                    }}>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label className="text-start"><p>Full name</p></label>
                                <input
                                    name="name"
                                    className="form-control"
                                    type="text"
                                    placeholder="Full name"
                                    id="full_name"
                                    onChange={fullNameHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label className="text-start"><p>Email</p></label>
                                <input
                                    name="email"
                                    className="form-control"
                                    type="email"
                                    placeholder="Enter Email"
                                    id="fullemail"
                                    onChange={emailHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label className="text-start"><p>Phone</p></label>
                                <input
                                    name="phone"
                                    className="form-control"
                                    type="tel"
                                    pattern="[0-9]*"
                                    placeholder="Enter phone"
                                    id="fullphone"
                                    onChange={phoneHandler}
                                    value={phone}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label className="text-start"><p>Address</p></label>
                                <input
                                    name="address"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter the Address"
                                    id="fullname"
                                    onChange={addressHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <input className="btn btn-warning me-2" type="submit" value="Save" />
                            <Link to="/">
                                <button className="btn btn-primary"> Back to Home </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};