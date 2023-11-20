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



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="pseudo-nav" style={{ color: 'white ' }}>
				<h1>Unlocking IT Salaries</h1>
				<p>
					<img src={rigoImageUrl} />
				</p>

				<Link to="/formOptions">
					<button type="button">Admin View</button>
				</Link>

				<Link to="/formOptions">
					<button type="button">Charge Company</button>
				</Link>

			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>

			<BasicTabs />

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};




function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

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
					<Typography>{children}</Typography>
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
		<div className="ms-5">
			<Box sx={{ width: '100%', margin: 'auto' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Item One" {...a11yProps(0)} />
						<Tab label="Item Two" {...a11yProps(1)} />
						<Tab label="Item Three" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					Item One
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					Item Two
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					Item Three
				</CustomTabPanel>
			</Box>
		</div>
	);
}