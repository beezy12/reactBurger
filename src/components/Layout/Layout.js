import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

// using Aux here so I can have components side by side
const layout = ( props ) => (
    <Aux>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
