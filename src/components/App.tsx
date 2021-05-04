import {Provider} from 'react-redux';
import {store} from '../redux';
import RepositoriesList from './RepositoriesList';

const App = () => {
    return (
        <Provider store = {store}>
        <div><h1>Search for a package</h1></div>
        <RepositoriesList/>
        </Provider>
    )
}

export default App;