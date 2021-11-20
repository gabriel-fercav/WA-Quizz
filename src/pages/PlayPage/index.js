import { PageContainer } from './styles.js'
import { Grid } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import QuestionCard from '../../components/QuestionCard/index.js'

export const PlayPage = () => {

    const { quizz } = useContext(QuizzContext)

    return (
        <PageContainer>
            <Grid container spacing='2' xs='5'>
            {quizz?.map( (x,y) => <Grid item xs='12'><QuestionCard key={y} obj={x}/></Grid> )}
            </Grid>
        </PageContainer>
    )

}

export default PlayPage