import React from 'react'



// Given an array of string, return an array that wraps the original array in HTML <p></p> tag


const array = ['Givenchi', "Hodor", "Lanisters", "Beverly"]


const arrayP = array.map((item) => {
    
    return `<p>${item}</p>`
    
}).join(' ')

function Quiz10() {
  return (
    <div>

          {arrayP}
    </div>
  )
}

export default Quiz10