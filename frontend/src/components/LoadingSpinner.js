import React from 'react'
import "../spinner.css" 


function LoadingSpinner() {
    return (
        <>
                <div className="spinner-container" style={{position:"fixed",top:"40%",left:"50%",zIndex:"1"}}>
                    <div className="loading-spinner" />
                </div>
        </>
    )
}

export default LoadingSpinner
