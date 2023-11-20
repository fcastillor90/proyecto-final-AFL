import React from "react";
import { Link } from "react-router-dom";
import navbarBrandImg from "../../img/navbar-brand-img.png";
// MUI:
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: `rgba(255, 255, 255, 0.1)`,
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.2),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export default function PrimarySearchAppBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [countryAnchorEl, setCountryAnchorEl] = React.useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const isCountryMenuOpen = Boolean(countryAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleCountryMenuOpen = (event) => {
		setCountryAnchorEl(event.currentTarget);
	};

	const handleCountryMenuClose = () => {
		setCountryAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const countryMenuId = 'country-menu';

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const renderMobileMenu = (
		<Menu
			anchorEl={countryAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={countryMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isCountryMenuOpen}
			onClose={handleCountryMenuClose}
		>
			{/* Add your country items here */}
			<MenuItem onClick={handleCountryMenuClose}>Pais 1</MenuItem>
			<MenuItem onClick={handleCountryMenuClose}>Pais 2</MenuItem>
			<MenuItem onClick={handleCountryMenuClose}>Pais 3</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: 'rgb(0, 0, 0)' }}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Link to="/">
							<span className="navbar-brand mb-0 h1"><img src={navbarBrandImg} style={{ width: '130px' }} alt="Logo" /></span>
						</Link>
					</Typography>

					{/* Country menu button */}
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open country menu"
						onClick={handleCountryMenuOpen}
						sx={{ mr: 1, ml: 2 }}
					>
						<PublicIcon />
					</IconButton>

					{/* Search bar */}
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Buscar empresa…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

					{/* Profile and notification icons */}
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Link to="/formOptions">
							<button type="button" variant="contained" style={{ backgroundColor: '#4f89ee', color: 'black', borderRadius: '20px', marginTop: '5px', padding: '5px' }}>
								Subir salario
							</button>
						</Link>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
}


