const numbers : number[] = [1, 2, 3, 4, 5];

numbers.forEach((number:number, index :number, array)   => {
  console.log(number, index, array);
});
// out put : 1 0 [ 1, 2, 3, 4, 5 ]
// out put : 2 1 [ 1, 2, 3, 4, 5 ]
// out put : 3 2 [ 1, 2, 3, 4, 5 ]
// out put : 4 3 [ 1, 2, 3, 4, 5 ]
// out put : 5 4 [ 1, 2, 3, 4, 5 ]
