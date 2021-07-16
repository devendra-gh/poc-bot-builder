import React, { useState } from "react";
import { connect } from "react-redux";

import { isLoading } from "../../redux/actions";

import DraggableComponent from "../../components/DraggableComponent";
import Preview from "../../components/Preview";
import Sidebar from "../../components/Sidebar";

const Home = ({ isLoading }: any) => {
  const [components, setComponents] = useState([]);

  return (
    <main className="wrapper__main">
      <div className="wrapper__canvas-container">
        <Preview components={components} setComponents={setComponents} />
        <Sidebar />
      </div>
      <div className="wrapper__design-menu">
        <div className="wrapper__design-menu__inner">
          <div className="wrapper__design-menu__holder">
            <div className="wrapper__design-menu__scroll">
              <div className="wrapper__design-menu__step-menu">
                <DraggableComponent />
                <DraggableComponent />
                <DraggableComponent />
                <DraggableComponent />
                <DraggableComponent />
                <DraggableComponent />
                <DraggableComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    isLoading: () => dispatch(isLoading(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
