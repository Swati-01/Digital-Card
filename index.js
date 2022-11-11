import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interest from "./Interests"
import Footer from "./Footer"
function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Card />, document.getElementById("root"))