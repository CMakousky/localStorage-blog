// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement=document.querySelector("main");
const backButton=document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM

const buildElement = function(mainElement, blogContent, blogIndex){
    //Create a new "article" HTML element
    const newArticle=document.createElement("article");

    //Create a new "h2" HTML element
    const newTitle=document.createElement("h2");
    //Assign the value of the `blogContent[blogIndex].title` data to the new "h2" element
    newTitle.textContent=blogContent[blogIndex].title;

    //Create a new "blockquote" HTML element
    const newContent=document.createElement("blockquote");
    //Assign the value of the `blogContent[blogIndex].content` data to the new "blockquote" element
    newContent.textContent=blogContent[blogIndex].content;

    //Create a new "p" HTML element
    const newAuthor=document.createElement("p");
    //Assign the value of the `blogContent[blogIndex].username` data to the new "p" element
    newAuthor.textContent=blogContent[blogIndex].username;

    //Append the `newArticle` to the `mainElement`
    mainElement.appendChild(newArticle);
    //Append the `newTitle`, `newContent`, and `newAuthor` to the `newArticle` element
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newContent);
    newArticle.appendChild(newAuthor);
};

// TODO: Create a function that handles the case where there are no blog posts to display

const noBlogPosts = function(mainElement){
    const noContent = [{
        username: "ServerMessage",
        title: "There are no blog posts to display!",
        content: "No Blog posts yet..."
    }];

    buildElement(mainElement, noContent, 0);

    // const newArticle=document.createElement("article");

    // const newTitle=document.createElement("h2");
    // newTitle.textContent=noContent.title;

    // const newContent=document.createElement("blockquote");
    // newContent.textContent=noContent.content;

    // const newAuthor=document.createElement("p");
    // newAuthor.textContent=noContent.username;

    // mainElement.appendChild(newArticle);
    // newArticle.appendChild(newTitle);
    // newArticle.appendChild(newContent);
    // newArticle.appendChild(newAuthor);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function(mainElement){
    //Check the `localStorage` for existing `blogContent`
    const blogContent = readLocalStorage(`blogContent`);
    console.log(blogContent);
    console.log(blogContent.length);

    //Call the `buildElement` function if `blogContent` has an array length other than zero
    if (blogContent.length !== 0){
        //Execute `buildElement` for each object in the `blogContent` array
        for (blogIndex=0; blogIndex < blogContent.length; blogIndex++){
            buildElement(mainElement, blogContent, blogIndex);
        };
    }
    //Call the `noBlogPosts` function if `blogContent` has an array length of zero
    else{
        noBlogPosts(mainElement)};
};

// TODO: Call the `renderBlogList` function

renderBlogList(mainElement);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', function(){
    redirectPage('./index.html');
});