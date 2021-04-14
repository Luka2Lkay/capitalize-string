

const btn = document.getElementById('submit-btn');
const capitalizedText = document.getElementById('capitalized');
const myForm = document.getElementById("my-form");

const capitalize = (word) =>{
    const firstLetter = word[0].toUpperCase();
    const remaining = word.slice(1,);
    const fullString = `${firstLetter}${remaining}`
    return fullString;
    
}

myForm.addEventListener('submit', e =>{
    e.preventDefault()
    capitalizedText.textContent = '';
    appendText();  
    myForm.reset();
})

const appendText = () => {
const word = document.getElementById('word').value;
const text = document.createElement('h3');
text.textContent = capitalize(word);
capitalizedText.appendChild(text)
}