import { useHistory } from 'react-router-dom'
import { PageContainer } from './styles.js'
import Btn from '../../components/GenericButton/index.js'
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
                <Btn onClick={() => history.push("/start")}>CLICK TO PLAY</Btn>
                <Btn onClick={() => history.push("/review")}>REVIEW RESULTS</Btn>
            </div >
        </PageContainer >
    )
}

export default WelcomePage