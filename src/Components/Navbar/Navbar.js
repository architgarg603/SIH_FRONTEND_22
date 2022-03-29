import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import style from "./Navbar.module.scss"
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/black-logo.png";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@material-ui/core";

let pages = ["Home", "Labs", "Register Lab"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const stuId = localStorage.getItem('stu_id')
  const instId = localStorage.getItem('inst_id')
  if(!stuId && !instId)pages = []
  const onClickHandler = (name) => {
    if (name == 'Home') navigate("/")
    if (name == 'Labs') navigate("/labs")
    if (name == 'Register Lab') navigate(`/institute/dashboard`)
    // if(name == 'Home')navigate("/")
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar
      position="static"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "transparent !important",
        color: "black",
        boxShadow: "none !important",
        position: "fixed",
        zIndex:'100',
        "& *": {
          color: "black !important",
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img className="w-36 h-20" src={logo} alt="" />
            </Typography>
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => { onClickHandler(page); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img className="w-32 h-20" src={logo} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => { onClickHandler(page); handleCloseNavMenu(); }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ButtonGroup className={style.btns}>
            {stuId || instId ? <>  <Button variant="outlined" className={style.btn} onClick={()=>navigate('/login/student')}>Login as Student</Button>
              <Button variant="contained" className={style.btn1} onClick={()=>navigate('/login/institute')}>Login as Institute</Button></> :
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />}
          </ButtonGroup>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
