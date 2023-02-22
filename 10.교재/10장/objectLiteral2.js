{
  const obj = {
    hoboy_1 : '축구',
    hoboy_2 : '배구',
    hoboy_3 : '농구'
  }
  console.log(obj);
}
{
  //배열요소를 프로퍼티값으로하고 프로퍼티 키는 hobby_1 ,hobby_2,.. 패턴으로 하는 
  //객체 리터럴을 생성하는 함수를 구현하시오.
  {
    function f(arr){
      const result = {};
      for(let i=0; i<arr.length; i++){
        result[`hobby_${i+1}`] = arr[i];
      }
      return result;
    }

    const arr = ['축구','배구','농구'];
    const result = f(arr);
    console.log(result);
  }
  {
    function f(arr){
      const result = {};
      arr.forEach( (ele,i) => {
        result[`hobby_${i+1}`] = ele;
      });
      return result;
    }

    const arr = ['축구','배구','농구'];
    const result = f(arr);
    console.log(result);

  }
}