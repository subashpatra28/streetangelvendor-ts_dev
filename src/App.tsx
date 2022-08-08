import Side from "./app/components/Sidebar&Navbar/index";
import "./App.css";
import { Scrollbars } from "react-custom-scrollbars";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "./app/fonts/icomoonf33b.ttf";
import { toast } from "react-toastify";
import Login from "./app/components/Navbar/login/index";
toast.configure({
  position: "top-right",
  autoClose: 1700,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
});

function App(props: $TSFixMe) {
  return (
    <div className="App">
      <Scrollbars>
        <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Side />
          </Route>
        </Switch>
        </Router>
      </Scrollbars>
    </div>
  );
}

const mapStateToProps = (state: $TSFixMe) => ({
  isLoading: state.generalSlice.isLoading,
});

export default connect(mapStateToProps)(App);
