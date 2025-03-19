// problem 1

movies = {
    A: ["a_movie1", "a_movie2", "a_movie3"],
    B: ["b_movie1", "b_movie2", "b_movie3"],
    C: ["c_movie1", "c_movie2", "c_movie3"],
};

let user_grade = prompt("Enter your grade of OTT service: ");

if (user_grade == "A") {
    console.log(movies.A.toString());
    console.log(movies.B.toString());
    console.log(movies.C.toString());
} else if (user_grade == "B") {
    console.log(movies.B.toString());
    console.log(movies.C.toString());
} else if (user_grade == "C") {
    console.log(movies.C.toString());
} else {
    throw Error("Undefined grade.");
}
