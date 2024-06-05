
fetch("https://meowfacts.herokuapp.com/")
  .then((response) => response.json())
//   .then((json) => console.log(json));
  .then((json) => document.getElementById("api").innerHTML = json.data);

// above is a GET request to retrieve a cat fact using an API

j=0
catArray = ["cat.jpg","cat2.jpg","cat3.jpg","cat4.webp","cat5.webp","cat6.webp","cat7.jpg"]

function catLoad()
{
    setInterval(display,3000)
}

function display()
{   
        document.getElementById("catImage").src = "images/" + catArray[j]
        j++
        if(j==7)
            {
                j=0
            }   
}
