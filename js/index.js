const Word = "mundo";
const secretWord = Word.split('');
const letter = [];
const positions = [];
const keyBoardLetter =   [
["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
["a", "s", "d", "f", "g", "h","j", "k","z", "x", "Enter", "l"],
["c", "v", "b", "n", "m","Delete"],
];
const virtualBoard = document.querySelector(".keyboard")
const alerta = document.querySelector(".EndOftheGame")


let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];

let colors1 = [];
let colors2 = [];
let colors3 = [];
let colors4 = [];
let colors5 = [];

const game = document.querySelector(".game-row");
// Row 1
const row1tile1 = document.querySelector(".row1-tile1");
const row1tile2 = document.querySelector(".row1-tile2");
const row1tile3 = document.querySelector(".row1-tile3");
const row1tile4 = document.querySelector(".row1-tile4");
const row1tile5 = document.querySelector(".row1-tile5");
// Row 2
const row2tile1 = document.querySelector(".row2-tile1");
const row2tile2 = document.querySelector(".row2-tile2");
const row2tile3 = document.querySelector(".row2-tile3");
const row2tile4 = document.querySelector(".row2-tile4");
const row2tile5 = document.querySelector(".row2-tile5");
// Row 3
const row3tile1 = document.querySelector(".row3-tile1");
const row3tile2 = document.querySelector(".row3-tile2");
const row3tile3 = document.querySelector(".row3-tile3");
const row3tile4 = document.querySelector(".row3-tile4");
const row3tile5 = document.querySelector(".row3-tile5");
// Row 4
const row4tile1 = document.querySelector(".row4-tile1");
const row4tile2 = document.querySelector(".row4-tile2");
const row4tile3 = document.querySelector(".row4-tile3");
const row4tile4 = document.querySelector(".row4-tile4");
const row4tile5 = document.querySelector(".row4-tile5");
// Row 5
const row5tile2 = document.querySelector(".row5-tile2");
const row5tile3 = document.querySelector(".row5-tile3");
const row5tile1 = document.querySelector(".row5-tile1");
const row5tile4 = document.querySelector(".row5-tile4");
const row5tile5 = document.querySelector(".row5-tile5");
// si word1 == green en todos los lados ha ganado 

const checkedWords = () => {
    // Si las letter y secrets coinciden, retornar "Correct"
    // Si no coinciden , si letters existen en la secretWord return "present" 
    // Si no coinciden, si letters no existen return "absent"
    for (let i = 0; i < 5; i++) {
        switch (true) {
            case letter[i] == secretWord[i]:
              //  console.log(`correct ${i}, ${letter[i]}, ${secretWord[i]}`);
                positions.push('green');
                break;
            case Word.includes(letter[i]):
           //     console.log(`present ${i}, ${letter[i]}`);
                positions.push('yellow');
            break;
            default:
            // console.log(`absent ${i}, ${letter[i]}, ${secretWord[i]}`)
                positions.push('gray');
                break;
        }
        addColors(i)
    }
 //   console.log(`colors1${colors1}`)
}
const finalDesition = () => {
    // checar cunado gane frenar el juego
    if (word1.length < 5){
        saveWord1();
        addWord(); 
    //    endOfTheGame(word1);
    }else if (word2.length < 5 && word1.length == 5){
      saveWord2();
      addWord(); 
    }else if (word3.length < 5 && word2.length == 5){
        saveWord3();
        addWord(); 
    }else if (word4.length < 5 && word3.length == 5){
        saveWord4();
        addWord();
    }else if (word5.length < 5 && word4.length == 5){
        saveWord5();
        addWord();
    }
}
const saveWord1 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word1 = [...letter];
    colors1 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
    row1tile1.classList.add(`${colors1[0]}`)
    row1tile2.classList.add(`${colors1[1]}`)
    row1tile3.classList.add(`${colors1[2]}`)
    row1tile4.classList.add(`${colors1[3]}`)
    row1tile5.classList.add(`${colors1[4]}`)
    // https://kervin.blog/convertir-un-array-a-string-en-javascript
    endOfTheGame(word1)
}
const saveWord2 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word2 = [...letter];
    colors2 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
    row2tile1.classList.add(`${colors2[0]}`)
    row2tile2.classList.add(`${colors2[1]}`)
    row2tile3.classList.add(`${colors2[2]}`)
    row2tile4.classList.add(`${colors2[3]}`)
    row2tile5.classList.add(`${colors2[4]}`)
    endOfTheGame(word2)
}
const saveWord3 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word3 = [...letter];
    colors3 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
    row3tile1.classList.add(`${colors3[0]}`)
    row3tile2.classList.add(`${colors3[1]}`)
    row3tile3.classList.add(`${colors3[2]}`)
    row3tile4.classList.add(`${colors3[3]}`)
    row3tile5.classList.add(`${colors3[4]}`)
    endOfTheGame(word3)
}
const saveWord4 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word4 = [...letter];
    colors4 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
    row4tile1.classList.add(`${colors4[0]}`)
    row4tile2.classList.add(`${colors4[1]}`)
    row4tile3.classList.add(`${colors4[2]}`)
    row4tile4.classList.add(`${colors4[3]}`)
    row4tile5.classList.add(`${colors4[4]}`)
    endOfTheGame(word4)
}
const saveWord5 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word5 = [...letter];
    colors5 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
    row5tile1.classList.add(`${colors5[0]}`)
    row5tile2.classList.add(`${colors5[1]}`)
    row5tile3.classList.add(`${colors5[2]}`)
    row5tile4.classList.add(`${colors5[3]}`)
    row5tile5.classList.add(`${colors5[4]}`)
    endOfTheGame(word5)
}
const addColors = (i) =>{
    if (colors1.length < 5){
        colors1.push(positions[i])
    }else if (colors1.length == 5){
        colors2.push(positions[i])
    }else if (colors2.length == 5){
        colors3.push(positions[i])
    }else if (colors3.length == 5){
        colors4.push(positions[i])
    }else if (colors4.length == 5){
        colors5.push(positions[i])
    }
}

const addLetters = () =>{
    // si word1 == 5 y por lo menos hay un amarillo o un gris seguir escribiendo en la proxima row
    /* if (word1 == 5 && colors1.some("hay un gris o un amarillo")){
        
    }*/
// QUiero que empiece a??adiendo las etras en la primera columna 
// SI la primera colomna esta llena me los meta en la segunda
// Si la primera y la segunda estan llenas los meta en la terera 
if (word1.length < 5 ){
    row1tile1.textContent = letter[0]; 
    row1tile2.textContent = letter[1]; 
    row1tile3.textContent = letter[2]; 
    row1tile4.textContent = letter[3]; 
    row1tile5.textContent = letter[4]; 
}else if (word2.length < 5 && word1.length == 5){
    row2tile1.textContent = letter[0]; 
    row2tile2.textContent = letter[1]; 
    row2tile3.textContent = letter[2]; 
    row2tile4.textContent = letter[3]; 
    row2tile5.textContent = letter[4]; 
}else if (word3.length < 5 && word2.length == 5){
    row3tile1.textContent = letter[0]; 
    row3tile2.textContent = letter[1]; 
    row3tile3.textContent = letter[2]; 
    row3tile4.textContent = letter[3]; 
    row3tile5.textContent = letter[4]; 
}else if (word4.length < 5 && word3.length == 5){
    row4tile1.textContent = letter[0]; 
    row4tile2.textContent = letter[1]; 
    row4tile3.textContent = letter[2]; 
    row4tile4.textContent = letter[3]; 
    row4tile5.textContent = letter[4]; 
}else if (word5.length < 5 && word4.length == 5){
    row5tile1.textContent = letter[0]; 
    row5tile2.textContent = letter[1]; 
    row5tile3.textContent = letter[2]; 
    row5tile4.textContent = letter[3]; 
    row5tile5.textContent = letter[4]; 
}
}
// end of the game win or fail
const endOfTheGame = (word) => {
    // cuando positions este en todo verde mostrar un resumen de que finaliza el juego
    if (word.join("") == Word){
        alerta.classList.remove("none")
        // mostrar una alerta con el resumen 
        // vaciar las variables tanto de words como de colors
    }

}
const resetGame = () => {
    row1tile1.classList.remove(`${colors1[0]}`)
    row1tile2.classList.remove(`${colors1[1]}`)
    row1tile3.classList.remove(`${colors1[2]}`)
    row1tile4.classList.remove(`${colors1[3]}`)
    row1tile5.classList.remove(`${colors1[4]}`)

    row2tile1.classList.remove(`${colors2[0]}`)
    row2tile2.classList.remove(`${colors2[1]}`)
    row2tile3.classList.remove(`${colors2[2]}`)
    row2tile4.classList.remove(`${colors2[3]}`)
    row2tile5.classList.remove(`${colors2[4]}`)

    row3tile1.classList.remove(`${colors3[0]}`)
    row3tile2.classList.remove(`${colors3[1]}`)
    row3tile3.classList.remove(`${colors3[2]}`)
    row3tile4.classList.remove(`${colors3[3]}`)
    row3tile5.classList.remove(`${colors3[4]}`)

    row4tile1.classList.remove(`${colors4[0]}`)
    row4tile2.classList.remove(`${colors4[1]}`)
    row4tile3.classList.remove(`${colors4[2]}`)
    row4tile4.classList.remove(`${colors4[3]}`)
    row4tile5.classList.remove(`${colors4[4]}`)

    row5tile1.classList.remove(`${colors5[0]}`)
    row5tile2.classList.remove(`${colors5[1]}`)
    row5tile3.classList.remove(`${colors5[2]}`)
    row5tile4.classList.remove(`${colors5[3]}`)
    row5tile5.classList.remove(`${colors5[4]}`)

    row1tile1.textContent = ""; 
    row1tile2.textContent = ""; 
    row1tile3.textContent = ""; 
    row1tile4.textContent = ""; 
    row1tile5.textContent = ""; 
    row2tile1.textContent = ""; 
    row2tile2.textContent = ""; 
    row2tile3.textContent = ""; 
    row2tile4.textContent = ""; 
    row2tile5.textContent = ""; 
    row3tile1.textContent = ""; 
    row3tile2.textContent = ""; 
    row3tile3.textContent = ""; 
    row3tile4.textContent = ""; 
    row3tile5.textContent = ""; 
    row4tile1.textContent = ""; 
    row4tile2.textContent = ""; 
    row4tile3.textContent = ""; 
    row4tile4.textContent = ""; 
    row4tile5.textContent = ""; 
    row5tile1.textContent = ""; 
    row5tile2.textContent = ""; 
    row5tile3.textContent = ""; 
    row5tile4.textContent = ""; 
    row5tile5.textContent = ""; 

    
    letter.splice(0, letter.length)
    positions.splice(0, positions.length)
    word1.splice(0, word1.length)
    word2.splice(0, word2.length)
    word3.splice(0, word3.length)
    word4.splice(0, word4.length)
    word5.splice(0, word5.length)
    colors1.splice(0, colors1.length)
    colors2.splice(0, colors2.length)
    colors3.splice(0, colors3.length)
    colors4.splice(0, colors4.length)
    colors5.splice(0, colors5.length)
    alerta.classList.add("none")


}
// Add words
const addWord = () => {
        row1tile1.textContent = word1[0]; 
        row1tile2.textContent = word1[1]; 
        row1tile3.textContent = word1[2]; 
        row1tile4.textContent = word1[3]; 
        row1tile5.textContent = word1[4]; 
        row2tile1.textContent = word2[0]; 
        row2tile2.textContent = word2[1]; 
        row2tile3.textContent = word2[2]; 
        row2tile4.textContent = word2[3]; 
        row2tile5.textContent = word2[4]; 
        row3tile1.textContent = word3[0]; 
        row3tile2.textContent = word3[1]; 
        row3tile3.textContent = word3[2]; 
        row3tile4.textContent = word3[3]; 
        row3tile5.textContent = word3[4]; 
        row4tile1.textContent = word4[0]; 
        row4tile2.textContent = word4[1]; 
        row4tile3.textContent = word4[2]; 
        row4tile4.textContent = word4[3]; 
        row4tile5.textContent = word4[4]; 
        row5tile1.textContent = word5[0]; 
        row5tile2.textContent = word5[1]; 
        row5tile3.textContent = word5[2]; 
        row5tile4.textContent = word5[3]; 
        row5tile5.textContent = word5[4]; 
}

const deleteColor = () => {
    row1tile.classList.remove(`${positions[0]}`)
    row1tile2.classList.remove(`${positions[1]}`)
    row1tile3.classList.remove(`${positions[2]}`)
    row1tile4.classList.remove(`${positions[3]}`)
    row1tile5.classList.remove(`${positions[4]}`)
};

const lestPlay = (keycode, key) =>{
    switch (keycode) {
        case "Enter":
            if (letter.length === 5){
              checkedWords();
              finalDesition();
                // Dependiendo donde este escribiendo asi mismo guarda el contenido en la variable indicada 
            }else{
                console.log("Te hacen falta letras")
            }
            break;
        case "Backspace":
            letter.pop()
            addLetters();
            break;
        default:
        if (letter.length < 5){
            letter.push(key)
            addLetters();
        }
         break;
    }
   }
document.addEventListener("keydown", function(event) {
   // console.log(event)
    lestPlay(event.key, event.key)
    // esto se esta ejecutando 3 veces*/
})
keyBoardLetter.map((letters) => {
    letters.map((l) => {
        const p = document.createElement("p");
        p.classList.add("keyBoardLetter")
        const Text = document.createTextNode(l)
        p.appendChild(Text)
     //   p.setAttribute("onclick","addLetterFromScreen()")
        virtualBoard.appendChild(p)    
        p.addEventListener(("click"), () =>{
      //      letter.push(p.textContent)

      lestPlay(p.textContent, p.textContent)
        
        })
});
});
