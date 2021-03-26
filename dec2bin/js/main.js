const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binary(e) {

    e.preventDefault();
    const num = document.getElementById('number').value;
    // console.log(typeof Number(num))
    if (num === '') {
        alert('Please enter  a valid number');
    } else if (num <= 0) {
        alert('Please enter a positive number');
    } else {
        result.style.visibility = 'visible';
    }

    binaryNumber2 = Number(num).toString(2);

    result.innerText = binaryNumber2;



}

submit.addEventListener('click', binary);