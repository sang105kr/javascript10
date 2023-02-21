//Array.prototype.reduce() 사용
//문제1) 배열의 모든 요소를 모두 합산하는 코드를 구현하시오. 
{
  const arr = Array.of(1,2,3,4,5);

  const f = (acc,curr) => acc + curr;
  const result = arr.reduce(f,0);
  console.log(result);
}
//문제2) 배열의 모든 요소중 최대값을 구하시오.
{
  const arr = Array.of(3,2,5,4,1);

//  const result = arr.reduce( (acc,curr)=>{
//     //1 acc=0, curr=3
//     //2 acc=3, curr=2
//     //3 acc=3, curr=5
//     //4 acc=5, curr=4
//     //5 acc=5, curr=1
//     //최종 5
//     return acc > curr ? acc : curr;
//  },0);
  const max = arr.reduce( (acc,curr)=> acc > curr ? acc : curr);  
  const min = arr.reduce( (acc,curr)=> acc < curr ? acc : curr);  
  console.log(max,min);
}
//문제3) 배열의 중복을 제거하시오.
{
  const arr = [1,2,1,3,5,4,5,3,4,4];

              
  const result = arr.reduce( (acc,curr,curridx,arry)=>{
    //1  acc=[],     curr=1
    //2  acc=[1],    curr=2
    //3  acc=[1,2],   curr=1
    //4  acc=[1,2],   curr=3
    //5  acc=[1,2,3], curr=4
    
    // acc배열 요소에  curr값이 없으면 acc에 추가
    // console.log(acc.includes(curr));
    //case 1)
    if(!acc.includes(curr))  acc.push(curr);
    //case 2)
    //if(acc.indexOf(curr) == -1)  acc.push(curr);
    return acc;

  },[]);

  console.log(result); // [1,2,3,4,5]
}

{

  const arr = [1,2,3];
  
  const iter = arr[Symbol.iterator]();
  console.log(iter.next());
  console.log(iter.next());
  // console.log(ele.next());
  // console.log(ele.next());

  for( let ele of iter){
    console.log(ele);
  }

}
{
  const str = '울산KH정보교육원';

  const iter = str[Symbol.iterator]();
  iter.next();
  iter.next();
  for(let ele of iter){
    console.log(ele);
  }

}

{

  const myObj = {};
  myObj[Symbol.iterator] = function(){
    const data = ['울','산','K','H'];
    let i=0;
    return {
      next() {
        return { 
          value : data[i++], done: i == data.length+1 ? true : false
        }
      } 
    }
  }
  console.log(myObj);
  const iter = myObj[Symbol.iterator]();
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());


  for( let ele of myObj) {
    console.log(ele);
  }

  console.log(...myObj);
  const copy = [...myObj,...myObj];
  console.log(copy)
}
