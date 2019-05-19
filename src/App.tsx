import * as React from "react";
import * as Reactredux from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {WebRoutes} from "./routes/routes";
import store from './store'
import Header from './components/layouts/Header'
import './css/app.css'

export class App extends React.Component{
    render() {
        return (
            <Reactredux.Provider store={store}>
                <BrowserRouter>
                    <div className="app py-24">
                        <Header/>
                        {/* Here you can add your root components */}
                        <WebRoutes/>
                    </div>
                </BrowserRouter>
            </Reactredux.Provider>
        );
    }
}