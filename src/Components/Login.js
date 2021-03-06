import '../App.css';
import { Card, Grid, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Login() {

    const colortheme = createMuiTheme({
        palette: {
            primary: {
                main: '#009587',
            },
            secondary: {
                main: '#000000'
            },
            default: {
                main: '#e0e0e0'
            }
        }
    });

    return (
        <div className="bg">
            <MuiThemeProvider theme={colortheme}>
                <Grid container direction='column' alignItems='center' justify='space-around' className="body" >
                    {/* Hello */}
                    <Grid item md className="hello">Hello</Grid>


                    {/* Sign In Card */}
                    <Grid item md={12}>
                        <Card className="card" elevation={5}>
                            <Grid container direction="column" alignItems='center' justify='space-around' spacing={3}>
                                <Grid item style={{fontFamily:'arial', fontSize:'32px',fontWeight:'bolder'}}><FontAwesomeIcon icon={faUser} /> SIGN IN</Grid>
                                <hr style={{
                                    backgroundColor: '#cecece',
                                    height: .5,
                                    width: '70%',
                                }} />

                                {/* Username textfield */}
                                <Grid item> 
                                    <TextField label="Username" placeholder="Username or Email" variant="outlined" style={{ width: '260px' }} /> 
                                </Grid>

                                {/* Password textfield */}
                                <Grid item> 
                                    <TextField label="Password" placeholder="Password" variant="outlined" type="password" style={{ width: '260px' }} /> 
                                </Grid>

                                <Grid container direction="column" justify="space-between" alignItems="flex-start">
                                    {/* Remeber me */}
                                    <Grid item md={12} style={{ fontSize: "12px", paddingLeft: '60px' }}>
                                        <FormControlLabel
                                            value="rememberMe"
                                            control={<Checkbox color="primary" />}
                                            label="Stay Signed In"
                                            labelPlacement="end"
                                            size="small"
                                        />
                                    </Grid>
                                    {/* Forgot Password */}
                                    <Grid item md={12} style={{ fontSize: "12px", paddingLeft: '60px' }}>
                                        <div style={{ fontSize: "16px", textAlign: 'start', fontFamily:'arial',paddingBottom:'10px' }}>
                                            <Link to="#"> Forgot password?</Link>
                                        </div>
                                    </Grid>
                                </Grid>

                                {/* Sign in Buttton */}
                                <Grid item md>
                                    <Link to="/dashboard">
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            startIcon={<FontAwesomeIcon icon={faSignInAlt} />}
                                            style={{ width: '260px' }}
                                        >
                                            Sign In
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
    );
}

export default Login;
