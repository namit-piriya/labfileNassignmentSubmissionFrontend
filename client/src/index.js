import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import TeacherDashboard from "./container/TeacherDashboard.jsx";
import StudentDashboard from "./container/StudentDashboard.jsx";
import HODDashboard from "./container/HODDashboard.jsx";

import * as serviceWorker from "./serviceWorker";

import authReducer from "./store/reducers/authReducers";
import signupReducer from "./store/reducers/signupReducers";

import App from "./App.jsx";
import {createStore, combineReducers} from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
    < Provider
        store={store}>
      < BrowserRouter>
        < Route
            path="/">
          < App / >
          < /Route>
          < Route
              path="/teacher/dashboard"
              component={TeacherDashboard}
          />
          < Route
              path="/hod/dashboard"
              component={HODDashboard}
          />
          < Route
              path="/student/dashboard"
              component={StudentDashboard}
          />
              {/* <Route path='path' component={component}/> */
              }
              {/* <Route path='path' component={component}/> */
              }
              {/* <Route path='path' component={component}/> */
              }
          <
            /BrowserRouter>
            < /Provider>,
              document.getElementById("root")
              )
              ;

              // If you want your app to work offline and load faster, you can change
              // unregister() to register() below. Note this comes with some pitfalls.
              // Learn more about service workers: https://bit.ly/CRA-PWA
              serviceWorker.unregister();
