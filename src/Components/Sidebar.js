import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar,InputBase,Paper,Grid,Breadcrumbs,Typography } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowClose, faBars, faSearch, faHome, faTachometerAlt, faLaptop, faChevronRight, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEdit, faFileAlt, faFileCode, faListAlt } from '@fortawesome/free-regular-svg-icons'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons'


// Sidebar and Navbar


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
drawerPaper: {
    width: drawerWidth,
     backgroundColor: '#222d32',
  },
drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  //textbox
    search: {
        position: 'relative',
        backgroundColor: '#d5ebe7',
        height:'40px',
        width: '80%',
        //search bar in text box
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        color:'#213036'
    },
    
    inputInput: {
        // vertical padding + font size from searchIcon
        marginLeft:'10px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

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

export default function Sidebar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => { 
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    return (
        <MuiThemeProvider theme={colortheme}>
        {/* Navbar and Sidebar */}
            <AppBar position="fixed" elevation={0}>
                <Toolbar>
                    <IconButton color="secondary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        >
                            <FontAwesomeIcon icon={faBars} color="white" />
                    </IconButton>
                    <section style={{marginLeft:'auto'}}>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            endAdornment={ 
                                <IconButton>
                                    <FontAwesomeIcon icon={faSearch} color="#213036" size='sm' />
                                </IconButton>
                            }
                            
                        />
                    </div>
                    </section>
                    <IconButton style={{marginLeft:'30px', marginRight:'15px'}}>
                        <FontAwesomeIcon icon={faBell} color="white" size='sm' />
                    </IconButton>
                    <IconButton>
                        <FontAwesomeIcon icon={faUser} color="white" size='sm' />
                    </IconButton>
                    {/* Search bar, noti icon, user icon  */}
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}  >
                
                <div className={classes.drawerHeader} style={{ backgroundColor: '#222d32', color: 'white' }}>
                    <IconButton onClick={handleDrawerClose}>
                        <FontAwesomeIcon icon={faWindowClose} color="red" />
                    </IconButton>
                </div>
                
                <List style={{ backgroundColor: '#222d32', color: 'white' }}>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTachometerAlt} color="white"/> 
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Dashboard
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faLaptop} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            UI Elements
                        </ListItemText>
                        <ListItemIcon>
                            <FontAwesomeIcon style={{marginLeft:'35px'}} icon={faChevronRight} color="white" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChartPie} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Charts
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faEdit} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Forms
                        </ListItemText>
                        <ListItemIcon>
                            <FontAwesomeIcon style={{ marginLeft: '35px' }} icon={faChevronRight} color="white" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faListAlt} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Tables
                        </ListItemText>
                        <ListItemIcon>
                            <FontAwesomeIcon style={{ marginLeft: '35px' }} icon={faChevronRight} color="white" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faFileAlt} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Pages
                        </ListItemText>
                        <ListItemIcon>
                            <FontAwesomeIcon style={{ marginLeft: '35px' }} icon={faChevronRight} color="white" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faFileCode} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Docs
                        </ListItemText>
                    </ListItem>
                </List>

            </Drawer>
        {/* Header */}
        <div style={{
                height: '30px',
                marginBottom:'10px'
        }}></div>
        <div>
                <Paper square={false} elevation={0} style={{
                    paddingTop: '20px' 
                }}>
                    <Grid container direction="row" alignItems="center" justify="center" >
                    <Grid item md={3} sm={6} xs={6} lg={3}>
                        <Grid container direction="column" alignItems="stretch" justify="center">
                            <Grid item md style={{ fontSize: '28px', fontFamily: 'arial', fontWeight: 'bolder',}}>
                                <FontAwesomeIcon icon={faTachometerAlt}/> Dashboard
                            </Grid>
                            <Grid item md> 
                                Let's see if you can build this
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md sm xs lg>

                    </Grid>
                    <Grid item md={2} sm={6} xs={6} lg={2}>
                            <Breadcrumbs>
                                <Link><FontAwesomeIcon icon={ faHome}/></Link>
                                <Link><Typography color="textPrimary">Dashboard</Typography></Link>
                            </Breadcrumbs>
                    </Grid>
                </Grid> 
            </Paper>
        </div>

        <div style={{
            height: '10px'
        }}></div>
        
        

        </MuiThemeProvider>
    )
}
