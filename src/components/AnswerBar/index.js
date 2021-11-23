import { FormControlLabel, Radio } from '@material-ui/core'
import { QuizzContext } from '../../providers/QuizzProvider'
import { ImCheckmark, ImCross } from 'react-icons/im'
import { useContext } from 'react'

export const AnswerBar = ({ string, finished, id }) => {


    const { selectedAnswers } = useContext(QuizzContext)

    const rightAnswers = JSON.parse(localStorage.getItem('@quizz:rightanswers'))

    const checkQuestions = () => {

        // Recebe uma string (vinda das perguntas do componente)
        // Recebe o ID (id) do componente, que correlaciona com a posição
        // no arr de selectedAnswers (ou seja, selectedAnswers[1] tem
        // a resposta selecionada para primeiro componente)
        // Assim sendo, se selectedAnswers[id] === string
        // isso significa que a string passada é a selecionada
        // Mesma lógica se aplica para rightAnswers[id]

        for (let i = 0; i < selectedAnswers.length; i++) {
            if (string === selectedAnswers[id]
                && string === rightAnswers[id]) {
                return (
                    <FormControlLabel
                        label={<><ImCheckmark /> {string}</>}
                        color="default"
                        disabled
                        control={<Radio checked />}
                        value={string} />
                )
            } 
            
            if (string === selectedAnswers[id]) {
                return (
                    <FormControlLabel
                        label={<><ImCross /> {string}</>}
                        color="default"
                        disabled
                        control={<Radio checked />}
                        value={string} />
                )
            }  
            
            if (string === rightAnswers[id]) {
                return (
                    <FormControlLabel
                        label={<><ImCheckmark /> {string}</>}
                        color="default"
                        control={<Radio disabled />}
                        value={string} />
                )
            }
                return (
                    <FormControlLabel
                        label={<><ImCross /> {string}</>}
                        color="default"
                        control={<Radio disabled />}
                        value={string} />
                )
        }
    }


    return (
        <>
            {!finished ?
                <FormControlLabel
                    label={string}
                    color="default"
                    control={<Radio />}
                    value={string} />
                : checkQuestions()
            }
        </>
    )
}

export default AnswerBar