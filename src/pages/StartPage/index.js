import './styles.css'
import { TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { QuizzContext } from '../../providers/QuizzProvider'
import Btn from '../../components/GenericButton'


const StartPage = () => {

    const { callQuizz, dif, setDif } = useContext(QuizzContext)
    const [amm, setAmm] = useState("")
    const history = useHistory()

    const startQuizz = (ammount) => {
        
        if (ammount === 0 ) {
            ammount = 3
        }
        
        ammount = Math.floor(ammount)

        if (ammount <= 0) {
            ammount = ammount * -1
        }
        console.log(ammount)
        callQuizz(ammount, dif)
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
                <FormControl style={{ width: '150px' }} >
                    <InputLabel style={{ marginLeft: '15px', marginTop: '0px' }} id="difficulty-label">Difficulty</InputLabel>
                    <Select
                        defaultValue="mixed"
                        variant="outlined"
                        labelId="difficulty-label"
                        label="Difficulty"
                        value={dif}
                        onChange={(e) => setDif(e.target.value)}
                    >
                        <MenuItem value={'easy'}>Easy</MenuItem>
                        <MenuItem value={'medium'}>Medium</MenuItem>
                        <MenuItem value={'hard'}>Hard</MenuItem>
                        <MenuItem value={'mixed'}>Mixed</MenuItem>
                    </Select>
                </FormControl>
                { amm ?
                <Btn onClick={(e) => startQuizz(amm)}>Start</Btn>
                :
                <Btn disabled onClick={(e) => startQuizz(amm)}>Start</Btn>
                }
                <Btn onClick={() => history.push('/')}>Cancel</Btn>
            </div>
        </>
    )
}

export default StartPage