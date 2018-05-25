import React, { Component } from "react";
import { Layout } from "./ui/layout";
import { Posts } from "./posts";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-xs-6">
            <Posts />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
