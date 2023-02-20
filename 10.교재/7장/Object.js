//Object.keys(),  객체의 프로퍼티 키만을 추출하여 배열로 반환
//Object.values(), 객체의 프로퍼티 값만을 추출하여 배열로 반환
//Object.entries(), 객체의 프로퍼티키,프로퍼티값을 한쌍을 배열 요소로갖는 배열을 반환
const peoples = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];

const student = { name:'이름', age:20, blood:'A'};
console.log(student['name'], student['age'], student['blood']);


console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const propertyKeys = Object.keys(student);
for(let ele of propertyKeys){
  console.log(ele);
}

for(let ele of Object.entries(student)){
  console.log(ele[0], ele[1]);
}

