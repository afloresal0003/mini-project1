
/*
VALIDATION ONE: 
Only to check if user has uppercase letter and number
*/
function isUpper(str) {
    return /[A-Z]/.test(str);
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

const submitReview = () => {

    const characterLim = 200;
    const movieInput = document.querySelector('#movie').value;
    const reviewInput = document.querySelector('#review').value;
    
    if(reviewInput.length > characterLim){
        document.getElementById("review").style.borderColor = "red";
        alert("Error! Please keep reviews to 200 characters!");
    }

    // Check if there is at least one uppercase letter within
    if(isUpper(movieInput) == false){
        document.getElementById("review").style.borderColor = "red";
        alert("Error! Please include a capital letter!");
    }

    if(hasNumber(movieInput) == false){
        document.getElementById("review").style.borderColor = "red";
        alert("Error! Please include a number!");
    }
    else{
        firebase.database().ref().push({
            review: reviewInput
        });
    }
};