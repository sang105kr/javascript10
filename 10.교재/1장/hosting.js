// 평가->실행
{ //변수 호이스팅
  {
    let x;   //초기값이 없으면 undefined로 초기화함
    console.log(x);
  }
  { // 호이스팅 : 코드평가시 변수,함수를 상위로 끌어 올리는 동작
    console.log(x);
    // let x; //호이스팅 되지만 초기화하지는 않음.
  }
  {
    var x;  //초기값이 없으면 undefined로 초기화함
    console.log(x);
  }
  {
    console.log(x);
    var x; //호이스팅되고 undefined로 초기화함.
  }
}
{
  //함수 호이스팅
  { //함수 선언문
    console.log(add(10,20));
    function add(v1,v2){
      return v1+v2;
    }
  }
  { //함수 표현식
    console.log(add2(10,20));
    const add2 = (v1,v2)=>{
      return v1+v2;
    }
  }
}


