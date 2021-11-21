import { createContext, useState, useEffect } from "react"
import { useHistory } from "react-router";
import axios from 'axios'


export const QuizzContext = createContext([]);

export const QuizzProvider = ({ children }) => {

    const history = useHistory()
    const [quizz, setQuizz] = useState([])
    const [score, setScore] = useState(0)
    const [rightAnswers, setRightAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])
    const [selectedAnswers, setSelected] = useState([])

    const calcTotal = () => {
        let counter = 0
        for (let item in rightAnswers) {
            if (selectedAnswers.includes(item)) {
                counter++
            }
        }
        setScore(counter)
        history.push("/results")
    }

    useEffect(() => {
        setSelected(selectedAnswers)
    }, [selectedAnswers])

    const callQuizz = (ammount) => {
        axios.get(`https://opentdb.com/api.php?amount=${ammount}`)
            .then(response => setQuizz(response.data.results))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const rightAnswerList = quizz.map(x => x.correct_answer)
        setRightAnswers(rightAnswerList)
        const wrongAnswerList = quizz.map(x => x.incorrect_answers)
        setWrongAnswers(wrongAnswerList)
    }, [quizz])

    return (
        <QuizzContext.Provider
            value={{
                quizz,
                setSelected,
                selectedAnswers,
                rightAnswers,
                wrongAnswers,
                callQuizz,
                calcTotal
            }}>
            {children}
        </QuizzContext.Provider>
    )
}

