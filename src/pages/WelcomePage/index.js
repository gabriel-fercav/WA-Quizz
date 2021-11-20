import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { PageContainer } from './styles.js'
import QuizzLogo from '../../assets/QuizzLogo.png'

const WelcomePage = () => {

    const history = useHistory()

    return (
        <PageContainer>
            <div className='logo_container'>
                <h1 className='logo_container-message'>WELCOME TO</h1>
                <img className='logo_container-quizz' src={QuizzLogo} alt='QuizzLogo' />
            </div>
            <div className='message_container' >
                <Button style={{ height: '50px', width: '150px', color: 'grey', borderColor: 'grey' }}
                    variant="outlined" onClick={() => history.push("/start")}>CLICK TO PLAY</Button>
            </div >
        </PageContainer >
    )
}

export default WelcomePage