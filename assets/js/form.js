// TODO: Create a variable that selects the form element

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('error');

console.log(readLocalStorage('blogContent'));

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

const saveBlogContent = function(usernameInput, titleInput, contentInput, errorMessage){
  //Save related form data as an array containing a javascript object
  const blogContent = [{
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim()
  }];

  //Display error message if form is missing data
  if (blogContent[0].username === '' || blogContent[0].title === '' || blogContent[0].content === '') {errorMessage.hidden=false}
  else {
    //Use the storeLocalStorage function to save the new blog data
    storeLocalStorage(`blogContent`, blogContent);
    console.log(blogContent);
    
    //Redirect to Blog page
    redirectPage('./blog.html');
  };
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveBlogContent(usernameInput, titleInput, contentInput, errorMessage);
});