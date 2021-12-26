import "./styles.css";

//simple function
// const isOne = num => num === 1;
// function isOne(num) {
//   return num === 1;
// }
// console.log(isOne(12));

//Using more than one parameter
// const isBigger = (a,b) => a>b;
// console.log( "Is 2 Bigger than 3", isBigger(2,3));

// Doing morethan One thing
// const pringAndReturn = a => {
//   console.log("squerring a..");
//   return a*a;
// }
// console.log(pringAndReturn(10))
// pringAndReturn(10)

//Returning an object
// const returnObject = a => ({value:a})
// function returnObject(a) {
//   return {value: a};
// }
// console.log(returnObject("kuldeep"))

//Default parameters
// const defaultExample = (a,b=5) => a+b;
// console.log(defaultExample(2,3));
// console.log(defaultExample(23));

// const defaultExample = ( a , b=5 , c=1) => a + b + c;
// console.log(defaultExample(2,3,4));
// console.log(defaultExample(23));

//REST & SPREAD
// const restOperator = (a,...rest) => {
//   console.log(a,rest);
// }
// console.log(restOperator(2,3,4,5,6));

// const spreadOpertaor = ({a:aalo ,b: bhaalo}) => {
//   console.log(aalo,bhaalo);
// }
// const obj = {a:1, b:2};
// spreadOpertaor(obj);

const array = [1, 2, 3];
const spreadOpertaorTwo = (arg) => {
  const [first, ...rest] = arg;
  console.log(first, rest);
};
spreadOpertaorTwo(array);
spreadOpertaorTwo([...array, 22, 23]);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
