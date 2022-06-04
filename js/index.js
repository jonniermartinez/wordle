const Word = "mundo";
const secretWord = Word.split('');
const letter = [];
const positions = [];

let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];

let colors1
let colors2
let colors3
let colors4
let colors5

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

// si word1 == green en todos los lados ha ganado 

const lestPlay = () =>{
    switch (event.keyCode) {
        case 13:
            if (letter.length === 5){
              checkedWords();
              saveWord1();
              PintTheColor();
              addWord1(); 
                // Dependiendo donde este escribiendo asi mismo guarda el contenido en la variable indicada 
            }else{
                console.log("Te hacen falta letras")
            }
            break;
        case 8:
            letter.pop()
            addLetters();
            break;
        default:
        if (letter.length < 5){
            letter.push(event.key)
            addLetters();
        }
         break;
    }
   }
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
    }
}
const saveWord1 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word1 = [...letter];
    colors1 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
}
const saveWord2 = () => {
    // Guarda la palabra en el nuevo array y limpia el original 
    word2 = [...letter];
    colors2 = [...positions];
    letter.splice(0, letter.length);
    positions.splice(0, positions.length);
}
const addLetters = () =>{
    // si word1 == 5 y por lo menos hay un amarillo o un gris seguir escribiendo en la proxima row
    /* if (word1 == 5 && colors1.some("hay un gris o un amarillo")){
        
    }*/
   if (word1.length < 5){
        row1tile1.textContent = letter[0]; 
        row1tile2.textContent = letter[1]; 
        row1tile3.textContent = letter[2]; 
        row1tile4.textContent = letter[3]; 
        row1tile5.textContent = letter[4]; 
    }else if (word2.length < 5){
        row2tile1.textContent = letter[0]; 
        row2tile2.textContent = letter[1]; 
        row2tile3.textContent = letter[2]; 
        row2tile4.textContent = letter[3]; 
        row2tile5.textContent = letter[4]; 
    }
}

const addWord1 = () => {
    row1tile1.textContent = word1[0]; 
    row1tile2.textContent = word1[1]; 
    row1tile3.textContent = word1[2]; 
    row1tile4.textContent = word1[3]; 
    row1tile5.textContent = word1[4]; 
}
const PintTheColor = (i) => {
    row1tile1.classList.add(`${colors1[0]}`)
    row1tile2.classList.add(`${colors1[1]}`)
    row1tile3.classList.add(`${colors1[2]}`)
    row1tile4.classList.add(`${colors1[3]}`)
    row1tile5.classList.add(`${colors1[4]}`)
}
const deleteColor = () => {
    row1tile.classList.remove(`${positions[0]}`)
    row1tile2.classList.remove(`${positions[1]}`)
    row1tile3.classList.remove(`${positions[2]}`)
    row1tile4.classList.remove(`${positions[3]}`)
    row1tile5.classList.remove(`${positions[4]}`)
}
document.addEventListener("keydown", function(event) {
    // console.log(event)
     lestPlay()
 });
