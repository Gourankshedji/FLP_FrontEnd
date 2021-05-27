import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { AiFillHome } from "react-icons/ai";

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';





const useStyles = (theme) =>
(
    {
        root: { height: '100vh' },

        image: {
            backgroundImage: 'url(https://images.financialexpress.com/2019/07/Doctor-day-660.jpg)',
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

        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },

        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },

        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    });


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.Home=this.Home.bind(this);

    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    };

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    };
    Home(){
        this.props.history.push('/home');
    }

    handler = (event) => {
        event.preventDefault();
        console.log(event);
        this.props.history.push('/appointment')
    }

    Login = async (e) => {

        e.preventDefault();
        alert('in login');

        let userName = this.state.userName;
        let password = this.state.password;

        await axios.get('http://localhost:8080/covidVaccination/users/validateUser', { params: { userName, password } }).then((response) => {
                alert(response.data.userName + " " + " " + response.data.userId);
            });
            this.props.history.push('/')
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
    
                                <Typography component="h1" variant="h5">Sign in</Typography>
    
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
                                        margin="normal" required fullWidth
                                        name="password" label="Password" type="password"
                                        onChange={this.changePasswordHandler}
                                    />
    
                                    
                                    <Button
                                        type="submit" fullWidth variant="contained"
                                        color="secondary" className={classes.submit} onClick={this.Login}
                                    >
                                        Login
                                        </Button>
    
    
                                    <Grid item>
                                        <Link href="http://localhost:3000/Register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
    
                                    <Box mt={5}>
    
                                    </Box>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            );
        }

};

export default withStyles(useStyles, { withTheme: true })(Login);