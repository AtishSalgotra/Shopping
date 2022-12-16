import React from "react"
import { Link } from "react-router-dom"



export default function Login(){
    return (
        <div>
            <form>
                <input type="email" placeholder="Enter your Email"/>
                <input type="password" placeholder="Enter your Password..."/>
                <button>Sign In</button>
            </form>
            <Link to="/">Back to Main Page</Link>
        </div>
    )
}