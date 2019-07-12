import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

// const Content = (props) => (
//     <>
//     {props.contents.map(el => <p>{el.part} {el.exercises}</p>)}
//     </>
// )

const Part = (props) => (
    <p>{props.content.name} {props.content.exercises}</p>
)

const Content = (props) => (
    <>
    <Part content={props.contents[0]} />
    <Part content={props.contents[1]} />
    <Part content={props.contents[2]} />
    </>
)

const Total = (props) => (
    <p>Number of exercises {props.content.reduce((total, el) => total + el)}</p>
)

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }

    return (
    <div>
        <Header course={course.name} />
        <Content contents={course.parts} />
        <Total  content={course.parts.map(el => el.exercises)}/>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
