import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './components/theme';
import App from './components/App';
import {ThemeProvider} from "@material-ui/styles";


ReactDOM.render(
    <ThemeProvider theme={Theme}><App/> </ThemeProvider> ,  document.getElementById('root')
);

