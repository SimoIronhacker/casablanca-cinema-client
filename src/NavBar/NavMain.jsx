// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import { Nav, Navbar, NavDropdown, Container, } from "react-bootstrap";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/image.css'
import './NavBar.css';
import ButtonB from '../Buttons/ButtonB';
import AuthContext from '../context/Auth-context';




const NavMain = () => {
	// const { user } = useContext(AuthContext);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#1F2128' }}>
			<div className="container-fluid container-lg">
				<Link className="navbar-brand custom__logo" to="/">
					Home
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item mx-3">
							<Link className="nav-link active" aria-current="page" to="/article">
                All Articles
								{/* {props.links[0]} */}
							</Link>
						</li>
						<li className="nav-item">
							<ButtonB />
						</li>
					</ul>

					{/* {user && ( */}
						<ul className="navbar-nav" style={{ marginLeft: 'auto' }}>

						<li className="nav-item">
								<Link className="nav-link" aria-current="page"  to="/article/movies">
                  Movies
									{/* {user.email} */}
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/article/music">
                  Music
									{/* {user.email} */}
								</Link>
							</li>

              

              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/article/actor">
                 Actors
									{/* {user.email} */}
								</Link>
							</li>

              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/article/culture">
                  Cultures
									{/* {user.email} */}
								</Link>
							</li>

              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/article/contact">
                  Contuct-us
									{/* {user.email} */}
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/logout">
									Logout
								</Link>
							</li>
						</ul>
					)} 
					 {/* {!user && ( */}
						<ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/signup">
									Sign up
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavMain;







// export default function NavMain() {
//   return (
      


   
    
    // export default function ButtonAppBar() {
    //   return (
    //     <Box sx={{ flexGrow: 1 }}>
    //       <AppBar position="static">
    //         <Toolbar>
    //           <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
    //             Home
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/article" sx={{ flexGrow: 1 }}>
    //             All Articles
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/article/music" sx={{ flexGrow: 1 }}>
    //             Music
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/article/movies" sx={{ flexGrow: 1 }}>
    //             Movies
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/article/actor" sx={{ flexGrow: 1 }}>
    //             Actors
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/article/culture" sx={{ flexGrow: 1 }}>
    //             Cultures
    //           </Typography>

    //           <Typography variant="h6" component={Link} to="/contact-us" sx={{ flexGrow: 1 }}>
    //             Contact
    //           </Typography>

    //           <Button color="inherit">Login</Button>
              
    //         </Toolbar>
    //       </AppBar>
    //     </Box>
    //   );
    // }
    













{/* <Navbar bg="light" variant="light">
    <Container>
    <Link exact className="link" activeClassName="is-active" to="/">Home</Link>
    <Nav className="me-auto">
      <Nav.Link href="#home">all articles</Nav.Link>
      <Nav.Link href="#features">music</Nav.Link>
      <Nav.Link href="#pricing">movies</Nav.Link>
      <Nav.Link href="#pricing">actors</Nav.Link>
      <Nav.Link href="#pricing">cultures</Nav.Link>


    </Nav>
    </Container>
  </Navbar> */}


//   );
// }





//     <nav className="navbar navbar-dark bg-dark">
//       <NavLink exact className="link" activeClassName="is-active" to="/">
//         home
//       </NavLink>
//       <NavLink className="link" activeClassName="is-active" to="/article">
//         all articles
//       </NavLink>
//       <NavLink className="link" activeClassName="is-active" to="/article/music">
//         music
//       </NavLink>
//       <NavLink
//         className="link"
//         activeClassName="is-active"
//         to="/article/movies"
//       >
//         movies
//       </NavLink>

//       <NavLink
//         exact
//         className="link"
//         activeClassName="is-active"
//         to="/article/actor"
//       >
//         actor
//       </NavLink>

//       <NavLink
//         className="link"
//         activeClassName="is-active"
//         to="/article/culture"
//       >
//         culture
//       </NavLink>
//       <NavLink className="link" activeClassName="is-active" to="/contact-us">
//         contact
//       </NavLink>
//     </nav>
//   );
// }
