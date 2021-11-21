import { Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useState, useContext } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import { PageContainer } from './styles'

const StartPage = () => {

    const [quizzAmmount, setQuizzAmmount] = useState("")
    const { callQuizz } = useContext(QuizzContext)
    const history = useHistory()

    const handleQuizz = (ammount) => {
        if (ammount < 1) {
            ammount = 5
        }
        callQuizz(ammount)
        history.push('/quizz')
    }

    return (
        <PageContainer>
            <h1>Escolha a quantidade de perguntas a serem respondidas:</h1>
            <div className="form_container">

                <TextField style={{ width: '150px', color: 'grey', borderColor: 'grey' }}
                    size='small'
                    value={quizzAmmount}
                    variant="outlined"
                    placeholder="Digite a quantidade"
                    onChange={(e) => setQuizzAmmount(e.target.value)}
                />

                <Button style={{ height: '50px', width: '150px', color: 'grey', borderColor: 'grey' }}
                    variant="outlined" onClick={() => handleQuizz(quizzAmmount)}>Start</Button>

                <Button style={{ height: '50px', width: '150px', color: 'grey', borderColor: 'grey' }}
                    variant="outlined" onClick={() => history.push('/')}>Cancel</Button>
            </div>
        </PageContainer>
    )
}

export default StartPage