export const sortByName = (a, b) => {
    let value = 0;

    if (a.name > b.name) { return 1 }
    if (b.name > a.name ) { return -1 }

    return value;
}