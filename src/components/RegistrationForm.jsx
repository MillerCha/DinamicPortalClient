import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phon:'',
        selectedClass: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to the server using a POST request
        fetch('http://example.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Registration successful:', data);
                // Add any further actions here after successful registration
            })
            .catch(error => {
                console.error('Error registering:', error);
            });
    };

    return (
        <Box
            sx={{
                margin: '0 auto',
                padding: '20px'
            }}
        >
            <h2 >
                רישום לחוגים
            </h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="שם פרטי"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="שם משפחה"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="טלפון"
                    name="phon"
                    value={formData.phon}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="מייל"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>חוג</InputLabel>
                    <Select
                        name="selectedClass"
                        value={formData.selectedClass}
                        onChange={handleInputChange}
                    >
                        <MenuItem value="Class A">Class A</MenuItem>
                        <MenuItem value="Class B">Class B</MenuItem>
                        <MenuItem value="Class C">Class C</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit">
                    תשלום
                </Button>
            </form>
        </Box>
    );
};

export default RegistrationForm;
