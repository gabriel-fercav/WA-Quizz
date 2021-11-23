import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { PageContainer } from './styles.js'
import { QuizzContext } from '../../providers/QuizzProvider/index.js'
import Btn from '../../components/GenericButton/index.js'
import QuizzLogo from '../../assets/QuizzLogo.png'

const WelcomePage = () => {

    const { setSelected } = useContext(QuizzContext)
    const history = useHistory()

    const reviewQuizz = () => {
        setSelected(JSON.parse(localStorage.getItem('@quizz:answers')))
        history.push('/review')
    }

    return (
        <PageContainer>
            <div className='logo_container'>
                <h1 className='logo_container-message'>WELCOME TO</h1>
                <img className='logo_container-quizz' src={QuizzLogo} alt='QuizzLogo' />
            </div>
            <div className='message_container' >
                <Btn onClick={() => history.push("/start")}>CLICK TO PLAY</Btn>
                {localStorage.getItem('@quizz:answers') ?
                    <Btn onClick={() => reviewQuizz()}>REVIEW RESULTS</Btn>
                    :
                    <Btn disabled onClick={() => reviewQuizz()}>REVIEW RESULTS</Btn>
                }
            </div >
        </PageContainer >
    )
}

export default WelcomePage