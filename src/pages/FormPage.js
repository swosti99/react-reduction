import Page from 'components/Page';
import React from 'react';
// import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';

import {
  Button,
  // ButtonToolbar,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  // InputGroupText,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  // FormFeedback,
  FormGroup,
  // FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const FormPage = () => {
  return (
    <Page title="Add New Test">
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>New Test</CardHeader>
            <CardBody>
              <InputGroup size="normal">
                <InputGroupAddon addonType="prepend">{'Layer'}</InputGroupAddon>
                <ButtonGroup className="mr-2">
                  <Button>Routing</Button>
                  <Button>Network</Button>
                  <Button>DNS</Button>
                  <Button>DNS+</Button>
                  <Button>Web</Button>
                  <Button>Voice</Button>
                </ButtonGroup>
              </InputGroup>
              <br />
              <InputGroup size="normal">
                <InputGroupAddon addonType="prepend">
                  {'Test Type'}
                </InputGroupAddon>
                <ButtonGroup className="mr-2">
                  <Button>Routing</Button>
                  <Button>Network</Button>
                  <Button>DNS</Button>
                  <Button>DNS+</Button>
                  <Button>Web</Button>
                  <Button>Voice</Button>
                </ButtonGroup>
              </InputGroup>
              <br />

              <Form>
                <FormGroup>
                  <Label for="exampleText">Test Name</Label>
                  <Input type="textarea" name="text" placeholder="Optional" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Text Description</Label>
                  <Input type="textarea" name="text" placeholder="Optional" />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Views Enabled for This Test</CardHeader>
            <CardBody>Network</CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Basic Configuration</CardHeader>
            <CardBody>
              <InputGroup size="normal">
                <InputGroupAddon addonType="prepend">Target</InputGroupAddon>
                <Input placeholder="e.g. google.com or 192.168.0.1" />
              </InputGroup>
              <br />
              {/* <InputGroup> */}
              {/* Protocol */}
              {/* <DropdownToggle caret>TCP</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>UDP</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>FTP</DropdownItem>
              </DropdownMenu>
              {/* </InputGroup> */}
              {/* <br /> */}
              <InputGroup>
                <InputGroupAddon addonType="prepend">Protocol</InputGroupAddon>
                <Input>
                  <DropdownMenu>
                    <DropdownItem>UDP</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>FTP</DropdownItem>
                  </DropdownMenu>
                </Input>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default FormPage;
