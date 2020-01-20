import { h, render } from 'preact';
import Jumbotron from './Components/Jumbotron';

console.log(Jumbotron);

render((
  <div id="foo">
    <Jumbotron>Alexander Ose</Jumbotron>
    <button onClick={ e => alert("hi!") }>Click Me</button>
  </div>
), document.body);
