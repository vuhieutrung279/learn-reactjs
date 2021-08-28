import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailAlbum from './pages/DetailAlbum';
import ListAlbum from './pages/ListAlbum';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <Switch>
                <Route component={DetailAlbum} path={`${match.path}/:id`} />
                <Route component={ListAlbum} path={match.path} exact />
            </Switch>
        </div>
    );
}

export default AlbumFeature;