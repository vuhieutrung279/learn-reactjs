import { Link, Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album';
import Clock from './features/Clock';
import PostList from './features/PostList';
function App() {
  return (
    <div className="App">
      <h2>Header</h2>
      <Link to="/clock">Clock</Link>
      <Link to="/post-list">Post List</Link>
      <Link to="/album">Album</Link>
      <Switch>
        <Route path="/clock" component={Clock} exact />
        <Route path="/post-list" component={PostList} />
        <Route path="/album" component={AlbumFeature} />
        <Redirect from="/test" to="/clock" />
      </Switch>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
