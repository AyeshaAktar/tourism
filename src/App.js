import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import BookNow from "./pages/BookNow/BookNow";
import AuthProvider from "./Context/AuthProvider";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AddCamping from "./pages/AddCamping/AddCamping";
import ManageBooking from "./pages/ManageBooking/ManageBooking";
import MyBooking from "./pages/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/manageBooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/bookNow/:id">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route path="/addCamping">
              <AddCamping></AddCamping>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
