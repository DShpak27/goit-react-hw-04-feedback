import { useState } from 'react';
import style from './App.module.scss';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification';

const optionNames = ['Good', 'Neutral', 'Bad'];

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addStatistics = name => {
        switch (name) {
            case 'Good':
                setGood(prevValue => prevValue + 1);
                break;
            case 'Neutral':
                setNeutral(prevValue => prevValue + 1);
                break;
            case 'Bad':
                setBad(prevValue => prevValue + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedbacks = () => good + neutral + bad;

    const countGoodFeedbacksShare = () => {
        let positiveFeedbacksShare = (good / (good + neutral + bad)) * 100;
        if (!positiveFeedbacksShare) {
            return 0 + '%';
        }
        return positiveFeedbacksShare.toFixed(0) + '%';
    };

    return (
        <div className={style.FeedbackWidget__wrapper}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={optionNames}
                    onLeaveFeedback={addStatistics}
                ></FeedbackOptions>
            </Section>

            <hr />

            {countTotalFeedbacks() !== 0 ? (
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedbacks()}
                        positivePercentage={countGoodFeedbacksShare()}
                    ></Statistics>
                </Section>
            ) : (
                <Notification message="There is no feedback"></Notification>
            )}
        </div>
    );
}

export default App;
