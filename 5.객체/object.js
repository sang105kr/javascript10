{
  // person 데이터 객체 생성
  //{프로퍼티,....}
  // 프로퍼티 -> 프로퍼티키 : 프로퍼티값
  const person = {
    "name":"홍길동",
    "age":30,
    "car":{
      "type":"suv",
      "color":"검정"
    },
    "hobby" :['등산','골프','수영']
  }
  // person 객체 탐색
  // 1.점 접근법
    console.log(`이름=${person.name}`);
    console.log(`취미3=${person.hobby[2]}`);
    for(let ele of person.hobby){
      console.log(ele);
    }
  // 2.[프로퍼티키] 접근법
    console.log(`이름=${person['name']}`);
    console.log(`취미3=${person['hobby'][2]}`);
    for(let ele of person['hobby']){
      console.log(ele);
    }
  // 3.for~ in  
  for(let prop in person) {
    console.log(person[prop]);
  }
}