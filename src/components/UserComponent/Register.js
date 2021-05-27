import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/Styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { AiFillHome } from "react-icons/ai";

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';


//Styling by material UI
const useStyles = (theme) =>
(
    {
        root: { height: '100vh' },

        image: {
            backgroundImage: 'url(https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/10/full/1604950621-8383.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },

        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },

        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },

        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    });

    class Register extends Component {

        constructor(props) {
            super(props);
            this.state = {
                userName: "",
                contact: "",
                emailId:"",
                password: ""
            };

            this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
            this.changeContactHandler = this.changeContactHandler.bind(this);
            this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
            this.changePasswordHandler = this.changePasswordHandler.bind(this);
            this.Home=this.Home.bind(this);

        }
        changeUserNameHandler = (event) => {
            this.setState({ userName: event.target.value });
        };

        changeContactHandler = (event) => {
            this.setState({ contact: event.target.value });
        };

        changeEmailIdHandler = (event) => {
            this.setState({ emailId: event.target.value });
        };
    
        changePasswordHandler = (event) => {
            this.setState({ password: event.target.value });
        };
        Home(){
            this.props.history.push('/home');
        }

        Signup = async (e) => {

            e.preventDefault();
            alert('in signup');
            let user = {userName: this.state.userName, contact: this.state.contact, 
                emailId: this.state.emailId, password: this.state.password };
           
    
            /*let userName = this.state.userName;
            let contact = this.state.contact;
            let password = this.state.password;*/
    
            await axios.post('http://localhost:8080/covidVaccination/users/addUser', user).then((response) => {
                    alert(response.data.userName + " " + " " + response.data.userId);
                });
                this.props.history.push('/')
            }

        handler = () => {
            this.props.history.push('/');
        }

        render() {
            const { classes } = this.props;
    
            return (
                <div>
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                            <Grid item xs={false} sm={4} md={7} className={classes.image} />
                                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                                <div className='BtnHome'>
                        <AiFillHome size={62} color='gray' onClick={this.Home}></AiFillHome>
                        </div>
    
                                <div className={classes.paper}>
                                    <Avatar className={classes.avatar} src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                        alt="profile-img" />
    
                                    <Typography component="h1" variant="h5">Sign Up</Typography>
    
                                    <form className={classes.form} noValidate>
                                        <TextField
                                            required
                                            name="userName"
                                            label="User Name"
                                            onChange={this.changeUserNameHandler}
                                            fullWidth
                                            autoComplete="given-name"
                                            margin="normal"
                                            autoFocus
                                        />
    
                                        <TextField
                                            required
                                            name="contact"
                                            label="Contact"
                                            onChange={this.changeContactHandler}
                                            fullWidth
                                            margin="normal"
                                            autoFocus
                                        />

                                        <TextField
                                            required
                                            name="emailId"
                                            label="Email-Id"
                                            onChange={this.changeEmailIdHandler}
                                            fullWidth
                                            margin="normal"
                                            autoFocus
                                        />

                                        <TextField
                                            margin="normal" required fullWidth
                                            name="password" label="Password" type="password"
                                            onChange={this.changePasswordHandler}
                                        />
    
    
                                        <Button
                                            type="submit" fullWidth variant="contained"
                                            color="secondary" className={classes.submit} onClick={this.Signup}>
                                            Register
                                        </Button>
    
    
                                        <Grid item>
                                            <Link href="http://localhost:3000/login" variant="body2">
                                                {"Already have account? Login"}
                                            </Link>
                                        </Grid>
    
                                        <Box mt={5}>
                                        </Box>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                </div>
            )
        }
    };
    Register.propTypes = {
        classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles, { withTheme: true })(Register);