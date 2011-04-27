
function indexInit(currentPage) {
    
    init(currentPage);
    
    // get blogger feed
     _.IN("http://rrrblipbeep.blogspot.com/feeds/posts/default?alt=json&callback=bloggerPostCallback");
    
}

function bloggerPostCallback(resp) {

    var post = resp.feed.entry[0];
    
    if (!post) {
        return;
    }
    
    var content = _.G('content');
    
    var title = document.createElement('h1');
    var bloganchor = document.createElement('a');
    bloganchor.href = "http://rrrblipbeep.blogspot.com/";
    bloganchor.innerHTML = post.title.$t;
    title.appendChild(bloganchor);
    
    var breadtext = document.createElement('p');
    breadtext.innerHTML = post.summary.$t;
    
    var date = new Date(post.published.$t);
    var datediv = document.createElement('div');
    datediv.className = 'date';
    datediv.innerHTML = date;
    
    content.appendChild(title);
    content.appendChild(breadtext);
    content.appendChild(datediv);
    
    // get the comments for this post
    var idstr = post.id.$t.split("blog-")[1];
    var blogID = idstr.split(".post-")[0];
    var postID = idstr.split(".post-")[1];
    _.IN("http://www.blogger.com/feeds/" + blogID + "/" + postID + "/comments/default?alt=json&callback=bloggerCommentsCallback");
    
}

function bloggerCommentsCallback(resp) {
    
    var comments = resp.feed.entry;
    
    if (!comments) {
        return;
    }
    
    var content = _.G('content');
    
    for (var i = 0, len = comments.length; i < len; i++) {
        
        var comment = document.createElement('div');
        comment.className += "comment";
        var commentAuthor = document.createElement('h1');
        commentAuthor.innerHTML = comments[i].author[0].name.$t + " said:";
        var commentBody = document.createElement('p');
        commentBody.innerHTML = comments[i].summary.$t;
        var commentDate = document.createElement('div');
        commentDate.className += 'date';
        commentDate.innerHTML = new Date(comments[i].published.$t);
        
        comment.appendChild(commentAuthor);
        comment.appendChild(commentBody);
        comment.appendChild(commentDate);
        
        content.appendChild(comment);
    }
    
}

