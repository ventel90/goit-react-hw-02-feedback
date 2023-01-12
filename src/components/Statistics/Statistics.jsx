import PropTypes from 'prop-types';

import {
  Votes,
  VotesItem,
  VoteName,
} from './Statistics.styled';

// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Votes>
        <VotesItem>
          <VoteName>Good: {good}</VoteName>
        </VotesItem>
        <VotesItem>
          <VoteName>Neutral: {neutral}</VoteName>
        </VotesItem>
        <VotesItem>
          <VoteName>Bad: {bad}</VoteName>
        </VotesItem>
        <VotesItem>
          <VoteName>Total: {total}</VoteName>
        </VotesItem>
        <VotesItem>
          <VoteName>
            Positive: {positivePercentage}%
          </VoteName>
        </VotesItem>
      </Votes>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
