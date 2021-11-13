import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddAnApartment from '../AddAnApartment/AddAnApartment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageApartments from '../ManageApartments/ManageApartments';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageAllBookings from '../ManageAllOrders/ManageAllBookings';
import ClientRoute from '../../Login/ClientRoute/ClientRoute';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
const drawerWidth = 240;

function Dashboard(props) {

  const {user, admin, logout} = useAuth();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
            <ListItem button>
                <Link to="/">Home</Link>
            </ListItem>
            <Divider />
            <ListItem button>
                <Link to="/apartments">Apartments</Link>
            </ListItem>
            <Divider />

            { admin &&
              <Box>
              
                  <ListItem button>
                      <Link to={`${url}/manageAllBookings`}>Manage All Bookings</Link>
                  </ListItem>
                  <Divider />

                  <ListItem button>
                      <Link to={`${url}/addAnApartment`}>Add An Apartment</Link>
                  </ListItem>
                  <Divider />

                  <ListItem button>
                      <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                  </ListItem>
                  <Divider />

                  <ListItem button>
                      <Link to={`${url}/manageApartments`}>Manage Apartments</Link>
                  </ListItem>
                  <Divider />
              </Box>
            }

            { !admin &&
              <Box>
                <ListItem button>
                  <Link to={`${url}`}>Dashboard</Link>
                </ListItem>
                <Divider />

                <ListItem button>
                    <Link to={`${url}/myOrders`}>My Bookings</Link>
                </ListItem>
                <Divider />

                <ListItem button>
                    <Link to={`${url}/pay`}>Pay</Link>
                </ListItem>
                <Divider />

                <ListItem button>
                    <Link to={`${url}/review`}>Review</Link>
                </ListItem>
                <Divider />
              </Box>
            }
            <ListItem button>
                <ListItemText onClick={logout} color="inherit">Logout</ListItemText>
            </ListItem>
            <Divider />
      </List>      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#2a2e32'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Niketan's Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{p: 3, margin: 'auto', width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Switch>
                <PrivateRoute exact path={path}>
                    <DashboardHome></DashboardHome>
                </PrivateRoute>
                <ClientRoute exact path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </ClientRoute>
                <PrivateRoute exact path={`${path}/manageAllBookings`}>
                    <ManageAllBookings></ManageAllBookings>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/addAnApartment`}>
                    <AddAnApartment></AddAnApartment>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/manageApartments`}>
                    <ManageApartments></ManageApartments>
                </PrivateRoute>
                <ClientRoute exact path={`${path}/pay`}>
                    <Pay></Pay>
                </ClientRoute>
                <ClientRoute exact path={`${path}/review`}>
                    <Review></Review>
                </ClientRoute>

            </Switch>
        </Box>
        <Box style={{width: '100%', margin:'0', padding:'0'}}>
            <Footer/>
        </Box>
      </Box>
      
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
