// 1. DOM  Selection
// 2. Event Listner 
// 3. Basic Validation
// 4. Creating Elements 
// 5. Append

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click',function(e){
    e.preventDefault();
    
    // input validation check
    if (title.value == '' && author.value =='' && year.value == ''){
        alert('Please input some data!');
    }else{
        const newRow = document.createElement('tr');

        // creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // creating new author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //creating new year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        //show the bookList to the ui
        bookList.appendChild(newRow);

    }

})