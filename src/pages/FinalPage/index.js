import { PageContainer } from './styles.js'
import { useHistory } from 'react-router'
import { Grid, Button } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import QuestionCard from '../../components/QuestionCard/index.js'

export const FinalPage = () => {

    const { quizz } = useContext(QuizzContext)
    let history = useHistory()

    return (
        <PageContainer>
            <div className="card_container">
                <Grid container spacing={3}>
                    {quizz?.map((x, y) => <Grid item xs={12}><QuestionCard id={y} key={y} obj={x} finished={true} /></Grid>)}
                </Grid>
                <Button onClick={() => history.push("/")}>Página Inicial</Button>
            </div>
        </PageContainer>
    )

}

export default FinalPage