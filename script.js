const squares = document.querySelectorAll(".square");

// array
let array_sqr = [];

for (const square of squares) {
    square.addEventListener('click', changeColor)
}

function changeColor(e)  {
    const sq = e.target;
    // console.log(sq);
    sq.style.backgroundColor = 'green'
    array_sqr.push(sq.id);

    // call reverse fn when array is full
    if (array_sqr.length == 6) {
        setTimeout(() => {
            ReverseSq();
        }, 1000);
    }
}
function ReverseSq() {
    array_sqr.reverse();

    for (const [index,id] of array_sqr.entries()) {
        const reverse_sq = document.getElementById(id);

        // remove color
        setTimeout(() => {
            reverse_sq.style.backgroundColor = 'transparent';
        }, index * 1000);
        // clear array
        array_sqr = [];
    }
}

