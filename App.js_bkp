import Demo from './demo/Demo';
import DemoTF from './demo/DemoTF';
import BlogGrid from './pages/BlogGrid';
import HomeOlive from './pages/HomeOlive';
import BlogDetails from './pages/BlogDetails';
import BlogTwoColumn from './pages/BlogTwoColumn';
import HomeHorizontal from './pages/HomeHorizontal';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/tf`} component={DemoTF}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOlive}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeHorizontal}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-grid`} component={BlogGrid}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-two-column`} component={BlogTwoColumn}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
