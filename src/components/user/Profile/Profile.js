import React, { Component } from 'react'
import UserService from "../../../services/user.service"

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            file: "",
            cvs: "",
            userId: UserService.currentUserValue.userId
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.downloadFile = this.downloadFile.bind(this)

    }


    componentDidMount(){
        UserService.getAllfiles()
            .then(result=>{
                this.setState({
                    cvs:result.data
                })
            })
    }


    downloadFile(docId){

        UserService.downloadFile(docId)
        .then(result=>{
            console.log(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onFormSubmit(e){ 
       e.preventDefault()
       let {file, userId} = this.state
       
       UserService.uploadFiles(file, userId )
        .then(result=>{
            console.log(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onChange(e){
        this.setState({
            file: e.target.files[0]
        })
    }

    render() {

        console.log(this.state)

        const {cvs} = this.state
        return (
            <div>
                <form >

                    <h1>File Upload</h1>
                    <input type="file" onChange={this.onChange} />
                    <button onClick={this.onFormSubmit}>Upload</button>

                    <ul>

                        {cvs && cvs.map(cv=>{
                            return(
                                <>
                                    <div key={cv.id}>
                                        <li>{cv.docName}</li>
                                        <li ><a onClick={()=>this.downloadFile(cv.id)}>Download</a></li>
                                        <img src={"data:image/png;base64,"+cv.data} />
                                    </div> <br/><br/>
                                </>
                            )
                        })}

                    </ul>


                </form>

            </div>
        )
    }
}
