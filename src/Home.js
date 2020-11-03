import React, {Component} from 'react';
import Data from './Data';
import Navbar from './navbar';
import RecoveredData from './RecoveredData';

class Home extends Component {
    render(){
        return(
            <div >
            <Navbar />
            <div class="container-fluid darkContr">
            <Data />
            <h5 class="center">Last Update :  3 november 2020 </h5>
            <RecoveredData />
            </div>
            </div>
        );
    }
}

export default Home;