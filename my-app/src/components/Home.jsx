import React, { Fragment } from "react"
import './estilo.css'
import { ThemeContext } from "../context/ThemeContext"
import { useEffect, useContext, useState } from 'react'

const Home = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <div className="margen">
                <p>HOLA</p>
            </div>
        </div>
    )
}

export default Home