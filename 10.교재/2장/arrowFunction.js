{
  function add(v1,v2){
    return v1 + v2;
  }
}
{
  const add = function(v1,v2){
    return v1 + v2
  }
}
{
  const add = (v1,v2)=>{
    return v1 + v2
  }
}
{ // 화살표함수 바디의 실행문이 1개면 중괄호 생략
  // return문만 있는 실행문은 return생략 가능
  const add = (v1,v2) => v1 + v2;

  const add2 = add; //메소드 참조
  console.log(add2(10,20));      //메소드 호출
} 
{
  // 이름과 나이를 매개값으로 받아 이름과 나이를 프로퍼티로 갖는 객체 리터럴을 반환하는 함수를 정의하시오. 
  // 함수 선언문, 함수표현식, 화살표함수 3가지 방식으로 모두 표현하시오.
  {
    function f(name,age){
      const result = {};
      result.name = name;
      result.age = age;
      return result;
    }
    function f2(name,age){
      const result = {};
      result['name'] = name;
      result['age'] = age;
      return result;
    }
    function f3(name,age){
      const result = { name : name, age: age};
      return result;
    }
    function f4(name,age){
      const result = {name, age};  //변수이름->프로퍼티키, 변수값->프로퍼티값
      return result;
    }
    function f5(name,age){
      return {name, age};
    }

    let result =  f('홍길동',10);
    console.log(result);
    result =  f2('홍길동',10);
    console.log(result);
    result =  f3('홍길동',10);
    console.log(result);
    result =  f4('홍길동',10);
    console.log(result);
    result =  f5('홍길동',10);
    console.log(result);
  }
  {//함수표현식
    const f6 = function(name,age){
      return {name, age};
    }
    const result =  f6('홍길동',10);
    console.log(result);
  }
  {//화살표함수
    const f7 = (name,age)=>{
      return {name, age};
    }

    //반환값이 객체 리터럴인경우 소괄호로 한번 감싸준다.
    //(함수 바디 문법과 혼동을 피하기위함)
    const f8 = (name,age)=> ({name, age});  

    let result =  f7('홍길동',10);
    console.log(result);
    result =  f8('홍길동',10);
    console.log(result);
  }  
}