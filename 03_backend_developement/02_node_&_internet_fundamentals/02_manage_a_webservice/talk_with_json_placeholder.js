const request = require("request");

function fetchPosts(output) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchPostByUser(userId,output) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/?userId=${userId}`,
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchPost(Id,output) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${Id}`,
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchUsers(output) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchUser(userId,output) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchComments(output) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function fetchCommentsByPost(postId,output) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments/?postId=${postId}`,
      method: "GET"
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function publishPost(myuserId,mytitle,mybody,output) {

  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts/",
      method: "POST",
      form: {
        userId: myuserId,
        title: mytitle,
        body: mybody
      }
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function publishComment(mypostId,myname,myemail,mybody,output) {

  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments/",
      method: "POST",
      form: {
        postId: mypostId,
        name: myname,
        email: myemail,
        body: mybody
      }
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function updatePostTitle(mypostId,mynewtitle,output) {

  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${mypostId}`,
      method: "PUT",
      form: {
        title: mynewtitle
      }
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function updatePostBody(mypostId,mynewbody,output) {

  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${mypostId}`,
      method: "PUT",
      form: {
        body: mynewbody
      }
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function updatePost(mypostId,mynewtitle,mynewbody,output) {

  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${mypostId}`,
      method: "PUT",
      form: {
        title: mynewtitle,
        body: mynewbody
      }
    },
    function (error,response,body) {
      output(body);
    }
  );
}

function callback(result) {
  console.log(result);
}

fetchPosts(callback);
fetchPostByUser(1, callback);
fetchPost(1, callback);
fetchUsers(callback);
fetchUser(1, callback);
fetchComments(callback);
fetchCommentsByPost(1, callback);
publishPost(1, "title", "body", callback);
publishComment(1, "name", "email", "body", callback);
updatePostTitle(1, "newTitle", callback);
updatePostBody(1, "newBody",callback);
updatePost(1,"newTitle","newBody",callback);

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments:fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost:publishPost,
  publishComment:publishComment,
  updatePostTitle:updatePostTitle,
  updatePostBody:updatePostBody,
  updatePost:updatePost
};
