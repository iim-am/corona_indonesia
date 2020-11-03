import React, {Component} from 'react';

class RecoveredData extends Component{

    constructor(props){
        super(props);
        this.state = {
            isError : false,
            recovered: {}
        };
    };

    componentDidMount() {
        fetch('https://api.kawalcorona.com/sembuh')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recovered : data 
                })
                console.log(this.state.recovered)
            })
            .catch((error => {
                console.error(error);
                this.setState({
                    isError:true
                })
            }));
    }

    render(){
        if(this.state.isError){
            return (
                <div class="jumbotron darkFont">
                <h1 class="sectionhead">Berita Covid-19 Indonesia</h1>
                
                </div>
                )
        } else {
        return (
            <div class="jumbotron smallmargin"> 
            {/* {this.state.corona.map((corona) => (
                <div><p>{corona}</p></div>
            ))} */}
            {/* <div><p>{this.state.recovered}</p></div> */}
            </div>
        );
                    
    }
    }
}

export default RecoveredData;