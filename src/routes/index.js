import { Route, Switch } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import WelcomePage from '../pages/WelcomePage'
import PlayPage from '../pages/PlayPage'
import FinalPage from '../pages/FinalPage'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <WelcomePage/>
            </Route>
            <Route path="/start">
                <StartPage/>
            </Route>
            <Route path="/quizz">
                <PlayPage/>
            </Route>
            <Route path="/results">
                <FinalPage/>
            </Route>
        </Switch>
    )
}

export default Routes