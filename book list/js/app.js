/*
work Demo 
---------
1 Dom selection 
2 Event lesener
3 Basic Validation 
4 Creating Element 
5 Display to Ui append 
*/
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const booklist = document.querySelector('#booklist')

// Event lisener 
btn.addEventListener('click',function (e){
    
    e.preventDefault()
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please do not give a empty massage')
    }else{
        const newRow = document.createElement('tr')
        // create title 
        const newTitle = document.createElement('th')
        newTitle.innerText=title.value;
        newRow.appendChild(newTitle)
        

        //create Athor
        const newAthor = document.createElement('th')
        newAthor.innerText=author.value;
        newRow.appendChild(newAthor)
        

        //Create Year
        const newYear = document.createElement('th')
        newYear.innerText=year.value;
        newRow.appendChild(newYear)
        
        booklist.appendChild(newRow)
        title.value = '';
        author.value='';
        year.value='';
       
    }
})