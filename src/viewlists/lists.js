import React from "react";
import { Updatestate } from '../index'
import axios from 'axios';
//import {ListCard} from "../cards/viewlistcard"
import {updateformstate} from "../createlist/listform";
import listform from "../createlist/listform"
import {Form_of_list} from "../createlist/listform"

function update(data) {
    console.log("inside update")
    console.log(data)
    Updatestate({ "taskdata": data })
    Updatestate({ "tasks": true })
    Updatestate({ "lists": false })
    return (
        <div></div>
    )
}
 function Deletelist(data)
    {
    axios
    .post('http://127.0.0.1:3000/api/v1/lists/delete/'+data.listId+'/'+this.props.logineddata.data.data.authToken)
    .then(response => {
        alert("Deleted Successfully")
        console.log(response)
        updatedelete();
    })
    .catch(error => {
        alert("error")
        console.log(Error)
    })
 return(
     <div> </div>

     )
  
    }
    
   function updatedelete() {
        console.log('entered viewing lists')
        //console.log(this.props.logined.data)
        console.log(this.props.logineddata.data.data.userDetails.userId)
        axios
            .get('http://127.0.0.1:3000/api/v1/lists/all/' + this.props.logineddata.data.data.userDetails.userId + '/' + this.props.logineddata.data.data.authToken)
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data })
                let actualdata;
                actualdata = (this.state.data).map((cd) => <this.ListCard key={cd.listId} data={cd} authToken={this.props.logineddata.data.data.authToken} call={this.componentDidMount}/>)
                this.setState({ carddata: actualdata })
                console.log('response got')
                this.componentDidMount();

            })
            .catch(error => { console.log('error') })
    
        }
       
   function tochangestate(val){

    console.log("entered in change state")
            Updatestate({"listsedit":true});
            Updatestate({"listId":val});
          //  Updatestate({"lists":false});
        
        }
class Lists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            userdata: {},
            carddata: undefined
        }
        //this.logindata=this.logindata.bind(this)
        // this.check=this.check.bind(this)
        console.log(this.props)
        tochangestate=tochangestate.bind(this)
        Deletelist=Deletelist.bind(this);
        updatedelete=updatedelete.bind(this);
    }
    logindata() {
        //    this.setState({userdata:this.props.datalog})
    }
    ListCard(props) {

          return (
            <div>
                <html>
                    <head>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                    </head>
                    <body>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="container">
                                <div className="row" >
                                    <div className="col-md-6">
                                        <div className="card text-white bg-info " style={{ maxWidth: "18rem", marginBottom: "5%" }}>

                                            <div className="card-body">
                                                <h5 className="card-title">{props.data.title}</h5>
                                                <small className="text" style={{ fontFamily: "Comic Sans MS", marginLeft: "50%" }}>checking</small>
                                                <hr />
                                                <p className="card-text">{props.data.description}</p>
                                                <button className="btn btn-dark" style={{ marginRight: "5%", width: "30%" }}  onClick={() => tochangestate(props.data.listId) }>Edit</button>
                                                <button className="btn btn-dark" style={{ marginRight: "5%", width: "30%" }} onClick={() => update(props.data)}>View</button>
                                                <button className="btn btn-dark" style={{ width: "30%" }} onClick={()=> Deletelist(props.data) } >Delete</button>
                                                <p className="card-text" >
                                                    <small className="text" style={{ fontFamily: "Comic Sans MS", marginLeft: "50%" }}>Created </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
            </div>
        )
    }


    componentDidMount() {
        console.log('entered viewing lists')
        //console.log(this.props.logined.data)
        console.log(this.props.logineddata.data.data.userDetails.userId)
        axios
            .get('http://127.0.0.1:3000/api/v1/lists/all/' + this.props.logineddata.data.data.userDetails.userId + '/' + this.props.logineddata.data.data.authToken)
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data })
                let actualdata;
                actualdata = (this.state.data).map((cd) => <this.ListCard key={cd.listId} data={cd} authToken={this.props.logineddata.data.data.authToken} call={this.componentDidMount}/>)
                this.setState({ carddata: actualdata })
                console.log('response got')

            })
            .catch(error => { console.log('error') })
    
        }


    render() {
        return (

            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                </head>
                <body>

                    <div>

                        <div style={{ marginBottom: "10%" }}>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-#04192E" style={{ backgroundColor: "#04192E" }}>
                                <a className="navbar-brand" href="#">ToDo List</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbagler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav" style={{ marginLeft: "50%" }}>
                                        <a className="nav-item nav-link active" >ViewLists <span
                                            className="sr-only">(current)</span></a>
                                        <a className="nav-item nav-link active" onClick={()=>{ Updatestate({"createlist":true}) ;Updatestate({"lists":false})} }>CreateLists</a>
                                        <a className="nav-item nav-link active" onClick={()=>{ Updatestate({"login":true}) ;Updatestate({"lists":false})} }>Logout</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <div>
                            </div>
                        </div>
                        {this.state.carddata}
                    </div>
                </body>
            </html>

        )
        // Updatestate({viewlists:false})

    }
}

export default Lists