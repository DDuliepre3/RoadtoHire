////////////// OBJECT CONSTRUCTOR

/* 

Create an object constructor for movies that includes properties for title,
director, writer, release date, and rating. Include a trailer() method
that prints “[movie name], written by [writer] and directed by [director],
will be released on [release date].” Include an audience() method that
prints “For audiences above the age of 16.” if the rating is R, “For audiences
above the age of 12.” if the rating is PG-13, “Parental guidance suggested” if
the rating is PG, and “For general audiences.” if the rating is G.

*/

function Movie (title, director, writer, releaseDate, rating) {
    this.title = title;
    this.director = director;
    this.writer = writer;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.trailer = function () {

    };
}

Movie.prototype.trailer = function () {
    console.log('${this.title}, written by ${this.director}, will be released on ${this.releaseDate}.')
};

Movie.prototype.audience = function () {
    if (this.rating === "R") {
        console.log("For audiences above the age of 16.");
    }   else if (this.rating === "PG-13") {
        console.log("For audiences above the age of 12.");
    }   else if (this.rating === "PG") {
        console.log("Parental guidance suggested.");
    }   else {
        console.log("This was not a proper rating...");
    }
};

var missionImpossible = new Movie('Mission Impossible: Fallout', 'Christopher McQuarrie', 'Christopher McQuarrie', 'June 2018', 'PG-13');
missionImpossible.trailer();
missionImpossible.audience();