import propTypes from 'prop-types';
import clsx from 'clsx';
import style from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={style.Statistics__wrapper}>
        <span
            className={clsx(
                style.Statistics__info,
                style['Statistics__info--good']
            )}
        >
            Good: {good}
        </span>
        <span
            className={clsx(
                style.Statistics__info,
                style['Statistics__info--neutral']
            )}
        >
            Neutral: {neutral}
        </span>
        <span
            className={clsx(
                style.Statistics__info,
                style['Statistics__info--bad']
            )}
        >
            Bad: {bad}
        </span>
        <span
            className={clsx(
                style.Statistics__info,
                style['Statistics__info--total']
            )}
        >
            Total: {total}
        </span>
        <span
            className={clsx(
                style.Statistics__info,
                style['Statistics__info--percentage']
            )}
        >
            Positive Feedback: {positivePercentage}
        </span>
    </div>
);

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.string.isRequired,
};

export default Statistics;
