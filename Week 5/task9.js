function searchStudents(query) {
    console.log("Searching for:", query);
}

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(
            () => fn(...args),
            delay 
        );
    }
}


module.exports = debounce;