import React from 'react'

const messageBox = ({variant, children}) => {
    return (
        <div className={`alert alert-${variant || 'info'}`}>
          {children}
        </div>
    )
}

export default messageBox