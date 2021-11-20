import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import { PageContainer } from './styles'

const StartPage = () => {

    const [qnt_perguntas, setQntPerguntas] = useState()
    const { callQuizz } = useContext(QuizzContext)
    const history = useHistory()

    const handleQuizz = (ammount) => {
        callQuizz(ammount)
        history.push('/quizz')
    }

    return (
        <PageContainer>
            <h1>Escolha a quantidade de perguntas a serem respondidas:</h1>
            <div className="form_container">

                <input value={qnt_perguntas} placeholder="Digite a quantidade"
                    onChange={(e) => setQntPerguntas(e.target.value)}
                />

                <Button style={{ height: '50px', width: '150px', color: 'grey', borderColor: 'grey' }}
                    variant="outlined" onClick={() => handleQuizz(qnt_perguntas)}>Start</Button>

                <Button style={{ height: '50px', width: '150px', color: 'grey', borderColor: 'grey' }}
                    variant="outlined" onClick={() => history.push('/')}>Cancel</Button>
            </div>
        </PageContainer>
    )
}

export default StartPage