import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
//MUI:
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CompanyCard from "../component/companyCard";
import HorizontalBars from "../component/graficos";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="pseudo-nav" style={{ color: 'white ', paddingBottom: '20px' }}>
				<h1 style={{ paddingTop: '30px', paddingBottom: '30px' }}>Unlocking IT Salaries</h1>

				<Link to="/adminView">
					<button type="button" style={{ padding: '30px', marginRight: '15px', backgroundColor: 'black', color: 'white' }}>Admin View</button>
				</Link>

				<Link to="/chargeCompany">
					<button type="button" style={{ padding: '30px', marginRight: '15px', backgroundColor: 'black', color: 'white' }}>Charge Company</button>
				</Link>

				<Link to="/login">
					<button type="button" style={{ padding: '30px', marginRight: '15px', backgroundColor: 'black', color: 'white' }}>Login</button>
				</Link>

				<Link to="/register">
					<button type="button" style={{ padding: '30px', backgroundColor: 'black', color: 'white' }}>Register</button>
				</Link>

			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>

			<BasicTabs />

			<p>graficos</p>
			
			<HorizontalBars />
		</div>
	);
};




function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	// data de ejemplo
	const cardData = [
		{ companyName: 'Compañia 1', average: 15, entries: 30 },
		{ companyName: 'Compañia 2', average: 10, entries: 25 },
		{ companyName: 'Compañia 3', average: 12, entries: 95 },
		{ companyName: 'Compañia 4', average: 9, entries: 110 },
		{ companyName: 'Compañia 5', average: 7, entries: 3 },
		{ companyName: 'Compañia 6', average: 11, entries: 9 },
		{ companyName: 'Compañia 7', average: 12, entries: 19 },
		{ companyName: 'Compañia 8', average: 11, entries: 25 },
		// agregar mas cards
	];


	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>
                        {/* Map through the card data and render CompanyCard */}
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {cardData.map((card, index) => (
                                <CompanyCard key={index} {...card} />
                            ))}
                        </div>
                    </Typography>
                </Box>
            )}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="mx-auto w-75">
			<Box sx={{ width: '100%', margin: 'auto' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Categoria Rol 1" {...a11yProps(0)} />
						<Tab label="Categoria Rol 2" {...a11yProps(1)} />
						<Tab label="Categoria Rol 3" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					Categoria Rol 1
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					Categoria Rol 2
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					Categoria Rol 3
				</CustomTabPanel>
			</Box>
		</div>
	);
}