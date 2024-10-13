// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement=document.querySelector("main");
const backButton=document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM

const buildElement = function(mainElement, blogContent, blogIndex){
    const newArticle=document.createElement("article");

    const newTitle=document.createElement("h2");
    newTitle.textContent=blogContent[blogIndex].title;

    const newContent=document.createElement("blockquote");
    newContent.textContent=blogContent[blogIndex].content;

    const newAuthor=document.createElement("p");
    newAuthor.textContent=blogContent[blogIndex].username;

    mainElement.appendChild(newArticle);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newContent);
    newArticle.appendChild(newAuthor);
};

// TODO: Create a function that handles the case where there are no blog posts to display

const noBlogPosts = function(mainElement){
    const noContent = {
        username: "ServerMessage",
        title: "There are no blog posts to display!",
        content: "No Blog posts yet..."
    };

    const newArticle=document.createElement("article");

    const newTitle=document.createElement("h2");
    newTitle.textContent=noContent.title;

    const newContent=document.createElement("blockquote");
    newContent.textContent=noContent.content;

    const newAuthor=document.createElement("p");
    newAuthor.textContent=noContent.username;

    mainElement.appendChild(newArticle);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newContent);
    newArticle.appendChild(newAuthor);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function(mainElement, blogContent){
    if (blogContent.length !== 0){
        for (blogIndex=0; blogIndex < blogContent.length; blogIndex++){
            buildElement(mainElement, blogContent, blogIndex);
        };
    }
    else{
        noBlogPosts(mainElement)};
};

// TODO: Call the `renderBlogList` function

const blogContent = readLocalStorage(`blogContent`);
console.log(blogContent);
console.log(blogContent.length);

renderBlogList(mainElement, blogContent);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', function(){
    redirectPage('./index.html');
});