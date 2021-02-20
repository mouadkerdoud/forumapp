import axios from 'axios';
import {BehaviorSubject} from 'rxjs';

const API_URL = 'http://192.168.1.11:8080/api/user/';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

class UserService {

  get currentUserValue() {
    return currentUserSubject.value;
  }

  get currentUser() {
    return currentUserSubject.asObservable();
  }


//User related methods
  login(user) {
    //btoa: Basic64 encryption
    const headers = {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    };

    return axios.get(API_URL + 'login', {headers: headers})
          .then(response => {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            currentUserSubject.next(response.data);
          });
  }

  logOut() {
    return axios.post(API_URL + "logout", {})
            .then(response => {
              localStorage.removeItem('currentUser');
              currentUserSubject.next(null);
            });
  }

  register(user) {
    return axios.post(API_URL + 'registration', JSON.stringify(user),
    {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }


//Documents

  uploadUserFiles(files, userID){
    let formData = new FormData()
    
    formData.append("files", files)
    formData.append("userId", userID)

    return axios.post(API_URL + "uploadUserDoc", formData, {headers: {"Content-Type":"multipart/form-data"}} )
  }

  getAllfiles(){
     return axios.get(API_URL + "docs");
  }

  findDocByUserId(userId){
    return axios.get(API_URL + "findDocByUserId/" + userId) 
  }

//Posts related methods

  findAllPosts() {
    return axios.get(API_URL + "posts");
  }

  findPostById(postId){
    return axios.get(API_URL + "findPostById/" + postId)
}


//Events related methods

findAllEvents() {
  return axios.get(API_URL + "events");
}

findEventById(eventId){
  return axios.get(API_URL + "findEventById/" + eventId, {headers: this.headers})
}


attendEvent(attending){
  return axios.post(API_URL + 'attendEvent', JSON.stringify(attending),
    {headers: {"Content-Type":"application/json; charset=UTF-8"}});
}


findAllAttendings(){
  return axios.get(API_URL + "attendings",
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
}

deleteAttending(attendingId){
  return axios.delete(API_URL +  "deleteAttending/" +attendingId, {headers: this.headers})
}


}

export default new UserService();