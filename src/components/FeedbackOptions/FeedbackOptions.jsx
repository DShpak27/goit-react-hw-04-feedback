import propTypes from 'prop-types';
import clsx from 'clsx';
import style from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={style.FeedbackOptions}>
            {options.map(name => {
                return (
                    <button
                        key={name}
                        type="button"
                        className={clsx(
                            style[`FeedbackOptions__btn`],
                            style[`FeedbackOptions__btn--${name}`]
                        )}
                        onClick={() => {
                            onLeaveFeedback(name);
                        }}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
