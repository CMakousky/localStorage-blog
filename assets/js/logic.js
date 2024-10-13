// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.querySelector("#toggle");
const bodyStyle = document.querySelector("body");

//Initialize blogTheme object
const blogTheme = {theme:"light"};

//Check for savedBlogTheme object in local storage
const savedBlogTheme = JSON.parse(localStorage.getItem('blogTheme'));
console.log(savedBlogTheme);

//Apply savedBlogTheme if it exists, otherwise default to light blogTheme
if(savedBlogTheme !== null){
  blogTheme.theme=savedBlogTheme.theme;
  bodyStyle.setAttribute('class', `${blogTheme.theme}`);
};

//Function to change the blog theme between light and dark
const themeChange = function(blogTheme, bodyStyle){
  if(blogTheme.theme === "light"){
    bodyStyle.setAttribute('class', 'dark');
    blogTheme.theme="dark";
  }
  else{
    bodyStyle.setAttribute('class', 'light');
    blogTheme.theme="light";
  };

  localStorage.setItem('blogTheme', JSON.stringify(blogTheme));
  
  return blogTheme;
};

//Add an event listener to the toggleButton to call the themeChange function
toggleButton.addEventListener('click', function(){
  themeChange(blogTheme, bodyStyle);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

const readLocalStorage = function(savedDataName){
  const storedData = JSON.parse(localStorage.getItem(`${savedDataName}`));
  if(storedData !== null){return storedData;}
  else{return []};
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

const storeLocalStorage = function(newDataName, newSaveData){
  storedData = readLocalStorage('blogContent');
  let moreSaveData = [];
  if(storedData[0] === undefined){
    localStorage.setItem(`${newDataName}`, JSON.stringify(newSaveData));
  }
  else{
    // moreSaveData = storedData.concat(newSaveData);
    moreSaveData = newSaveData.concat(storedData);
    localStorage.setItem(`${newDataName}`, JSON.stringify(moreSaveData));
  };
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
