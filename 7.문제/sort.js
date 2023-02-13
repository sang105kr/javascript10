{
  {// 숫자인 경우
    {//오름차순
      const result = [5,3,6,9].sort();
      console.log(result);
    }
    {//오름차순후 역순
      const result = [5,3,6,9].sort();
      console.log(result.reverse());
    }
  }
  {// 문자인경우 : 사전순으로 정렬
    {//오름차순
      const result = ['4','10','22','112'].sort();
      console.log(result);
    } 
    {//내림차순: 오름차순후 역순
      const result = ['4','10','22','112'].sort();
      console.log(result.reverse());
    } 
  }
  {//객체인경우
    const persons = [{name:'홍길동',age:30},{name:'홍길서',age:20},{name:'홍길남',age:10},{name:'홍길북',age:40}];

    const result = persons.sort( (p1,p2)=>{return p2.age - p1.age} );
    console.log(result[0].name);
    console.log(result.at(-1).name);
    console.log(result[result.length-1].name);
  }
}