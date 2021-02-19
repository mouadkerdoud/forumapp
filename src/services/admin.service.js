import axios from 'axios';
import UserService from "./user.service"


const API_URL = 'http://192.168.1.14:8080/api/admin/';
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

}

export default new AdminService();