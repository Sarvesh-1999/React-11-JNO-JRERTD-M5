import React, { Component } from "react";

export default class ErrorBoundaryCBC extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error){
    return {}
  }

  render() {
    return <div>ErrorBoundaryCBC</div>;
  }
}
