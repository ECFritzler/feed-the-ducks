import './App.css';
import CustomLayout from './containers/layout.js'
import LogList from './containers/LogList.js'

function App() {
  return (
    <div className="App">
        <CustomLayout/>
          <LogList />

    </div>
  );
}

export default App;
