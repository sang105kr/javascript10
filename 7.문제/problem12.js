//문제1) 정수값을 요소 갖는 배열을 입력받아 합과 평균을 구하여 이들 값을 
//       객체 리터럴로 반환하는 함수를 구현하시오. (함수선언문, 함수표현식, 화살표함수)
{
  //함수 선언문
  { //case1)
    function f(arr){
      const result = {};
      let sum = 0;
      let avg = 0.0;
      for(let ele of arr){
        sum += ele;
      }
      avg = sum / arr.length;
      result.sum = sum;
      result.avg = avg;
      return result;  // { sum:?, avg:?}
    }

    const values = [1,2,3];
    const result = f(values);
    console.log(result);
    console.log(`합=${result.sum},평균=${result['avg']}`);
  }
  {
    //case2)
    function f(arr){
      const result = {};
      let sum = 0;
      let avg = 0.0;
      for(let ele of arr){
        sum += ele;
      }
      avg = sum / arr.length;
      result['sum'] = sum;
      result['avg'] = avg;
      return result;  // { sum:?, avg:?}
    }

    const values = [1,2,3];
    const result = f(values);
    console.log(result);
    console.log(`합=${result.sum},평균=${result['avg']}`);
  }
  {
    //case3)
    function f(arr){
      //const result = {};
      let sum = 0;
      let avg = 0.0;
      for(let ele of arr){
        sum += ele;
      }
      avg = sum / arr.length;
      //result['sum'] = sum;
      //result['avg'] = avg;
      return {sum,avg};  // { sum:?, avg:?}
    }

    const values = [1,2,3];
    const {sum:s,avg:a} = f(values); //{ sum: 6, avg: 2 }
    console.log(`합=${s},평균=${a}`);
  }
  {
    //case4)
    function f(arr){
      const sum = arr.reduce( (acc,curr,curridx,arr)=>{
        return acc + curr;
      }, 0);
      const avg = sum / arr.length;
      return {sum,avg};
    }

    const values = [1,2,3];
    const {sum:s,avg:a} = f(values); //{ sum: 6, avg: 2 }
    console.log(`합=${s},평균=${a}`);
  }
  {
    //case5)
    function f(arr){
      const result = arr.reduce( (acc,curr,curridx,{length})=>{
        //console.log(acc,curr,curridx,{length});
        if(!acc.sum) acc.sum = 0;
        acc.sum += curr;
        if(curridx == length-1) acc.avg = acc.sum / length;
        return acc;
      }, {});  //{ sum:? ,avg:?}
      return result;
    }
    const values = [1,2,3];
    const {sum:s,avg:a} = f(values); //{ sum: 6, avg: 2 }
    console.log(`합=${s},평균=${a}`);
  }
}
{
  //함수 표현식

}
{
  //화살표함수

}
//문제2) 정수값을 요소 갖는 배열을 입력받아 합과 평균을 구하여 이들 값을 
//       map객체로 반환하는 함수를 구현하시오. (함수선언문, 함수표현식, 화살표함수)
{
  //함수 선언문
  {
    function f(arr){
      let sum=0, avg=0.0;
      for( let ele of arr) {
        sum += ele;
      }
      avg = sum/arr.length;

      const map = new Map();
      map.set('sum',sum);
      map.set('avg',avg);
      return map;
    }

    const values = [1,2,3];
    const map = f(values); 
    console.log(`합=${map.get('sum')},평균=${map.get('avg')}`);
  }

  { 
    function f(arr){
      const result = arr.reduce( (acc,curr,curridx,{length})=>{
        
        if(!acc.has('sum')) acc.set('sum',0);
        acc.set('sum', acc.get('sum') + curr);
        if(curridx == length-1) acc.set('avg',acc.get('sum')/length);
        return acc;

      }, new Map());  //{ sum:? ,avg:?}
      return result;
    }
    const values = [1,2,3];
    const map = f(values); 
    console.log(`합=${map.get('sum')},평균=${map.get('avg')}`);
  }
  {
    function f(arr){
      return arr.reduce( (acc,curr,curridx,{length})=>{        
                if(!acc.has('sum')) acc.set('sum',0);
                acc.set('sum', acc.get('sum') + curr);
                if(curridx == length-1) acc.set('avg',acc.get('sum')/length);
                return acc;
                
              }, new Map());  //{ sum:? ,avg:?}
    }
    const values = [1,2,3];
    const map = f(values); 
    console.log(`합=${map.get('sum')},평균=${map.get('avg')}`);
  }
}
{
  //함수 표현식

}
{
  //화살표함수

}
