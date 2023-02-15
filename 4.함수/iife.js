
{ //함수선언문의 이름이 동일하면 재정의된다.
  function sum(v1=1,v2=2){
    let result = null;
    result = v1 +v2;
    return result;
  }
  
  const result = sum();
  console.log(result);
  
  const result2 = sum(10);
  console.log(result2);
  
  const result3 = sum(10,20);
  console.log(result3);
}
{
  //IIFE(Immediately Involked Function Execution)
  //(함수)() or (함수())
  //함수를 정의하고 즉시 실행하고자 할때 사용하는 문법
  {//case 1
    const result = (function sum(v1,v2){
                      return v1+v2;
                    })(10,20);
    console.log(`result=${result}`);                  
  }
  {//case 2
    const result = (function sum(v1,v2){
      return v1+v2;
    }(10,20));
    console.log(`result=${result}`);    
  }
  {//case3
    const result = ( (v1,v2)=> v1+v2 )(10,20);
    console.log(`result=${result}`);   
  }



}