# Frontend Mentor - Advice generator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
![Screenshot 2023-08-08 at 22-38-57 Frontend Mentor Advice generator app](https://github.com/davupls/Advice-Api-Webpage/assets/47851457/32a7c481-4dff-47ac-a91e-4ff48ddfe2ed)




### Links

- Solution URL: [Github Repo](https://github.com/davupls/Advice-Api-Webpage)
- Live Site URL: [Live Website](https://advice-api-webpage.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

```js
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
// Theres multiple ways to fetch data using try and catch is one.
```

## Author

- Website - [David McLean](https://www.davidmlean.dev)

