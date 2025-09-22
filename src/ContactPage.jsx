import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Grid
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const green = '#2e7d32';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        thoughts: ''
    });

    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nThoughts: ${formData.thoughts}`);
        setFormData({ name: '', email: '', thoughts: '' });
    };

    const paperSx = {
        borderRadius: 3,
        border: `2px solid ${green}`,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 400,
        backgroundColor: '#fff',
        transition: 'background-color 0.3s',
    };

    const hoverPaperSx = {
        ...paperSx,
        '&:hover': {
            backgroundColor: green,
            color: '#fff',
            '& .MuiTypography-root, & .MuiInputBase-root, & .MuiButton-root': {
                color: '#fff',
                borderColor: '#fff',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
            },
            '& input, & textarea': {
                color: '#fff',
            }
        }
    };

    const textFieldSx = {
        '& label.Mui-focused': {
            color: green,
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: green,
            },
        },
    };

    return (
        <Box sx={{ pt: 10, pb: 5, backgroundColor: '#fff', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="stretch"
                    justifyContent="center"
                >
                    {/* Left: Form */}
                    <Grid item xs={12} sm={10} md={4}>
                        <Paper
                            elevation={3}
                            sx={{ ...paperSx, p: 4 }}
                            data-aos="zoom-in"
                            data-aos-duration="800"
                        >
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                                sx={{ color: green }}
                                data-aos="fade-down"
                                data-aos-duration="1000"
                            >
                                Contact Us
                            </Typography>
                            <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    sx={textFieldSx}
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    sx={textFieldSx}
                                    data-aos="fade-left"
                                    data-aos-duration="700"
                                />
                                <TextField
                                    fullWidth
                                    label="Your Thoughts"
                                    name="thoughts"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.thoughts}
                                    onChange={handleChange}
                                    required
                                    sx={textFieldSx}
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                />
                                <Box sx={{ flexGrow: 1 }} />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: green,
                                        '&:hover': { backgroundColor: '#27642b' }
                                    }}
                                    fullWidth
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                >
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>

                    {/* Center: Contact Info */}
                    <Grid item xs={12} sm={10} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                ...hoverPaperSx,
                                p: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <Typography variant="h5" sx={{ color: green }} gutterBottom>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Address:</strong> 123 Main St, Your City, Country
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Email:</strong> info@yourcompany.com
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Phone:</strong> +1 234 567 890
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Right: Google Map */}
                    <Grid item xs={12} sm={10} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                ...hoverPaperSx,
                                p: 0,
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 350
                            }}
                            data-aos="fade-left"
                            data-aos-duration="900"
                        >
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.81627974202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7b1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactPage;
