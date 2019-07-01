import * as React from 'react';

import { testService } from '../services/tests';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import TestContainer from './Test';

export default class Base extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: [],
      currentTest: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    testService.fetchTests().then(response => {
      this.setState({
        tests: response.data
      })
    });
  }

  handleClick(test) {
    this.setState({
      currentTest: test
    })
  }

  handleBack() {
    this.setState({
      currentTest: null
    })
  }

  render() {
    const {
      tests,
      currentTest
    } = this.state;

    if (currentTest) {
      return (
        <TestContainer
          test={currentTest}
          handleBack={this.handleBack}
        />
      )
    }

    return tests.map(test => (
      <Card style={{margin: '10px'}} key={test.testID}>
        <Card.Body>
          <Card.Title>{test.testName}</Card.Title>
          <Card.Text>
            Questions count: {test.questions.length}
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() => this.handleClick(test)}
          >
            Go test yourself
          </Button>
        </Card.Body>
      </Card>
    ));
  }
}