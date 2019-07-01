import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correct: 0,
      disabledQuestion: []
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(question, answerIndex) {
    const {
      correct,
      disabledQuestion
    } = this.state;

    this.setState({
      correct: question.corectAnswerID === answerIndex
        ? correct + 1
        : correct,
      disabledQuestion: [
        ...disabledQuestion,
        question.questID
      ]
    });
  }

  renderQuestions() {
    const {
      test
    } = this.props;
    const { disabledQuestion } = this.state;

    return test.questions.map(question => {
      const disabled = disabledQuestion.find(item => item === question.questID);

      return (
        <div style={{marginTop: '20px'}} key={question.questID}>
          <h3>{question.questText}</h3>
          {question.answers.map((answer, index) => {
            return (
              <Button
                key={`${answer}-${question.questID}`}
                disabled={disabled}
                style={{
                  display: 'block',
                  margin: '5px'
                }}
                variant="light"
                onClick={() => this.handleAnswer(question, index)}
              >
                {answer}
              </Button>
            )
          })}
        </div>
      )
    })
  }

  render() {
    const {
      test,
      handleBack
    } = this.props;
    const { correct, disabledQuestion } = this.state;

    const ifFinnish = disabledQuestion.length === test.questions.length;

    return (
      <Card style={{margin: '10px'}}>
        <Card.Header
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {test.testName}
          <Button
            variant="warning"
            onClick={handleBack}
          >
            Back
          </Button>
        </Card.Header>
        <Card.Body>
          {this.renderQuestions()}
          {ifFinnish &&
            <h1>Your result: {correct}/{test.questions.length}</h1>
          }
        </Card.Body>
      </Card>
    )
  }
}