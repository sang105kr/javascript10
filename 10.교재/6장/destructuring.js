//구조분해(destructuring) : 배열,객체의 요소를 개별 변수에 할당할 수 있는 문법 
{
  {
    const arr = [1,2,3,4,5];
    const x = arr[0];
    const y = arr[1];
    console.log(x,y);
  }
  { //배열 구조분해 : 인덱스순서에 따라 변수에 개별할당
    const arr = [1,2,3,4,5];
    const [x,y,z,...k] = arr;
    console.log(x,y,z,k);
    console.log(k[0],k[1]);
  }
  {
    {//객체 프로퍼티값을 개별 변수에 저장
      const person = {name:'홍길동',age:30,blood:'A'};
      const name = person.name;
      const age = person.age;
      const blood = person['blood'];
      console.log(name,age,blood);
    }  
    {//객체 구조분해 : 객체 프로퍼티값을 개별 변수에 저장하는 문법
      const person = {age:30,blood:'A',name:'홍길동'};
      const {name,age,blood,national = '미국'} = person;  //변수이름과 객체 프로퍼티 키가 일치하는 프로퍼티를 찾아 프러퍼티값을 할당. 
      console.log(name,age,blood,national);
    }  
    { // 객체 리터럴 프로퍼티키와 다른 이름의 변수를 사용하는 예
      const person = {age:30,blood:'A',name:'홍길동'};
      const {name:a,age:b,blood:c} = person;
      console.log(a,b,c);
    }  
    { 
      const person = {age:30,blood:'A',name:'홍길동'};
      //일치하는 프로퍼티 키가 없는경우 기본값을 설정 할수 있다.
      const {name:a,age:b,blood:c,national:d = '미국'} = person;
      console.log(a,b,c,d);
    }  
  }

}