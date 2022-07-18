import './App.css';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import FunctionClick from './Components/FunctionClick';
import Greet from './Components/Greet';
import Message from './Components/Message';
import NameList from './Components/NameList';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
// import Toggle from './Components/Toggle';
import Welcome from './Components/Welcome';
import Stylesheet from './Components/Stylesheet';
import './Components/appStyle.css'
import styles from'./Components/appStyles.module.css'
import Inline from './Components/Inline';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h2 className={styles.success}>Success</h2>
      {/* <Greet name="React" feature="Js library" />
      <Welcome char="Spiderman" person="Peter parker" />
      <Message />
      <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Toggle /> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true}/> */}
      <Inline/>
    </div>
  );
}

export default App;

















