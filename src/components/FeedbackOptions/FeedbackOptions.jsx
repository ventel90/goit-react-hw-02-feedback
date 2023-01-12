import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
