const button = document.querySelector(".btn");
const cardIdElement = document.querySelector("#advice");
const cardTextElement = document.querySelector(".text");

async function fetchAdvice() {
    console.log("feteching advice...")
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const advice = await response.json();
        cardIdElement.innerText = `Adivce #${advice.slip.id}`;
        cardTextElement.innerText = `“${advice.slip.advice}”`;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}  

button.addEventListener("click", ()=> {
    fetchAdvice();  
})