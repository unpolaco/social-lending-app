import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {reset} from './resetStyles';
import {css, Global} from '@emotion/core';

ReactDOM.render(
    <>
        <Global
            styles={css`
                ${reset}
            `}
        />
        <App />
    </>,
    document.getElementById('root'),
);
