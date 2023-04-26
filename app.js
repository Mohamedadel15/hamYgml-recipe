let inputText = document.querySelector(".input-text");
let btnOfSearch = document.getElementById("input-btn");
let containerOfCards = document.querySelector(".container")
let fixedSection = document.querySelector(".fixed")




// www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchName}


// action for the button search in the input felid
btnOfSearch.addEventListener("click",getInputValue);


// function it used to return info from apis meals
function getInputValue(){

    let mealSearchName = inputText.value.trim(); 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealSearchName}`)
    .then(res=>res.json())
    .then((data)=>{
        if(data.meals==null){
            containerOfCards.innerHTML="";
            containerOfCards.innerHTML=`
            <div class="messageNotFond">
                <h1>not found</h1>
                <p>please enter the valid for the meals & try again </p>
            </div>
            `
        }else{
            containerOfCards.innerHTML="";
            data.meals.forEach(element => {
                containerOfCards.innerHTML+=`
                <div class="cards">
                    <div class="cards-image">
                        <img class="card-meals-image" src="${element.strMealThumb}" alt="meals images" draggable="false">
                    </div>
                    <div class="cards-text">
                        <div class="meals-name"><h2>${element.strMeal}</h2></div>
                        <button class="more-details" idData="${element.idMeal}">more details</button>
                    </div>
            </div>`})

            // action when user press to the button more details 
            document.querySelectorAll(".more-details").forEach((e)=>{
                e.addEventListener("click",()=>{
                    let id =e.getAttribute("idData")
                    getInfoById(id);
                    fixedSection.classList.remove("displayNone")
                })
            }) 
        } 
    })
    }


    // function it used to take the id for all meals & return the all info about this meal  in the fixed section  
    function getInfoById(id){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then((data)=>{
            fixedSection.innerHTML=`
        <div class="container-fixed ">
            <button class="close"><img src="./images/close-button.png" alt="button to close the fixed page"></button>
            <h1 class="name">${data.meals[0].strMeal}</h1>
            <h2 class="country">${data.meals[0].strArea}</h2>
            <p class="detail-about-meal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eaque in reprehenderit magni dicta minus sit? Sequi nisi excepturi recusandae facere fugit, libero provident error veritatis debitis non ut perferendis.</p>
            <img src="${data.meals[0].strMealThumb}" alt="image meal" class="fixedImage" draggable="false">
            <a href="${data.meals[0].strYoutube}" class="link-youtube" target="_blank">watch video >>></a>
        </div>
            `
            document.querySelector(".close").addEventListener("click",()=>{
                fixedSection.classList.add("displayNone")
            })

        })
    }


