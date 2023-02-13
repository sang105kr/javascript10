const data = `{
                "members":[
                  {
                    "id":1,
                    "name":"홍길동1",
                    "age":10,
                    "gender":"남",
                    "hobby" : ["수영","등산","골프"]
                  },
                  {
                    "id":2,
                    "name":"홍길동2",
                    "age":20,
                    "gender":"여",
                    "hobby" : ["독서","수영"]
                  },
                  {
                    "id":3,
                    "name":"홍길동3",
                    "age":30,
                    "gender":"남",
                    "hobby" : ["영화","축구","게임"]
                  },
                  {
                    "id":4,
                    "name":"홍길동4",
                    "age":40,
                    "gender":"여",
                    "hobby" : ["수영","등산"]
                  },
                  {
                    "id":5,
                    "name":"홍길동5",
                    "age":50,
                    "gender":"여",
                    "hobby" : ["음악","영화","골프"]
                  }
                ]
              }`;

console.log(typeof(data));  
const result = JSON.parse(data);            
console.log(result);
console.log(typeof(result));
// 공공API를 통해 위의 JSON포맷의 문자열을 받았다고 가정하고 아래문항에 대해 각각 코드로 구현하시오
// 1. 회원수는?
{
  console.log(`회원수=${result.members.length}`);
}
// 2. 여성회원수는?
{
  {
    let count = 0;
    for(let i=0; i<result.members.length; i++){
      if(result.members[i].gender == '여'){
        count++;
      };
    }
    console.log(`여자회원수=${count}`);
  }
  {
    console.log(`여자회원수=${result.members.filter(ele=>ele.gender == '여').length}`);
  }
}
// 3. 남자회원 나이의 총합과 여자회원 나이의 총합?
{
  { //반복문
    let ageOfWemen = 0;
    let ageOfMen = 0;
    for(let i=0; i<result.members.length; i++){
      if(result.members[i].gender == '여'){
        ageOfWemen += result.members[i].age;
      }else if(result.members[i].gender == '남'){
        ageOfMen += result.members[i].age;
      };
    }
    console.log(`여자회원의 나이총합=${ageOfWemen}`);
    console.log(`남자회원의 나이총합=${ageOfMen}`);
  }
  { //고차함수

    const ageOfWemen = result.members.filter(ele=>ele.gender == '여')
                                     .reduce((acc,ele)=>acc+ele.age,0);
    const ageOfmen = result.members.filter(ele=>ele.gender == '남')
                                   .reduce((acc,ele)=>acc+ele.age,0);

    console.log(`여자회원의 나이총합=${ageOfWemen}`);
    console.log(`남자회원의 나이총합=${ageOfmen}`);
  }  
}
// 4. 골프가 취미인 회원의 이름을 나열하시오?
{
  { // case1) 반복문사용
    for(let i=0; i<result.members.length; i++){
      if(result.members[i].hobby.includes('골프')){
        console.log(result.members[i].name);
      }
    }
  }
  { // case2) forEach 고차함수
    result.members.forEach(ele=>{
      if(ele.hobby.includes('골프')){
        console.log(ele.name);
      }
    });
  }

}
// 5. 회원의 취미를 모두 나열하시오.
{
  { //case1)  map, set, flat
    const hobbys = result.members.map(member=>member.hobby);
    console.log(hobbys);
    console.log(hobbys.flat());
    console.log(new Set(hobbys.flat()));
  } 
  { //case2) map, set, flat, forEach
    const hobbys2 = new Set(result.members.map(member=>member.hobby).flat())
    hobbys2.forEach(ele=>console.log(ele));
    hobbys2.forEach(console.log);
  }
  {//case3) map,reduce,forEach,set
    const hobbys3 =  result.members.map(m=>m.hobby)
                          .reduce((acc,hobby)=> acc.concat(hobby) ,[]);
    (new Set(hobbys3)).forEach(hobby=>console.log(hobby));   
  }                          
}
// 6. 여성회원중 나이가 가장 많은 회원의 이름은?
{

}
// 7. 모든회원이 여성회원들로만 이뤄져있는지 판단하시오.
{
  const isWemen = result.members.every(member=>member.gender == '여');
  if(isWemen){
    console.log('모든 회원이 여성이다');
  }else {
    console.log('남성 회원이 존재한다.');
  }
}
{
  //8. 회원중에 여성회원이 한명이라도 존재하는지 판단하시오.
  const existWemen = result.members.some(member=>member.gender == '여');
  if(existWemen){
    console.log('여성회원이 있습니다.');
  }else {
    console.log('여성회원은 없습니다.');
  }
}