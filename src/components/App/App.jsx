import { Component } from 'react';

import { Container } from './App.styled';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { Statistics } from '../Statistics/Statistics';

export class App extends Component {
  // Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  // создай вспомогательные методы countTotalFeedback() и countPositiveFeedbackPercentage(), подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные).
  countTotalFeedback() {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value);
  }

  countPositiveFeedbackPercentage = () => {
    const value = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const name = Object.keys(this.state);
    const value = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();

    console.log(value);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={name}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {/* Сообщение об отсутствиии статистики вынеси в компонент <Notification message="There is no feedback"> */}
        <Section title="Statistics">
          {value === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={value}
              positivePercentage={percent}
            />
          )}
        </Section>
      </Container>
    );
  }
};
