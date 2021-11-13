import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';

import './Header.css';
import logo from '../../../images/logo.png';

export default function Header() {

      // Login Button
      const {user, logout} = useAuth();


    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none',
        },

        navButton:{
          [theme.breakpoints.up('sm')]: {
            display: 'none !important',
          }
        },

        navItemContainer:{
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          }
        },

        brandName: {
          [theme.breakpoints.down('sm')]: {
            textAlign: 'right',
          },
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
          }
        },

        brandLogo: {
          width: '50px',
        },
        
        mobileNavItem: {
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#525252',
        },
        navBg: {
            backgroundColor: '#525252',
        }
    })
    const { navItem, navBg, navButton, navItemContainer, brandName, brandLogo, mobileNavItem } = useStyle();

    // Drawer Code
    const [state, setState] = React.useState(false);
    
    const list = (
        <Box
          sx={{ width: 250, height: '100%' }}
          role="presentation"
          className={mobileNavItem}
        >
          <List className={mobileNavItem}>
              <ListItem button>
                <ListItemText><Link className={mobileNavItem} to="/">Home</Link></ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText><Link className={mobileNavItem} to="/apartments">Apartments</Link></ListItemText>
              </ListItem>
              <Divider />
              {
                  user?.email?
                    <Box>
                      <ListItem button>
                        <ListItemText><Link className={mobileNavItem} to="/dashboard">Dashboard</Link></ListItemText>
                      </ListItem>
                      <Divider /> 
                    </Box>
                  :<></>
              }
              <ListItem button>
                <ListItemText><Link className={mobileNavItem} to="/faq">FAQ</Link></ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText><Link className={mobileNavItem} to="/contact">Contact&nbsp;&nbsp;</Link></ListItemText>
              </ListItem>
              <Divider />

              <ListItem button>
                {
                  user?.email?
                    <Box>
                      <ListItemText>{user.displayName}</ListItemText>
                      <Button onClick={logout} color="inherit">Logout</Button>
                    </Box>
                  :
                    <ListItemText><Link className={mobileNavItem} to="/login">Login</Link></ListItemText>
                }
              </ListItem>
              <Divider />
          </List>
        </Box>
      );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='header-body'>
          <IconButton
            className={navButton}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={brandName} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className={brandLogo} src={logo} alt="" /> Niketan
          </Typography>
          <Box className={navItemContainer}>
              <Link className={navItem} to="/"><Button color="inherit">Home</Button></Link>
              <Link className={navItem} to="/apartments"><Button color="inherit">Apartments</Button></Link>
              <Link className={navItem} to="/dashboard">
                {
                  user?.email?
                    <Button color="inherit">Dashboard</Button>
                  :<></>
                }
              </Link>
              <Link className={navItem} to="/faq"><Button color="inherit">FAQ</Button></Link>
              <Link className={navItem} to="/contact"><Button color="inherit">Contact&nbsp;&nbsp;</Button></Link>
              {
                user?.email?
                <>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;{user.displayName}</i>
                  <Button onClick={logout} color="inherit">Logout</Button>
                </>
                :
                <Link className={navItem} to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
    
      <React.Fragment>
        <Drawer
          open={state}
          onClose={()=> setState(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
  </div> 
  </>
  );
}


// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';

// const Header = () => {
//     return (
//         <>
//             <Navbar collapseOnSelect expand="lg"  variant="light">
//                 <Container>
//                     <Navbar.Toggle aria-controls="navbarId" className="" />
                    
//                     <Navbar.Collapse id="navbarId" className="custom-background">
//                         <Nav className="me-auto">
                            
//                         </Nav> 
//                         <Nav>
//                             <Nav.Link as={HashLink} to="/home" className="text-dark fs-5">Home</Nav.Link>
//                             <Nav.Link as={HashLink} to="/apartments" className="text-dark fs-5">Apartments</Nav.Link>
//                             <Nav.Link as={HashLink} to="/dashboard" className="text-dark fs-5">Dashboard</Nav.Link>
//                             <Nav.Link as={HashLink} to="/faq" className="text-dark fs-5">FAQ</Nav.Link>
//                             <Nav.Link as={HashLink} to="/contact" className="text-dark fs-5">Contact</Nav.Link>
//                             <Nav.Link as={HashLink} to="/login" className="text-dark fs-5">Login</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>

//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;