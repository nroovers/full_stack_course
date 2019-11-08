import React from 'react'


const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {

    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {

    const rows = () => parts.map(part =>
        <Part key={part.id} part={part} />
    )

    return (
        <div>
            {rows()}
        </div>
    )
}

const Total = (props) => {
    const totalExercises = props.parts.reduce((total, part) => {
        console.log('what is happening', total, part.exercises)
        return total + part.exercises
    },
        0)

    return (
        <b>Number of exercises {totalExercises}</b>
    )
}


const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course