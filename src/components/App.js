import { connect } from "react-redux";
import { useEffect } from "react";
import { sampleAction } from "../actions";

const App = ({ data, sampleAction }) => {
  useEffect(() => {
    sampleAction();
  }, [sampleAction]);
  if (data) {
    return `hello world ${data.title}`;
  }
  return " hellooio";
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { sampleAction })(App);
