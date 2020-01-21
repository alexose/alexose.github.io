import { h, render } from 'preact';

const Home = ({ children, ...props }) => (
  <h1 {...props}>Home</h1>
);

export default Home;
