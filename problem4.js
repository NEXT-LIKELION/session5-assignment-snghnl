let john = { name: "dbb", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];

function make_full_name(person) {
    const { name, surname, id } = person;
    full_name = name + " " + surname;

    return { fullName: full_name, id: id };
}

let users_with_fullname = users.map((element) => make_full_name(element));

console.log(users_with_fullname);
