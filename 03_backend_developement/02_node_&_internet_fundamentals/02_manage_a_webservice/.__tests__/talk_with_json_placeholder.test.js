const request = require("request");
const {
  fetchPosts,
  fetchPost,
  fetchPostByUser,
  fetchUsers,
  fetchUser,
  fetchComments,
  fetchCommentsByPost,
  publishPost,
  publishComment,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePost,
  deleteComment
} = require("../talk_with_json_placeholder");

const requestPromise = options =>
  new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      resolve(body);
    });
  });

test("fetchPosts", done => {
  expect.assertions(1);

  fetchPosts(result => {
    requestPromise("http://jsonplaceholder.typicode.com/posts").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});
test("fetchPost", done => {
  expect.assertions(1);

  fetchPost(2, result => {
    requestPromise("http://jsonplaceholder.typicode.com/posts/2").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});

test("fetchPostByUser", done => {
  expect.assertions(1);

  fetchPostByUser(2, result => {
    requestPromise("http://jsonplaceholder.typicode.com/posts?userId=2").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});
test("fetchUsers", done => {
  expect.assertions(1);

  fetchUsers(result => {
    requestPromise("http://jsonplaceholder.typicode.com/users").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});
test("fetchUser", done => {
  expect.assertions(1);

  fetchUser(2, result => {
    requestPromise("http://jsonplaceholder.typicode.com/users/2").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});
test("fetchComments", done => {
  expect.assertions(1);

  fetchComments(result => {
    requestPromise("http://jsonplaceholder.typicode.com/comments").then(
      testResult => {
        expect(result).toEqual(testResult);
        done();
      }
    );
  });
});
test("fetchCommentsByPost", done => {
  expect.assertions(1);

  fetchCommentsByPost(2, result => {
    requestPromise(
      "http://jsonplaceholder.typicode.com/comments?postId=2"
    ).then(testResult => {
      expect(result).toEqual(testResult);
      done();
    });
  });
});
test("publishPost", done => {
  expect.assertions(1);

  publishPost(2, "title", "body", result => {
    requestPromise({
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      form: {
        title: "title",
        body: "body",
        userId: 2
      }
    }).then(testResult => {
      expect(JSON.parse(result)).toEqual(JSON.parse(testResult));
      done();
    });
  });
});
test("publishComment", done => {
  expect.assertions(1);

  publishComment(2, "name", "email", "body", result => {
    requestPromise({
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "POST",
      form: {
        name: "name",
        email: "email",
        body: "body",
        postId: 2
      }
    }).then(testResult => {
      expect(JSON.parse(result)).toEqual(JSON.parse(testResult));
      done();
    });
  });
});
test("updatePostTitle", done => {
  expect.assertions(1);

  updatePostTitle(2, "title", result => {
    requestPromise({
      url: "http://jsonplaceholder.typicode.com/posts/2",
      method: "PUT",
      form: {
        title: "title"
      }
    }).then(testResult => {
      expect(JSON.parse(result)).toEqual(JSON.parse(testResult));
      done();
    });
  });
});
test("updatePostBody", done => {
  expect.assertions(1);

  updatePostBody(2, "body", result => {
    requestPromise({
      url: "http://jsonplaceholder.typicode.com/posts/2",
      method: "PUT",
      form: {
        body: "body"
      }
    }).then(testResult => {
      expect(JSON.parse(result)).toEqual(JSON.parse(testResult));
      done();
    });
  });
});
test("updatePost", done => {
  expect.assertions(1);

  updatePost(2, "title", "body", result => {
    requestPromise({
      url: "http://jsonplaceholder.typicode.com/posts/2",
      method: "PUT",
      form: {
        title: "title",
        body: "body"
      }
    }).then(testResult => {
      expect(JSON.parse(result)).toEqual(JSON.parse(testResult));
      done();
    });
  });
});
