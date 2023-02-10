{
  const arr = [1,2,3];

  arr.forEach((ele,idx,arr)=>{
    console.log(ele,idx,arr);
  });
}
{ // Array.prototype.forEach()
  // 배열 요소를 순차적으로 순회하면서 요소를 처리할때사용
  // 반환값은 undefined;
  const arr = [1,2,3];
  //case1)
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
  //case2)
  for(let ele of arr){
    console.log(ele);
  }
  //case3)
  arr.forEach(function(ele,idx,arr){
    console.log(ele,idx,arr);
  });

  arr.forEach(ele=>console.log(ele));
  arr.forEach(ele=>console.log(ele*2));
}
{ // Array.prototype.map()
  // 배열 요소를 순차적으로 순회하면서 1:1로 다른값으로 치환하고자할때 사용
  // 반환값 : 배열
  const arr = [1,2,3];
  const result = arr.map(ele => ele * 3);
  console.log(result);

}