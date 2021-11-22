import { PageContainer } from './styles.js'
import { Grid } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import QuestionCard from '../../components/QuestionCard/index.js'
import Btn from '../../components/GenericButton/index.js'

export const PlayPage = () => {

    
    const { quizz, finishQuizz } = useContext(QuizzContext)

    return (
        <PageContainer>
            <div className="card_container">
                <Grid container spacing={3}>
                    {quizz?.map((x, y) => <Grid key={y} item xs={12}><QuestionCard id={y} key={y} obj={x} /></Grid>)}
                </Grid>
                <Btn onClick={() => finishQuizz()}>Encerrar</Btn>
            </div>
        </PageContainer>
    )

}

export default PlayPage