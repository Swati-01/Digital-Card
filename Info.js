import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return (
        <div className="info">
            <img className="pic" src="profile.png" width="317px" />
            <h1>Swati</h1>
            <h5>Fresher</h5>
            <p>github.com/Swati-01</p>
            <div className="btn">
                <button className="email">
                    <a href="mailto:swatijindal01@gmail.com">Email</a>
                </button>
                <button className="linkedin">
                    <a href="https://www.linkedin.com/in/swati-033145182/">LinkedIn</a>
                </button>
            </div>
        </div>
    )
}