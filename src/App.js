import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  //   const [data, setData] = useState([]);
  //   const [newData, setNewData] = useState("");
  //   const handleSubmitData = () => {
  //     setData([...data, newData]);
  //     setNewData("");
  //   };
  //   const handleDelete = (i) => {
  //     console.log(i);
  //     const frontData = data.slice(0, i);
  //     const backData = data.slice(i + 1, data.length);
  //     const trueData = frontData.concat(backData);
  //     setData(trueData);
  //   };

  return (
    <Router>
      <Header />
      <div className="tabs is-fullwidth">
        <ul>
          <li>
            <Link className="has-text-centered is-size-4" to="/">
              <span>Regist</span>
            </Link>
          </li>
          <li>
            <Link className="has-text-centered is-size-4" to="/List">
              <span>List</span>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <AddTask />
        </Route>
        <Route exact path="/list">
          <TaskList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
