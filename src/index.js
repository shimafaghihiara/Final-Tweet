import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './components/theme';
import App from './components/App';
import {ThemeProvider} from "@material-ui/styles";
import { Suspense } from 'react';



ReactDOM.render(
    <Suspense fallback={null}>
    <ThemeProvider theme={Theme}><App/> </ThemeProvider></Suspense> ,  document.getElementById('root')
);

