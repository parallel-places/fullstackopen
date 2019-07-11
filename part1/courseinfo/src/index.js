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
    <p>{props.content.part} {props.content.exercises}</p>
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseContent = [
      {part: part1, exercises: exercises1},
      {part: part2, exercises: exercises2},
      {part: part3, exercises: exercises3}
    ]

  console.log(courseContent)

  return (
    <div>
      <Header course={course} />
      <Content contents={courseContent} />
      <Total  content={courseContent.map(el => el.exercises)}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
