class CommentDto{
    constructor(comment){
        this._id = comment._id;
        this.createAt = comment.createdAt;
        this.content = comment.content;
        this.authorUsername = comment.author.username;
    }
}

module.exports = CommentDto;