import {
    Card, CardContent, makeStyles, Chip,
    Typography, Divider, RadioGroup
} from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import AnswerBar from '../AnswerBar'

const useStyles = makeStyles({

    question: {
        margin: '20px 0px 0px 0px'
    },

    container: {
        padding: '0px 10px 0px 10px'
    }

})

export const QuestionCard = ({ obj, id, finished = false }) => {

    const { setSelected, selectedAnswers } = useContext(QuizzContext)
    const classes = useStyles()

    const recordSelection = (answer, objId) => {
        let newSelection = [...selectedAnswers]
        newSelection[objId] = answer
        setSelected(newSelection)
    }

    const all_answers = [obj.correct_answer, ...obj.incorrect_answers]

    return (
        <Card id={id} className={classes.container}>
            <CardContent>
                <Typography>{obj.category.toUpperCase()}</Typography>
                <Chip label={obj.difficulty.toUpperCase()} />
            </CardContent>
            <Divider />
            <CardContent>
                <Typography className={classes.question}>{obj.question}</Typography>
            </CardContent>
            <CardContent className={classes.questionSection}>
                <RadioGroup onChange={(e) => recordSelection(e.target.value, id)}>
                    {all_answers.map((x, y) =>

                        finished ?
                            <AnswerBar
                                string={x}
                                finished={true}
                            />
                            :
                            <AnswerBar
                                string={x}
                                finished={false}
                            />
                    )
                    }
                </RadioGroup>
            </CardContent>
        </Card>
    )

}

export default QuestionCard