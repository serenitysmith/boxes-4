
import './App.css';
import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
  // Define a state variable 'squares' and a function 'setSquares'
    // Initial value of 'squares' is set to the 'boxes' array
    const [squares, setSquares] = React.useState(boxes)
    // Define a function called 'toggle' that takes an 'id' parameter
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        // CREATE A NEW ARRAY WITH THE UPDATED STATE TO TOGGLE 


         // Create a new array 'updatedSquares' based on the current 'squares' state
        const updatedSquares = squares.map(square =>{
          if (square.id === id){

            // Toggle the 'on' property for the specific square using the spread operator
                // This returns a new square object with the 'on' property flipped (true to false, or vice versa)
            // toggle the on property for the specific square
            return { ...square, on: !square.on};
          }
          // For squares that don't match the 'id', return them as they are (no change)
          return square;
        });
         // Update the state of 'squares' with the new 'updatedSquares' array
        // update the square with the new array
        setSquares(updatedSquares);
    }
   // / Create an array of React components (Box components) based on the 'squares' state
    const squareElements = squares.map(square => (

     // / Create a 'Box' component for each square with the following props:
        // - 'key' is set to the 'id' of the square for React to efficiently update the list
        // - 'id' is set to the 'id' of the square
        // - 'on' is set to the 'on' property of the square (presumably to determine if it's active)
        // - 'toggle' is set to an anonymous function that calls the 'toggle' function with the 'id' as an argument
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            // add a function to the toggle elements that has the ID in it 
            toggle={() => toggle (square.id)}// Pass the id to the toggle function
        />
    ))
     /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        // cant use splice becuase thats diretly modifying the state
        // to do this . The toggle function should update the on property of the square with the specified id in the squares array without directly modifying the state. To achieve this, you can create a new array with the updated state and then use setSquares to update the state. 

         // Render all the 'squareElements' within a 'main' element
    return (
        <main>
            {squareElements}
        </main>
    )
}

// this defines a React functional component named App.

// Inside the component, it initializes a state variable squares using React.useState, with an initial value of the boxes array.

// It defines a toggle function that takes an id parameter. Inside the toggle function:

// It creates a new array updatedSquares by mapping over the current squares state.
// For the square with a matching id, it creates a new square object using the spread operator to toggle the on property (from true to false, or vice versa).
// For squares that don't match the id, it returns them as they are (no change).
// It then updates the state of squares with the new updatedSquares array.
// It maps over the squares array and creates a React component (Box) for each square, passing the key, id, on, and an anonymous function that calls toggle with the square's id as props.

// Finally, it renders all the squareElements within a main element.

// The purpose of this code is to create a grid of square components (represented by Box components), each of which has its own id and on state. When a square is clicked, the toggle function is called to toggle the on property of that square, and the updated state is reflected in the UI.


// We use the map function to create a new array (updatedSquares) based on the existing squares array. For the square with the specified id, we toggle the on property using the spread operator ({ ...square, on: !square.on }), while keeping the other properties unchanged.

// We then call setSquares with the updatedSquares array to update the state.

// When rendering the Box components, we pass the toggle function with the square's id as an argument so that it knows which square to toggle when clicked.