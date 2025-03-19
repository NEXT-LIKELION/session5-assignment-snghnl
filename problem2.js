// problem 2

lines = 20;
max_num_of_stars = 2 * lines - 1;

for (let i = 1; i <= lines; i++) {
    num_of_stars = 2 * i - 1;
    num_of_blank = max_num_of_stars - num_of_stars;

    let row = [];

    for (let j = 0; j < num_of_blank / 2; j++) {
        process.stdout.write(" ");
    }
    for (let j = 0; j < num_of_stars; j++) {
        process.stdout.write("*");
    }
    for (let j = 0; j < num_of_blank / 2; j++) {
        process.stdout.write(" ");
    }

    process.stdout.write("\n");
}
