
const defaultResult = 0;
let currentResult =defaultResult;


// function add(x, y){
//      const result = currentResult + userInput.value; 
//      return result;
// };

// currentResult = add(6 , 4);

// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = 'An error occurred!';


function add(){
currentResult = currentResult + parseInt(userInput.Value);
outputResult(currentResult, '');
};


addBtn.addEventListener('click', add);


//($ {defaultResult} + 10) * 3 / 2- 1;

outputResult(currentResult, calculationDescription); 


