import './App.css';
import MyFirstComponenet from './components/learning-examples/FirstComponent';
import MySecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import FourthComponenet from './components/learning-examples/FourthComponent';

function App() {
  return (
    <div className="App">
      <h1>hello welcome to TODO app</h1>
        <MyFirstComponenet data = "shubham" value = "my name is js"/>
        <MySecondComponent/>
        <ThirdComponent/>
        <FourthComponenet/>
      </div>
  );
}

export default App;
