import './App.css';
import React from 'react';
import { useState } from 'react';
import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';
// import Marvel from './Components/Marvel';
// import ErrorBoundary from './Components/ErrorBoundary';
// import Input from './Components/Input';
// import FRParentinput from './Components/FRParentinput';
// import PortalDemo from './Components/PortalDemo';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import FunctionClick from './Components/FunctionClick';
// import Greet from './Components/Greet';
// import Message from './Components/Message';
// import NameList from './Components/NameList';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// // import Toggle from './Components/Toggle';
// import Welcome from './Components/Welcome';
// import Stylesheet from './Components/Stylesheet';
// import './Components/appStyle.css'
// // import styles from './Components/appStyles.module.css'
// import Inline from './Components/Inline';
// import Form from './Components/Form';
// import LifeCycleA from './Components/LifeCycleA';
// import Tables from './Components/Tables';
// import ParentComp from './Components/ParentComp';

// import Menu from './Components/Menu';

// import MemoComp from './Components/MemoComp';
// import RefsDemo from './Components/RefsDemo';
// import StarRating from './Components/StarRating';
function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title},${color}`);
  }


  return (

    <div className="App" id='textBox'>
      <form>
        <input

          type="text"

        />
        <input type="text"
          value={setTitle}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          placeholder='color title...'
        />
        <input
          value={setColor}
          type="color"
          onChange={(event) => {
            setColor(event.target.value)
          }}
        />
        <button>ADD</button>
      </form>
      {/* <h1 className='error'>Error</h1>
      <h2 className={styles.success}>Success</h2> */}
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
      {/* <Inline/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <Tables/> */}
      {/* <ParentComp/> */}
      {/* <Menu recipes={data} /> */}
      {/* <RefsDemo/> */}

      {/* <StarRating/> */}
      {/* <Input /> */}
      {/* <FRParentinput /> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Marvel character="BlackPanther" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Marvel character="IronMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Marvel character="Captain Marvel" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Marvel character="Thanos" />
      </ErrorBoundary> */}
      {/* <ClickCounter />
      <HoverCount /> */}
    </div>
  )
}

export default App;

















