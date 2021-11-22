import { PageContainer } from './styles.js'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import DisabledQuestions from '../../components/DisabledQuestions/index.js'
import Btn from '../../components/GenericButton/index.js'

export const ReviewPage = () => {

    let history = useHistory()
    const data = JSON.parse(localStorage.getItem('@quizz:question'))

    return (
        <PageContainer>
            <div className="card_container">
                <Grid container spacing={3}>
                    {data?.map((x, y) => <Grid item key={y} xs={12}><DisabledQuestions id={y} key={y} obj={x} /></Grid>)}
                </Grid>
                <Btn onClick={() => history.push("/")}>Voltar</Btn>
            </div>
        </PageContainer>
    )

}

export default ReviewPage