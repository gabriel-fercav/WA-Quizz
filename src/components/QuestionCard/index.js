import { Card, CardContent } from '@material-ui/core'

export const QuestionCard = ({ obj }) => {

    return (
        <>
            <Card>
                <CardContent>
                    <p>Category: {obj.category}</p>
                    <p>Type: {obj.type}</p>
                    <p>Difficulty: {obj.difficulty}</p>
                </CardContent>
                <CardContent>
                    <p>{obj.question}</p>
                </CardContent>
                <CardContent>
                    <p>{obj.correct_answer}</p>
                    {obj.incorrect_answers.map( (x,y) => <p key={y}>{x}</p> )}
                </CardContent>
            </Card>
        </>
    )

}

export default QuestionCard