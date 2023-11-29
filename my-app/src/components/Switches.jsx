import Form from 'react-bootstrap/Form';
import './estilo.css'
import { ThemeContext } from "../context/ThemeContext"
import { useEffect, useContext, useState } from 'react'

function Switch() {
    const { theme, setTheme } = useContext(ThemeContext)

    const HandleSubmit = () => {
        if (theme === 'blanco') {
            setTheme('azul')
        }
        else {
            setTheme('blanco')
        }
    }

    return (
        <div className={theme}>
            <div className='margen'>
            <Form onClick={HandleSubmit}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="CambiarColor"
                />
            </Form>
        </div>
        </div>
    );
}

export default Switch;