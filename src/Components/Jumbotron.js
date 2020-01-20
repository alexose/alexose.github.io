import { h, render } from 'preact';

const Jumbotron = ({ children, ...props }) => (
    <h1 {...props}>{ children }</h1>
);

export default Jumbotron;
