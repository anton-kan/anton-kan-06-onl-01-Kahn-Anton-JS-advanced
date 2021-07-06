import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import store from './store';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
