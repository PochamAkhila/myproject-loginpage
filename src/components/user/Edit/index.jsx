import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useEffect } from 'react';

const EditingData = () => {

    const [SingleData, setSingleData] = useState({});
    const Navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        getUserId();
    }, [])

    function getUserId() {
        axios.get("http://localhost:3005/accounts/" + id)
            .then(res => res)
            .then(res => { setSingleData({ ...res.data }) }
            )
        console.log(SingleData)
    }

    function editChange(e) {
        const { name, value } = e.target;
        // console.log(e.target)
        setSingleData({ ...SingleData, [name]: value });
        // console.log(e.target.value)
    }

    function handleUpdateSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:3005/accounts/" + id, SingleData)
            .then(res => res)
            .then((res) => {
                const { message } = res.data;
                if (message === "done") {
                    Navigate("/");
                    localStorage.clear()
                }
            });
    }

    return (
        <div style={{ margin: "50px 300px" }}>

            <div className="form-wrapper">
                <h1 className='text-center primary'>Update User Profile</h1>
                <Form onSubmit={handleUpdateSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={SingleData.name}
                            onChange={(e) => editChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={SingleData.email}
                            onChange={(e) => editChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={SingleData.password}
                            onChange={(e) => editChange(e)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: "42%" }} >
                        Update
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default EditingData