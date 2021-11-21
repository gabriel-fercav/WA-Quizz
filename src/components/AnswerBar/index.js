import { FormControlLabel, Radio } from '@material-ui/core'
import { QuizzContext } from '../../providers/QuizzProvider'
import { useContext } from 'react'

export const AnswerBar = ({ string, finished }) => {


    const { selectedAnswers, rightAnswers } = useContext(QuizzContext)
    console.log(selectedAnswers)

    return (
        <>
            {!finished ?
                <FormControlLabel
                    label={string}
                    color="default"
                    control={<Radio />}
                    value={string} />
                : selectedAnswers.includes(string) && rightAnswers.includes(string) ?
                    <FormControlLabel
                        label={string + "------ CORRETA"}
                        color="default"
                        disabled
                        control={<Radio checked />}
                        value={string} />
                    : selectedAnswers.includes(string) ?
                        <FormControlLabel
                            label={string}
                            color="default"
                            disabled
                            control={<Radio checked />}
                            value={string} />
                        : rightAnswers.includes(string) ?
                            <FormControlLabel
                                label={string + "------ CORRETA"}
                                color="default"
                                disabled
                                control={<Radio />}
                                value={string} />
                            :
                            <FormControlLabel
                                label={string}
                                color="default"
                                disabled
                                control={<Radio />}
                                value={string} />

            }
        </>
    )
}

export default AnswerBar