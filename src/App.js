import React, {Component} from 'react';
import './App.css';
import User from "./userComponent/User";
import axios from 'axios'

import { Jumbotron } from 'reactstrap';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
           // ProfileData:[],
            idSet:['1','2','3','4','5','6'],
            id :'',
            email:'',
            first_name:'',
            last_name:'',
            avatar:''
        }

    }

    componentDidMount(){
            //fetch data from API using axios.get
            // var id2 = this.state.idSet;
            //var id2= this.state.idSet.map(function (id) {
            //console.log('printing '+id2);
       // return axios.get('https://reqres.in/api/users/'+id2)



            return axios.get('https://reqres.in/api/users/2')
            .then((res)=>{

                ///code used to retrieve all data and all users and map to an array
                //const profiles = Array.from(res.data);
               // const json = JSON.stringify(res.data.data);
               // this.setState({ProfileData: json});               //
               // console.log('profile data '+ this.state.ProfileData);
                // return id;
                // });

            const id = res.data.data.id;
            this.setState({id:id});
            //console.log('test log of properties ' + this.profiles.data.id);
            const email = res.data.data.email;
            this.setState({email:email});
            const first_name= res.data.data.first_name;
            this.setState({first_name:first_name});
            const last_name=res.data.data.last_name;
            this.setState({last_name:last_name});
            const avatar=res.data.data.avatar;
            this.setState({avatar:avatar});


        });

    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <p className="lead"><h2>User Profile</h2>
                    </p>
                    <div>
                        <User Id={this.state.id}
                              Email={this.state.email}
                              First_name={this.state.first_name}
                              Last_name={this.state.last_name}
                              Avatar={this.state.avatar}/>
                    </div>
                </Jumbotron>
            </div>


        );
    }
}

export default App;
