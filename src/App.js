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
            const id = res.data.id;
            this.setState({id});
            console.log(res.data.data.id);
            const email = res.data.email;
            console.log(res.data.data.email);
            this.setState({email});
            const first_name= res.data.first_name;
            this.setState({first_name});
            const last_name=res.data.last_name;
            this.setState({last_name});
            const avatar=res.data.avatar;
            this.setState({avatar});


        })


    }

    render() {
        return (
            <div>
                <User/>
            </div>
        );
    }
}

export default App;
