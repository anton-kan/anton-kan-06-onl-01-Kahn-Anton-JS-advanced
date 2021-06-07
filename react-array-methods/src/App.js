import './App.css';
import MethodsListsContainer from './MethodsListsContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Array Methods</h1>
      </header>
      <main>
        <div className="App-container">
          <MethodsListsContainer />
        </div>
      </main>
    </div>
  );
};

export default App;
