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
    const [wrongAnswers, setWrongAnswers] = useState([])
    const [selectedAnswers, setSelected] = useState([])

    const finishQuizz = () => {
        let counter = 0
        for (let item of rightAnswers) {
            if (selectedAnswers.includes(item)) {
                counter++
            }
        }
        setScore(counter)
        history.push("/results")
    }

    const callQuizz = (ammount) => {
        axios.get(`https://opentdb.com/api.php?amount=${ammount}`)
            .then(response => {
                setQuizz(response.data.results)
                localStorage.clear()
                localStorage.setItem('@quizz:question', JSON.stringify(response.data.results))
                // localStorage.getItem('@quizz:question')
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        setSelected(selectedAnswers)
    }, [selectedAnswers])

    useEffect(() => {
        setRightAnswers(quizz.map(x => x.correct_answer))
        setWrongAnswers(quizz.map(x => x.incorrect_answers))
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
                wrongAnswers,
                finishQuizz,
                callQuizz,
                score
            }}>
            {children}
        </QuizzContext.Provider>
    )
}

