import './App.css';
import CustomLayout from './containers/layout.js';
import LogList from './containers/LogList.js';
import About from './components/About.js'

function App() {
  return (
    <div className="App">
        <CustomLayout>
        <About />
          <LogList/>
        </CustomLayout>
    </div>
  );
}

export default App;
