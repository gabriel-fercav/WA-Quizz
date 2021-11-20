import { Route, Switch } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import WelcomePage from '../pages/WelcomePage'
import PlayPage from '../pages/PlayPage'


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
        </Switch>
    )
}

export default Routes