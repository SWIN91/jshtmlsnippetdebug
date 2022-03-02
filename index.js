// <!-- Something's wrong in the below javascript code snippet. Find the issue and fix it.

//   <button id="btn-0">Button 1</button>
//   <button id="btn-1">Button 2</button>
//   <button id="btn-2">Button 3</button>
//   <p id="prize"></p>

//   <script>
//     const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!']
//     for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
//       //For each of our buttons when the user clicks it... 
//       document.getElementById(`btn-${btnNum}`).onclick = () => {
//         //Tell her what she's won!
//         document.getElementById("prize").innerHTML = prizes[btnNum];
//       }
//     }
//   </script> -->


//   <!--SOLUTION-->

//   <!--Remove script tags from JavaScript snippet and add it to HTML snippet.
//       Remove HTML elements/tags from JavaScript file to HTML file with appropriate syntax.-->


// <!--Something like this-->
    const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!']
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
      //For each of our buttons when the user clicks it... 
      document.getElementById(`btn-${btnNum}`).onclick = () => {
        //Tell her what she's won!
        document.getElementById("prize").innerHTML = prizes[btnNum];
      }
    }