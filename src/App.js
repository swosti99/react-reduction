import React, { Component } from "react";
import FormPage from "./components/form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layer: "DNS",
      testType: "Agent to Agent",
      protocol: "",
      // basicConfig: {
      //   target: "",
      //   protocol: [
      //     { id: 1, selected: true },
      //     { id: 2, selected: false },
      //     { id: 3, selected: false },
      //   ],
      //   probing: [
      //     { id: 1, selected: true },
      //     { id: 2, selected: false },
      //     { id: 3, selected: false },
      //   ],
      //   pathTrace: false,
      // interval: { default: defaultInterval },
      // agents: { defaultAgents },
      // alerts: { enable: { defaultEnable }, rules: { defaultRuleSelect } },
      // },
    };
  }
  render() {
    const { layer, testType, protocol } = this.state;
    return <FormPage layer={layer} testType={testType} protocol={protocol} />;
  }
}

export default App;
