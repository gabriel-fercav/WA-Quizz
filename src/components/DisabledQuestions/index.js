import {
    Card, CardContent, makeStyles, Chip,
    Typography, Divider, RadioGroup
} from '@material-ui/core'
import { useEffect, useState } from 'react'
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

    const [localAnswers, setLocalAnswers] = useState([])
    const classes = useStyles()

    const handleAnswers = (obj) => {
        let allAnswers = [obj.correct_answer, ...obj.incorrect_answers]
        setLocalAnswers(allAnswers)
    }

    useEffect(() => {
        handleAnswers(obj)
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
                <RadioGroup>
                    {localAnswers.map((x, y) =>

                        <AnswerBar
                            key={y}
                            string={x}
                            id={id}
                            finished={true}
                        />
                    )
                    }
                </RadioGroup>
            </CardContent>
        </Card>
    )

}

export default QuestionCard