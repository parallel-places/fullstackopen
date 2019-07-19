import React from 'react'

const Info = ({ content, handleButtonClick }) => {
    let toRender = content

    if (content.length === 250) {
        toRender = []
    } else if (content.length > 10) {
        toRender = ["Too many matches, specify another filter"]
    }
    return (
        <React.Fragment>
            {toRender.map(
                c =>
                <div key={c}>
                    {c}{toRender.length > 1 ? <button data={c} onClick={handleButtonClick}>show</button> : ''}
                </div>
            )}
        </React.Fragment>)
}

export default Info
