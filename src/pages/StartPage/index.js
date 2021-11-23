import './styles.css'
import { TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import Btn from '../../components/GenericButton'


const StartPage = () => {

    const { callQuizz } = useContext(QuizzContext)
    const [amm, setAmm] = useState("")
    const history = useHistory()

    const startQuizz = (ammount) => {
        ammount = Math.floor(ammount)
        if (ammount <= 0) {
            ammount = ammount * -1
        }
        callQuizz(ammount)
        history.push('/quizz')
    }

    return (
        <>
            <Typography variant="h6">How many questions?</Typography>
            <Typography gutterBottom variant="subtitle1">Choose an ammount and press start!</Typography>
            <div className="form_container">
                <TextField type="number" required style={{ width: '150px' }}
                    size='small'
                    value={amm}
                    variant="outlined"
                    placeholder="Ex: 10"
                    onChange={(e) => setAmm(e.target.value)}
                />
                <Btn onClick={(e) => startQuizz(amm)}>Start</Btn>
                <Btn onClick={() => history.push('/')}>Cancel</Btn>
            </div>
        </>
    )
}

export default StartPage