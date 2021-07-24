console.log("in viewReviews.js")

function getReviews() {
    //console.log(firebase)
    const reviewsRef = firebase.database().ref()
    reviewsRef.on('value', (snapshot) => {
        const reviews = snapshot.val();
        //console.log(reviews)
        validateReviews(reviews)
    })

}

function validateReviews(reviews){
    const movieAttempt = document.querySelector("#movie").value
    for (review in reviews) {
        const reviewData = reviews[review];
        if (reviewData.movie.toString() === movieAttempt) {
            console.log("Found it!")
            console.log(reviewData.review)
            renderReviewAsHtml(reviewData.review)
            document.getElementById("tryAgain").style.visibility = "visible";
        }
    }
}

function renderReviewAsHtml(reviewContent) {
     // Hide Input Form
    const movieInput = document.querySelector('#movieInput');
    // Hide it
    movieInput.style.display = 'none';
    // Render review as HTML
    const reviewDiv = document.querySelector("#review")
    reviewDiv.innerHTML = reviewContent; 
}
