import React from 'react'

const Course = ({ course }) =>
    <div>
        <Header course={course.name} />
        <Content contents={course.parts} />
        <Total contents={course.parts.map(el => el.exercises)} />
    </div>

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ content }) =>
    <p>{content.name} {content.exercises}</p>

const Total = ({ contents }) =>
    <p style={{fontWeight:'bold'}}>Total of {contents.reduce((total, el) => total + el, 0)} exercises</p>

const Content = ({ contents }) =>
    <div>
        {contents.map(content => <Part key={content.id} content={content} />)}
    </div>

export default Course
