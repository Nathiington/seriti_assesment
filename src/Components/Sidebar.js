import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar,InputBase } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowClose, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles'


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
            <AppBar position="fixed" >
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
                            <FontAwesomeIcon icon={faUser} color="white"/> 
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Dashboard
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            UI Elements
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Charts
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Tables
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Pages
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} color="white" />
                        </ListItemIcon>
                        <ListItemText color="primary">
                            Docs
                        </ListItemText>
                    </ListItem>
                </List>

            </Drawer>
        </MuiThemeProvider>
    )
}
