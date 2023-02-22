{
  // 동기처리(synchronous)
  function a(){
    console.log('1');
    b();
    console.log('2');
  }

  function b(){
    // for(let i=0; i<10000000000; i++){};
    console.log('b호출됨!');
  }

  a();
}
{
  //비동기처리(asynchronous)
  function a(){
    console.log('1');
    setTimeout(b , 5*1000) ;
    console.log('2');
  }

  function b(){
    console.log('b호출됨!');
  }

  a();
}