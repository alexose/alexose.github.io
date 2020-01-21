import Router from 'preact-router';
import { h, render } from 'preact';

import Home from './Home';
import Projects from './Projects';
import Writings from './Writings';

const Main = () => (
	<Router>
		<Home path="/" />
		<Projects path="/projects" />
		<Writings path="/writings" />
	</Router>
);

export default Main;
