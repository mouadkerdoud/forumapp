import axios from 'axios';
import UserService from "./user.service"


const API_URL = 'http://localhost:8080/api/admin/';
const headers={}

class AdminService{
    constructor(){
        UserService.currentUser.subscribe(data=>{
            this.headers = {
                "Content-Type": "application/json",
                "authorization": "Bearer " + (data ? data.token: "")
            }
        })
    }

    //User related methods
    
    addNewUser(user){
        return axios.post(API_URL + "add-user", JSON.stringify(user), {headers: this.headers})
    }

    updateUser(user){
        return axios.put(API_URL + "updateUser", JSON.stringify(user), {headers: this.headers})
    }

    deleteUser(userId){
        return axios.delete(API_URL + userId, {headers: this.headers})
    }

    findUserById(userId){
        return axios.get(API_URL + "findUserById/" + userId, {headers: this.headers})
    }

    findAllUsers(){
        return axios.get(API_URL + "users", {headers: this.headers})
    }

    numberOfUsers(){
        return axios.get(API_URL + "users-number", {headers: this.headers})
    }



    //Docs related methods


    uploadUserFiles(files, userID){
        let formData = new FormData()
        
        formData.append("files", files)
        formData.append("userId", userID)
    
        return axios.post(API_URL + "uploadUserDoc", formData, {headers: {"Content-Type":"multipart/form-data"}} )
      }

      
    updateUserFile(files,userId){
        let formData = new FormData()
        
        formData.append("files", files)
        formData.append("userId", userId)

        return axios.put(API_URL + "updateUserFile", formData, {headers: {"Content-Type":"multipart/form-data"}} )
    }

      findDocByUserId(userId){
        return axios.get(API_URL + "findDocByUserId/" + userId, {headers: this.headers}) 
      }

      getAllfiles(){
        return axios.get(API_URL + "cvs", {headers: this.headers});
     }

    //Posts related methods

    addPost(post){
        return axios.post(API_URL + "createPost", JSON.stringify(post), {headers: this.headers})
    }

    updatePost(post){
        return axios.put(API_URL + "updatePost", JSON.stringify(post), {headers: this.headers})
    }

    deletePost(postId){
        return axios.delete(API_URL + "deletePost/" + postId, {headers: this.headers})
    }

    findPostById(postId){
        return axios.get(API_URL + "findPostById/" + postId, {headers: this.headers})
    }

    
    findAllPosts(){
        return axios.get(API_URL + "posts-all", {headers: this.headers})
    }

    numberOfPosts(){
        return axios.get(API_URL + "posts-number", {headers: this.headers})
    }



    //Events related methods

    addEvent(event){
        return axios.post(API_URL + "createEvent", JSON.stringify(event), {headers: this.headers})
    }

    updateEvent(event){
        return axios.put(API_URL + "updateEvent", JSON.stringify(event), {headers: this.headers})
    }

    deleteEvent(eventId){
        return axios.delete(API_URL + "deleteEvent/" + eventId, {headers: this.headers})
    }

    findEventById(eventId){
        return axios.get(API_URL + "findEventById/" + eventId, {headers: this.headers})
    }

    
    findAllEvents(){
        return axios.get(API_URL + "events-all", {headers: this.headers})
    }

    
    numberOfEvents(){
        return axios.get(API_URL + "events-number", {headers: this.headers})
    }



    //Attendings methods

    findAllAttendings(){
        return axios.get(API_URL + "attendings", {headers: this.headers} )
    }
      
      deleteAttending(attendingId){
        return axios.delete(API_URL +  "deleteAttending/" +attendingId, {headers: this.headers})
      }

      
    numberOfAttendings(){
        return axios.get(API_URL + "attendings-number",  {headers: this.headers})
    }

}

export default new AdminService();