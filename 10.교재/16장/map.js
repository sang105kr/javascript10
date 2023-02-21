{
  // Map VS 객체 리터럴{}
  // 1. map은 이터러블 객체
  // 2. map은 객체를 키로 갖을수 있다.
  // 3. map의 유틸리티 메소드를 사용할 수 있다.

  //생성
  //case1)
  const map = new Map();

  //case2)
  const map2 = new Map([['sutdnet','학생'],['teacher','교사'],['chair','의자']]);
  console.log(map2);

  //case3)
  const dic = [['sutdnet','학생'],['teacher','교사'],['chair','의자']];
  const map3 = new Map(dic);
  console.log(map3);

  //요소추가
  map.set('student','학생');
  map.set('teacher','교사');
  console.log(map);
  map.set('teacher','교사');
  console.log(map);
  map.set('chair','의자');
  console.log(map);

  //요소수 갯수
  console.log(map.size);

  //요소 조회 by 키
  const value = map.get('student');
  console.log(value);

  //요소 존재 유무 by 키
  const isExist = map.has('student');
  console.log(isExist);

  //요소 삭제
  map.delete('chair');
  console.log(map);

  //전체 요소 삭제
  map.clear();
  console.log(map);

  //요소 조회

  //1) keys
  console.log(map3.keys());
  for(let key of map3.keys()){
    console.log(key);
  }

  //2) values
  console.log(map3.values());
  for(let value of map3.values()){
    console.log(value);
  }

  //3) entries
  console.log(map3.entries());
  for(let entry of map3.entries()){
    console.log(entry);
    console.log(entry[0],entry[1]);
  }

  //4) forEach
  map3.forEach( (v,k,m)=>{console.log(v,k,m)});
}