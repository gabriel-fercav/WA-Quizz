import { TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import { PageContainer } from './styles'
import Btn from '../../components/GenericButton'

const StartPage = () => {

    const { callQuizz } = useContext(QuizzContext)
    const [ amm, setAmm ] = useState("")
    const history = useHistory()

    const startQuizz = (ammount) => {
        callQuizz(ammount)
        history.push('/quizz')
    }

    return (
        <PageContainer>
            <h1>Escolha a quantidade de perguntas a serem respondidas:</h1>
            <div className="form_container">

                <TextField style={{ width: '150px', color: 'grey', borderColor: 'grey' }}
                    size='small'
                    value={amm}
                    variant="outlined"
                    placeholder="Digite a quantidade"
                    onChange={(e) => setAmm(e.target.value)}
                />

                <Btn onClick={(e) => startQuizz(amm)}>Start</Btn>

                <Btn onClick={() => history.push('/')}>Cancel</Btn>
            </div>
        </PageContainer>
    )
}

export default StartPage