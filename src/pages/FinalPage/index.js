import { useHistory, useLocation } from 'react-router'
import { Grid, Typography } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import './styles.css'
import Btn from '../../components/GenericButton/index.js'
import DisabledQuestions from '../../components/DisabledQuestions/index.js'
import CardContainer from '../../components/CardContainer/index.js'

export const FinalPage = () => {

    const { score, quizz } = useContext(QuizzContext)
    const data = {
        questions: JSON.parse(localStorage.getItem('@quizz:question')),
        score: JSON.parse(localStorage.getItem('@quizz:score'))
    }
    const location = useLocation()
    let history = useHistory()

    return (
            <CardContainer>
                <Grid container spacing={3}>
                    {location.pathname === '/results' ?
                        quizz?.map((x, y) => <Grid item key={y} xs={12}><DisabledQuestions id={y} key={y} obj={x} /></Grid>)
                        :
                        data.questions?.map((x, y) => <Grid item key={y} xs={12}><DisabledQuestions id={y} key={y} obj={x} /></Grid>)
                    }
                </Grid>
                <div class="wrapper">
                    {location.pathname === '/results' ?
                        <Typography variant="h5" >Você acertou {score} de {quizz.length} perguntas!</Typography>
                        :
                        <Typography variant="h5" >Você acertou {data.score} de {data.questions.length} perguntas!</Typography>
                    }
                    <Btn onClick={() => history.push("/")}>Página Inicial</Btn>
                </div>
            </CardContainer>
    )

}

export default FinalPage