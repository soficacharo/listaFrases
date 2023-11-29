import { useEffect, useContext, useState } from 'react'
import './estilo.css'
import { ThemeContext } from "../context/ThemeContext"

const GoalInput = () => {
    const [frases, setFrases] = useState([]);
    const [contador, setContador] = useState(0);
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.title = `Hola prueba :(`
    }, [])

    useEffect(() => {
        localStorage.setItem('frases', JSON.stringify(frases))
    }, [frases])

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaFrase = document.getElementsByName("campoUnico")[0].value;
        document.getElementsByName("campoUnico")[0].value = "";
        setFrases((prevFrases) => [...prevFrases, nuevaFrase]);
        setContador(contador + 1)
    };

    return (
        <div className={theme}>
            <div className="margen">
                <p>HOLAAAAAAAAA</p>
                <form onSubmit={handleSubmit}>
                    <label>Escribi algo:</label>
                    <input type="text" name="campoUnico" className="u-full-width" placeholder="texto..." />
                    <button type="submit" className="u-full-width button-primary">Subir</button>
                </form>
                {frases.map((item, i) => (
                    <div key={i}>
                        <p>Frase: <span>{item}</span></p>
                    </div>
                ))}
                <p>contador: {contador}</p>
            </div>
        </div>
    );
};

export default GoalInput;
