import { createContext, useState } from "react"
import axios from 'axios'


export const QuizzContext = createContext([]);

export const QuizzProvider = ({ children }) => {

    const [quizz, setQuizz] = useState([])

    const callQuizz = (ammount) => {
        axios.get(`https://opentdb.com/api.php?amount=${ammount}`)
            .then(response => setQuizz(response.data.results))
            .catch((err) => console.log(err))

        console.log(quizz)    
    }

    return (
        <QuizzContext.Provider
            value={{ quizz, callQuizz }}>
            {children}
        </QuizzContext.Provider>
    )
}

