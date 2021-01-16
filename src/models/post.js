export class Post {
    constructor(username, postTitle, postId, postShortDescription, postLongDescription, publishDate){
        this.username = username;
        this.postId = postId;
        this.postTitle = postTitle;
        this.postLongDescription = postLongDescription;
        this.postShortDescription = postShortDescription;
        this.publishDate = publishDate;
    }
}