import React from 'react';
import RouteSplitter from 'components/RouteSplitter';


function renderRoutesInPath(routes, basePath = '') {
    return routes.map(route => {
        const { path, ...rest } = route;
        if (path) {
			return <RouteSplitter key={`${basePath}${path}`} path={`${basePath}${path}`} {...rest} />
		}

        return <RouteSplitter key={`${basePath}` || '404'} {...rest} />
    });
};

export default renderRoutesInPath;