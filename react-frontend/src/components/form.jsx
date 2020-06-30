import React, { Component } from 'react';
import {
  // Button,
  // ButtonGroup,
  InputGroup,
  InputGroupAddon,
  // DropdownItem,
  // DropdownMenu,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';
// feature: save test settings in json file
class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layer: props ? props.layer : 'Routing',
      testType: props ? props.testType : 'Agent to Server',
      testName: '',
      testDesc: '',
      targetIP: '',
      protocol: props ? props.protocol : 'TCP',
      agent: [
        { id: 1, name: 'marco', status: 'alive' },
        { id: 2, name: 'polo', status: 'alive' },
      ],
    };
    // this.setDefaultSelections();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    const { layer, testType, protocol } = this.props;
    const testName = ' ';
    const testDesc = ' ';
    const targetIP = ' ';

    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach(item => {
      item.style.backgroundColor = '#FFFFFF';
      // item.reset();
      // console.log(item);
    });
    this.setState({ layer, testType, testName, testDesc, targetIP, protocol });
  }

  handleClick(e) {
    const className = e.target.className;
    const inputs = document.querySelectorAll(`.${className}`);
    inputs.forEach(item => {
      item.style.backgroundColor = '#FFFFFF';
    });
    e.target.style.backgroundColor = '#45b6fe';

    if (className === 'layer-class') {
      const layer = e.target.value;
      console.log(layer);
      this.setState({ layer });
    } else if (className === 'test-type-class') {
      const testType = e.target.value;
      console.log(testType);
      this.setState({ testType });
    } else if (className === 'protocol-class') {
      const protocol = e.target.value;
      console.log(protocol);
      this.setState({ protocol });
    }
  }

  handleChange(e) {
    const className = e.target.className.split(' ')[0];
    // console.log(className);
    const input = document.querySelectorAll(`.${className}`);
    // input[0].style.backgroundColor = "green";
    console.log(e.target.value);
    if (className === 'test-name-class') {
      const testName = e.target.value;
      this.setState({ testName });
    } else if (className === 'test-desc-class') {
      const testDesc = e.target.value;
      this.setState({ testDesc });
    } else if (className === 'target-class') {
      const targetIP = e.target.value;
      this.setState({ targetIP });
    }
    // console.log(e.target.innerText);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card id="NewTest">
              <CardHeader>New Test</CardHeader>
              <CardBody className="new-test-class">
                {'Layer........'}
                <input
                  className="layer-class"
                  type="button"
                  value="Routing"
                  name="Routing"
                  onClick={this.handleClick}
                />
                <input
                  className="layer-class"
                  type="button"
                  value="Network"
                  name="Network"
                  onClick={this.handleClick}
                />
                <input
                  className="layer-class"
                  type="button"
                  value="DNS"
                  name="DNS"
                  onClick={this.handleClick}
                />
                <input
                  className="layer-class"
                  type="button"
                  value="DNS+"
                  name="DNS+"
                  onClick={this.handleClick}
                />
                <input
                  className="layer-class"
                  type="button"
                  value="Web"
                  name="Web"
                  onClick={this.handleClick}
                />
                <input
                  className="layer-class"
                  type="button"
                  name="voice"
                  value="Voice"
                  onClick={this.handleClick}
                />
                <br />
                <br />
                {'Test Type '}
                <input
                  className="test-type-class"
                  type="button"
                  value="Agent to Server"
                  name="Agent-to-Server"
                  onClick={this.handleClick}
                />
                <input
                  className="test-type-class"
                  type="button"
                  value="Agent to Agent"
                  name="Agent-to-Agent"
                  onClick={this.handleClick}
                />
                <br />
                <br />
                <Form>
                  <FormGroup>
                    <Label for="exampleText">Test Name</Label>
                    <Input
                      className="test-name-class"
                      type="textarea"
                      name="test-name"
                      placeholder="Optional"
                      onChange={this.handleChange}
                    />
                    {/* </FormGroup>
                    <FormGroup> */}
                    <Label for="exampleText">Text Description</Label>
                    <Input
                      className="test-desc-class"
                      type="textarea"
                      name="test-desc"
                      placeholder="Optional"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
            <Card id="FormInputs">
              <CardHeader>Form Inputs</CardHeader>
              <CardBody>
                Layer : <h5 style={{ color: 'red' }}>{this.state.layer}</h5>
                Test Type :
                <h5 style={{ color: 'red' }}>{this.state.testType}</h5>
                Test Name :
                <h5 style={{ color: 'red' }}>{this.state.testName}</h5>
                Test Description :
                <h5 style={{ color: 'red' }}>{this.state.testDesc}</h5>
                Target IP :
                <h5 style={{ color: 'red' }}>{this.state.targetIP}</h5>
                Protocol :
                <h5 style={{ color: 'red' }}>{this.state.protocol}</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card id="BasicConfig">
              <CardHeader>Basic Configuration</CardHeader>
              <CardBody>
                <InputGroup size="normal">
                  <InputGroupAddon addonType="prepend">Target</InputGroupAddon>
                  <Input
                    className="target-class"
                    placeholder="e.g. google.com or 192.168.0.1"
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    Protocol
                  </InputGroupAddon>
                  <input
                    className="protocol-class"
                    type="button"
                    value="TCP"
                    name="TCP"
                    onClick={this.handleClick}
                  />
                  <input
                    className="protocol-class"
                    type="button"
                    value="UDP"
                    name="UDP"
                    onClick={this.handleClick}
                  />
                  <input
                    className="protocol-class"
                    type="button"
                    value="ICMP"
                    name="ICMP"
                    onClick={this.handleClick}
                  />
                  <br />
                  <br />
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl={6} lg={12} md={12}>
            <Card id="AgentInfo">
              <CardHeader>Agent Information</CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Agent Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.agent.map(a => (
                      <tr>
                        <th scope="row">{a.id}</th>
                        <td>{a.name}</td>
                        <td>{a.status}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <th scope="row">1</th>
                      <td>{this.agent[0].name}}</td>
                      <td>{this.agent[0].status}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>

                      <td>{this.agent[1].name}</td>
                      <td>{this.agent[1].status}</td>
                    </tr> */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={12} md={12}>
            {/* <Button
              as="input"
              type="reset"
              value="Reset"
              onClick={this.handleReset}
            /> */}
            <input
              className="reset-class"
              type="button"
              value="RESET"
              name="reset"
              onClick={this.handleReset}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FormPage;
