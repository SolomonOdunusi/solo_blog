import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from './BlogDetail';
import Err404 from './Err404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route  path="*">
              <Err404 />
            </Route>
          </Switch>
        </div>
      </div>
     </Router>
  );
}

export default App;
