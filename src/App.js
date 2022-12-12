
import './App.css'
//import ClassCounter from './components/ClassCounter';
/*import Welcome from './components/Welcome';
//import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ChildComponent from './components/ChildComponent';
//import {Alert} from 'bootstrap';*/
//import Greet from './components/Greet';
//import Welcome from './components/Welcome';
import HeadLine from './components/HeadLine';
import Paragraph from './components/Paragraph';
import Subtitiles from './components/Subtitiles';
import Button from './components/Button';
import { Container } from 'reactstrap';
import Message from './components/Message';
//import { Alert } from 'bootstrap';


function App() {
  return (
    <div className="App">
 {/*   <Welcome name="Global Placement"/>*/}
    {/* <Greet name="Hello all students" msg="Here you can find your dream job "/>
     <Hello/>
     <Message/>
     <Counter/>
     <ChildComponent name="Students">
       <p>Search for your suitable jobs</p>
       </ChildComponent>
      <ChildComponent name="Plcement Schedule">
        <button>Click Here</button>
  </ChildComponent>*/}
  {/* <Greet name="Students"/>
  {/*<Welcome name="Hello" msg="Welcome"/>*/}
   {/*<ClassCounter/>*/}
   {/*<Greet name="Pooja"/>
    <Welcome name="Dear Students" cls="TY"/>
   */}
   <HeadLine/>
   <Subtitiles/>
   <Paragraph/>
   <Button
    color="primary"
  >
    Click Me
  </Button>
   <Container/>
   
      <h2> Explore it !!!</h2>
   <ul>
     <h3><li> Login </li>
         <li> Search Here</li>
         <li> Profile</li>
         <li>Placement Schedule</li></h3>
   </ul>
   <a
      className="alert-link"
      href="https://reactstrap.github.io/?path=/docs/components-button--button"
      rel="noreferrer"
      target="_blank">
      Home   </a>
      <br>
      </br>
      <a
      className="alert-link"
      href="https://example.com"
      rel="noreferrer"
      target="_blank">
      Our Work   </a>
      <br>
      </br>

  
   <a
      className="alert-link"
      href="https://tnsindiafoundation.org/"
      rel="noreferrer"
      target="_blank">
      About us    </a>
  
   <Message/>
 {/* <Alert/>*/}




  
    
    
      


    </div>
  );
}

export default App;
