/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
Directions:

Create an object called facebookProfile. The object should have 3 properties:

    your name
    the number of friends you have, and
    an array of messages you've posted (as strings)

The object should also have 4 methods:

    postMessage(message) - adds a new message string to the array
    deleteMessage(index) - removes the message corresponding to the index provided
    addFriend() - increases the friend count by 1
    removeFriend() - decreases the friend count by 1

*/

var facebookProfile = {
    name: "Steven Till",
    friends: 1,
    messages: ["Here's a post!", "Looke at my status.", "And another post."],
    
    addFriend: function (){
      facebookProfile.friends += 1;
      return facebookProfile.friends;
    },
    removeFriend: function (){
      facebookProfile.friends -= 1;
      return facebookProfile.friends;
    },
    
    postMessage: function(string) {
        facebookProfile.messages.push(string);
        return facebookProfile.posts;
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
        return facebookProfile.posts;
    }
};



// facebookProfile.postMessage("I just created this post!");
// facebookProfile.deleteMessage(2);

//console.log(facebookProfile.messages);


