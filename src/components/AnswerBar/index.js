import { FormControlLabel, Radio } from '@material-ui/core'
import { QuizzContext } from '../../providers/QuizzProvider'
import { ImCheckmark, ImCross } from 'react-icons/im'
import { useContext } from 'react'

export const AnswerBar = ({ string, finished }) => {


    const { selectedAnswers, rightAnswers } = useContext(QuizzContext)

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
                        label={<><ImCheckmark/> {string}</>}
                        color="default"
                        disabled
                        control={<Radio checked />}
                        value={string} />
                    : selectedAnswers.includes(string) ?
                        <FormControlLabel
                            label={<><ImCross/> {string}</>}
                            color="default"
                            control={<Radio disabled checked />}
                            value={string} />
                        : rightAnswers.includes(string) ?
                            <FormControlLabel
                                label={<><ImCheckmark/> {string}</>}
                                color="default"
                                control={<Radio disabled/>}
                                value={string} />
                            :
                            <FormControlLabel
                                label={<><ImCross/> {string}</>}
                                color="default"
                                control={<Radio disabled/>}
                                value={string} />

            }
        </>
    )
}

export default AnswerBar