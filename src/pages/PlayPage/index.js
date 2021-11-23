import { Grid, Typography } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import Btn from '../../components/GenericButton/index.js'
import QuestionCard from '../../components/QuestionCard/index.js'
import CardContainer from '../../components/CardContainer/index.js'
import { Bars } from 'react-loading-icons'

export const PlayPage = () => {


    const { quizz, finishQuizz, isLoading } = useContext(QuizzContext)

    return (
        <>
            {isLoading ?
                <Bars />
                :
                    <CardContainer>
                        <Grid container spacing={3}>
                            {quizz?.map((x, y) => <Grid key={y} item xs={12}><QuestionCard id={y} key={y} obj={x} /></Grid>)}
                        </Grid>
                        <div className="wrapper">
                            <Typography variant="h5" >Click to view results!</Typography>
                            <Btn onClick={() => finishQuizz()}>Encerrar</Btn>
                        </div>
                    </CardContainer>
            }
        </>
    )

}

export default PlayPage