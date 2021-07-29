import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IssueType from "./pages/IssueType";
import Hardware from "./pages/hardware";
import Software from "./pages/software";
import Navbar from "./components/Navbar/Navbar";
import MoreAboutIssue from "./pages/moreAboutIssue";
import Deviceinfo from "./pages/deviceinfo";
import Customerinfo from "./pages/customerinfo";
import Reviewinfo from "./pages/reviewinfo";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/issue-type">
            <IssueType />
          </Route>
          <Route path="/issue-type-hardware">
            <Hardware />
          </Route>
          <Route path="/issue-type-software">
            <Software />
          </Route>
          <Route path="/issue-type-more">
            <MoreAboutIssue />
          </Route>
          <Route path="/device-info">
            <Deviceinfo />
          </Route>
          <Route path="/customer-info">
            <Customerinfo />
          </Route>
          <Route path="/review-info">
            <Reviewinfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
