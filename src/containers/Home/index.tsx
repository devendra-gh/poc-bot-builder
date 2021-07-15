import React, { useState } from "react";
import { connect } from "react-redux";

import { isLoading } from "../../redux/actions";

import DraggableComponent from "../../components/DraggableComponent";
import Preview from "../../components/Preview";

const Home = ({ isLoading }: any) => {
  const [components, setComponents] = useState([]);

  return (
    <main className="main">
      <div>
        <DraggableComponent />
        <DraggableComponent bg="red" />
      </div>
      <Preview components={components} setComponents={setComponents} />
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
