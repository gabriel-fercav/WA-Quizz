import { PageContainer } from './styles.js'
import { useHistory } from 'react-router'
import { Grid } from '@material-ui/core'
import { useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import DisabledQuestions from '../../components/DisabledQuestions/index.js'
import Btn from '../../components/GenericButton/index.js'

export const FinalPage = () => {

    const { quizz } = useContext(QuizzContext)
    let history = useHistory()

    return (
        <PageContainer>
            <div className="card_container">
                <Grid container spacing={3}>
                    {quizz?.map((x, y) => <Grid item key={y} xs={12}><DisabledQuestions id={y} key={y} obj={x} /></Grid>)}
                </Grid>
                <Btn onClick={() => history.push("/")}>Página Inicial</Btn>
            </div>
        </PageContainer>
    )

}

export default FinalPage