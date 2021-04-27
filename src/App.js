import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import User from "./userComponent/User";
import axios from 'axios'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            id :'',
            email:'',
            first_name:'',
            last_name:'',
            avatar:''
        }

    }

    componentDidMount(){

        axios.get('https://reqres.in/api/users/2').then((res)=>{
            const id = res.data.data.id;
            this.setState({id});
           // console.log(res.data.data.id);
            const email = res.data.data.email;
            //console.log(res.data.data.email);
            this.setState({email});
            const first_name= res.data.data.first_name;
            console.log('thus is the email retrieved in  parent class app'+ this.state.email);
            //console.log(res.data.data.first_name);
            this.setState({first_name});
            const last_name=res.data.data.last_name;
            this.setState({last_name});
            const avatar=res.data.data.avatar;
            //console.log(res.data.data.avatar);
            this.setState({avatar});


        })


    }

    render() {
        return (
            <div>
                {this.state.id && this.state.email && this.state.first_name && this.state.last_name && this.state.avatar}
                <User Id={this.state.id}
                      Email={this.state.email}
                      First_name={this.first_name}
                      Last_name={this.state.last_name}
                      Avatar={this.state.avatar}
                />
            </div>
        );
    }
}

export default App;
