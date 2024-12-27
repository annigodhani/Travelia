import React from "react"
import CallActionCSS from "./../Footer/CallToAction.module.css"  

function CallToAction() {
    return (
        <>
            <div className={`${CallActionCSS.CallToAction_wrapper} section`}>
                <h2>Ready To Start Your Adventure?</h2>
                <p>Choose your destination, plan your trip, and experience the best stay ever!</p>
                <button>Book Advanture</button>
            </div>
        </>
    )
}

export default CallToAction