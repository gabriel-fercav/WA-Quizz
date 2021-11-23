import {
    Card, CardContent, makeStyles, Chip,
    Typography, Divider, RadioGroup
} from '@material-ui/core'
import { useContext, useEffect, useState } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import { shuffler } from '../../utils/shuffler'
import AnswerBar from '../AnswerBar'

const useStyles = makeStyles({

    question: {
        margin: '20px 0px 0px 0px'
    },

    container: {
        padding: '0px 10px 0px 10px'
    }

})

export const QuestionCard = ({ obj, id }) => {

    const { setSelected, selectedAnswers } = useContext(QuizzContext)
    const [localAnswers, setLocalAnswers] = useState([])
    const classes = useStyles()

    const recordSelection = (answer, objId) => {
        let newSelection = [...selectedAnswers]
        newSelection[objId] = answer
        setSelected(newSelection)
    }

    const shuffle = (obj) => {
        let allAnswers = [obj.correct_answer, ...obj.incorrect_answers]
        setLocalAnswers(shuffler(allAnswers))
    }

    useEffect(() => {
        shuffle(obj)
    }, [obj])

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
                <RadioGroup onClick={(e) => recordSelection(e.target.value, id)}>
                    {localAnswers.map((x, y) =>
                            <AnswerBar
                                key={y}
                                string={x}
                                id={id}
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