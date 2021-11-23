import { createContext, useState, useEffect } from "react"
import { useHistory } from "react-router";
import axios from 'axios'


export const QuizzContext = createContext([]);

export const QuizzProvider = ({ children }) => {

    const history = useHistory()
    const [quizz, setQuizz] = useState([])
    const [ammount, setAmmount] = useState([])
    const [score, setScore] = useState(0)
    const [rightAnswers, setRightAnswers] = useState([])
    const [selectedAnswers, setSelected] = useState([])


    const [isLoading, setIsLoading] = useState(true)

    const callQuizz = (ammount) => {
        axios.get(`https://opentdb.com/api.php?amount=${ammount}`)
            .then(response => {
                setQuizz(response.data.results)
                localStorage.clear()
                localStorage.setItem('@quizz:question', JSON.stringify(response.data.results))
            })
            .catch((err) => console.log(err))
            .finally( () => setIsLoading(false))
    }

    const findScore = () => {
        let counter = 0
        for (let i = 0; i < rightAnswers.length; i++) {
            if (rightAnswers[i] === selectedAnswers[i]) {
                counter++
            }
        }

        setScore(counter) // TÁ BUGADO ESSA SOLUÇÃO DE SETTAR SCORE, RESOLVER
    }

    const finishQuizz = () => {
        findScore()
        localStorage.setItem('@quizz:answers', JSON.stringify(selectedAnswers))
        localStorage.setItem('@quizz:rightanswers', JSON.stringify(rightAnswers))
        localStorage.setItem('@quizz:score', JSON.stringify(score))
        setIsLoading(true)
        history.push("/results")

    }

    useEffect(() => {
        setSelected(selectedAnswers)
        findScore()
    }, [selectedAnswers])

    useEffect(() => {
        setRightAnswers(quizz.map(x => x.correct_answer))
    }, [quizz])

    return (
        <QuizzContext.Provider
            value={{
                quizz,
                selectedAnswers,
                setSelected,
                ammount,
                setAmmount,
                rightAnswers,
                finishQuizz,
                isLoading,
                callQuizz,
                score
            }}>
            {children}
        </QuizzContext.Provider>
    )
}

