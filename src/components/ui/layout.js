import React from "react";
import { Spiner } from "./spiner";
import { connect } from "react-redux";

const LayoutComponent = ({ loading, children }) => (
  <div>
    <Spiner show={loading} />
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            test
          </a>
        </div>
      </div>
    </div>
    <div className="container">{children}</div>
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Footer</span>
      </div>
    </footer>
  </div>
);

const mapStateToProps = state => ({
  loading: state.ui.loading
});

export const Layout = connect(mapStateToProps)(LayoutComponent);
