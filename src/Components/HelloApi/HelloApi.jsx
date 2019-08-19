import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { callGetAPI } from "./State/action";

class HelloApi extends Component {
  functionCall = () => {
    const link = "https://jsonplaceholder.typicode.com/posts";
    const { callGetAPI } = this.props;
    callGetAPI(link);
  };
  render() {
    const { data } = this.props;
    return (
      <>
        <div>Hi API CAll</div>
        <div onClick={this.functionCall}>API data</div>
        {data && data.map(item => <div key={item.id}>{item.title}</div>)}
      </>
    );
  }
}

const mapStateToProps = ({ ApiReducer }) => {
  console.log("In Api Call mapStateToProps", ApiReducer);
  const { success, error, hasError, data, apiType } = ApiReducer;
  return {
    success,
    error,
    hasError,
    data,
    apiType
  };
};

HelloApi.defaultProps = {
  data: []
};

HelloApi.propTypes = {
  data: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    callGetAPI
  }
)(HelloApi);
