import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
