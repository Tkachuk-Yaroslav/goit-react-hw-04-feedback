import { Component } from 'react';
import Statistic from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = event => {
    this.setState(prevState => {
      //console.log('[event.name]', event.target.name);
      const updatedState = {
        [event.target.name]: prevState[event.target.name] + 1,
      };
      //console.log('Updated state', updatedState);
      return updatedState;
    });
  };

  // як метод класу
  // countTotalFeedback = () => {
  //   let total;
  //   total = this.state.good + this.state.neutral + this.state.bad;
  //   return total;
  //   //total: prev.good + prev.neutral + prev.bad
  //   //total: this.state.good + this.state.neutral + this.state.bad,
  // };

  // як метод класу
  // countPositiveFeedbackPercentage = () => {
  //   let positive;
  //   positive = this.state.good / this.countTotalFeedback();
  //   return (positive * 100).toFixed(0);
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = total === 0 ? 0 : (good / total) * 100;
    return (
      <>
        {/* Початково без компонентів */}
        {/* <h1>Please live feedback</h1> */}

        <Section title="Please live feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handlerClick}
          />
        </Section>

        {/* Початково без компонентів */}
        {/* <button onClick={this.handlerClick} type="button" name="good">
          Good
        </button>
        <button onClick={this.handlerClick} type="button" name="neutral">
          Neutral
        </button>
        <button onClick={this.handlerClick} type="button" name="bad">
          Bad
        </button> */}

        {/* Початково без компонентів */}
        {/* <h2>Statistic</h2> */}
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive.toFixed(0)}
            />
          )}
        </Section>
        {/* Початково без компонентів */}
        {/* <p value={this.state.good}>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p> */}
      </>
    );
  }
}

export default App;
