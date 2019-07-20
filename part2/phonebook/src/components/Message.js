import React from 'react'

const Message = ({ message }) => {
    console.log('message: ', message)
    if (message.type === 'success') {
        console.log('HERE1')
        return (
            <div className="notification" style={{color: 'green'}}>
                {message.text}
            </div>
        )
    } else if (message.type === 'error') {
        console.log('HERE2')
        return (
            <div className="notification" style={{color: 'red'}}>
                {message.text}
            </div>
        )
    }
    return null
    
}

export default Message