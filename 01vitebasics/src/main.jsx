//  This all the import file are coming that time you install node_modules.
//  The app.jsx file is inject with the another file 
import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 

// You create your function and check to run with the help of render.
// In this file this is making a tree structure behind the 

function MyApp(){
    return (
        <div>
            <h1>sumitgujariya??</h1>
        </div>
    )
}


// This will custom react code by writen somebody.
// This tree making the time to execute the file.
// The code will convert the behind of tree structure like this.

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// }; 

 const anotherElement = (
    <a href="https://google.com" target='_blank'>
    Visit google</a>
 )

 const anotherUsername = "sumit kumawat"
 // After building all the tree we inject the variables
 const reactElement = React.createElement(
    'a', 
    {href: "https://google.com", target: '_blank'},
    'click on the link off google',
    anotherUsername
 )

createRoot(document.getElementById('root')).render(
    reactElement
)
