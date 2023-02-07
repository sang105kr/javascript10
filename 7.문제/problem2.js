//문제 1) 은행계좌 객체를 설계하고, 입금,출금,조회기능을 구현하시오. (단,생성자함수 사용할것)
//        속성: 잔액
//        행위: 입금,출금,잔액조회
{
  function Acount(){
    Acount.count++;
    //인스턴스 데이터 프로퍼티 
    this.balance = 0;
  }
  // 인스턴스 메소드 프로퍼티 
  Acount.prototype.deposit = function(money){
    this.balance += money;
  }
  Acount.prototype.withdraw = function(money){
    this.balance -= money;
  }
  Acount.prototype.getBalance = function(){
    return this.balance;
  }
  // 정적 데이터 프로퍼티 
  Acount.count = 0;
  // 정적 메소드 프로퍼티 
  Acount.getCount = function(){
    return Acount.count;
  }

  //계좌 생성
  const account = new Acount();
  //잔액 조회
  console.log(account.balance);
  //입금
  account.deposit(1000);
  account.deposit(2000);
  //잔액 조회
  console.log(account.balance);
  //출금
  account.withdraw(1000);
  //잔액 조회
  console.log(account.balance);

  //배열에 계좌 저장
  //const accounts = [new Acount(), new Acount(), new Acount()];
  const accounts = [];
  //계좌객체를 3개 생성헤서 배열에 저장
  for(let cnt=1; cnt<=3; cnt++){
    accounts.push(new Acount());
  }

  // 1번계좌에 1000원 입급
  accounts[0].deposit(1000);

  // 2번계좌에 2000원 입급
  accounts[1].deposit(2000);

  // 3번계좌에 3000원 입급
  accounts[2].deposit(3000);

  // 모든 계좌의 잔액 조회
  for(let account of accounts){
    console.log(account.getBalance());
  }

  console.log(Acount.getCount());
}


//문제 2) 은행계좌 객체를 설계하고, 입금,출금,조회기능을 구현하시오. (단,class문법 사용할것)
//        속성: 잔액
//        행위: 입금,출금,잔액조회
{
  class Acount {
    //생성자
    constructor(){
      //인스턴스 데이터 프로퍼티
      this.balance = 0;
    }
    //인스턴스 메소드 프로퍼티
    deposit(money){
      this.balance += money;
    }
    withdraw(money){
      this.balance -= money;
    }
    getBalance(){
      return this.balance;
    }
    //정적 데이터 프로퍼티
    static count = 0;
    //정적 메소드 프로퍼티
    static getCount(){
      return Acount.count;
    }
  }


  //계좌 생성
  const account = new Acount();
  //잔액 조회
  console.log(account.balance);
  //입금
  account.deposit(1000);
  account.deposit(2000);
  //잔액 조회
  console.log(account.balance);
  //출금
  account.withdraw(1000);
  //잔액 조회
  console.log(account.balance);

  //배열에 계좌 저장
  //const accounts = [new Acount(), new Acount(), new Acount()];
  const accounts = [];
  //계좌객체를 3개 생성헤서 배열에 저장
  for(let cnt=1; cnt<=3; cnt++){
    accounts.push(new Acount());
  }

  // 1번계좌에 1000원 입급
  accounts[0].deposit(1000);

  // 2번계좌에 2000원 입급
  accounts[1].deposit(2000);

  // 3번계좌에 3000원 입급
  accounts[2].deposit(3000);

  // 모든 계좌의 잔액 조회
  for(let account of accounts){
    console.log(account.getBalance());
  }

  console.log(Acount.getCount());

}