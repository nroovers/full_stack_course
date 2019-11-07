import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const Statistic = (props) => {
    return (
        <>{props.text} {props.value}</>
    )
}

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
            <Statistic text='good' value={props.good} /><br />
            <Statistic text='neutral' value={props.neutral} /><br />
            <Statistic text='bad' value={props.bad} /><br />
            <Statistic text='all' value={props.good + props.neutral + props.bad} /><br />
            <Statistic text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} /><br />
            <Statistic text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100} /> %
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
            <Button onClick={() => { setGood(good + 1) }} text='good' />
            <Button onClick={() => { setNeutral(neutral + 1) }} text='neutral' />
            <Button onClick={() => { setBad(bad + 1) }} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)