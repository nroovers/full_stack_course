import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
        return (

            <div>
                <h1>Statistics</h1>
                No feedback given
                </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            good {props.good}<br />
            neutral {props.neutral}<br />
            bad {props.bad}<br />
            all {props.good + props.neutral + props.bad}<br />
            average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}<br />
            positive {props.good / (props.good + props.neutral + props.bad) * 100} %
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={() => { setGood(good + 1) }}>good</button>
            <button onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
            <button onClick={() => { setBad(bad + 1) }}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)