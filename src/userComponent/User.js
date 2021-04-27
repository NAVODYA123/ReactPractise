import React, {Component} from 'react';
import { Table } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container,Col,Row
} from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';



// creating the user component
class User extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            id: "",
            email: "",
            first_name: "",
            last_name:"",
            avatar:""
        }

    }

    componentDidMount(){

       this.setState({id:this.props.Id});
       // console.log('test log of properties ID : ' + this.state.id);
        this.setState({email:this.props.Email});
        //console.log('test log of properties ' + this.props.Email);
        this.setState({first_name:this.props.First_name});
        //console.log('test log of properties first name ' + this.props.First_name);
        this.setState({last_name:this.props.Last_name});
        //console.log('test log of properties last name ' + this.props.Last_name);
        this.setState({avatar:this.props.Avatar});


    }



render(){
        const id = this.props.Id;
        const email =this.props.Email;
        const first_name =this.props.First_name;
        const last_name= this.props.Last_name;
        const avatar = this.props.Avatar;
        const name = first_name +" "+last_name;

    return(

        <div>
            <Container fluid="md">
                <Row  className="cardRow">
                    <Col  md ={8} sm ={6}>
                        <Card style={{ width: '25rem' }}>
                            <CardBody>
                                <Col>
                                <CardImg  src={avatar} alt="Card image cap" />
                                </Col>
                                <Col >
                                <CardTitle tag="h3">Name :{name}</CardTitle>
                                <CardSubtitle tag="h4" className="mb-2 text-muted">Email :{" "+email}</CardSubtitle>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );



}
}



export default  User;