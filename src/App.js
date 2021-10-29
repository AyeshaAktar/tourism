import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import BookNow from "./pages/BookNow/BookNow";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/bookNow/:id">
            <BookNow></BookNow>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
