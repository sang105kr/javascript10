// 객체생성:개념정의 없이 직접 인스턴스생성
{
  const Person = {
    // 속성
    // 인스턴스 데이터 프로퍼티
    'national' : '한국',
    'name' : '홍길동',
    'age' : 30,

    //행위
    // 인스턴스 메소드 프로퍼티
    smile() {
      console.log('웃다');
    },

    sleep() {
      console.log('자다');
    },

    study() {
      console.log('공부하다');
    }
  }

  Person.smile();
  Person.sleep();
  Person.study();

  console.log(Person.national);
  console.log(Person.name);
  console.log(Person.age);

  console.log(Person['national']);
  console.log(Person['name']);
  console.log(Person['age']);

}