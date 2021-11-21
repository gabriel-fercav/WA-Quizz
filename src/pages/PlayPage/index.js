import { PageContainer } from './styles.js'
import { Grid, Button } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import QuestionCard from '../../components/QuestionCard/index.js'

export const PlayPage = () => {

    const { quizz, calcTotal } = useContext(QuizzContext)

    return (
        <PageContainer>
            <div className="card_container">
                <Grid container spacing={3}>
                    {quizz?.map((x, y) => <Grid item xs={12}><QuestionCard id={y} key={y} obj={x} /></Grid>)}
                </Grid>
                <Button onClick={() => calcTotal()}>Encerrar</Button>
            </div>
        </PageContainer>
    )

}

export default PlayPage