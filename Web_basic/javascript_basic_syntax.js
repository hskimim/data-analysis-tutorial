// console.log("dss");

//변수 선언 var를 붙입니다.
var a = 1;
var b = 2;
// 반환문 console.log()
console.log(a+b);

//주석
// 한줄 주석
/*여러 줄 주석*/

// 식별자 규칙
// 상수명 : 대문자 스네이크 케이스
// 변수명 : 카멜 케이스
// 모듈 : 파스칼 케이스
// 컨벤션 : google js 컨벤션, airbnb js 컨벤션
// 특수기호 : 파이썬에서는 underbar_, js 에서는 $ 사용이 가능
// _name : private , #target : selector를 변수로 받을 때 많이 사용
// 연산자 : +,_,*,/,%,(여기까지는 python 과 동일)++,--

var a = 5;
var b = 5;
var result1 = a++; // result에는 연산이 안들어가고 a는 연산이 적용
var result2 = ++b; // result에도 연산이 들어가고 b에도 연산이 적용
console.log(a,b,result1,result2)//6,6,5,6 return

//js data type
var a = 1;
var b = 1.1;
var c = 'dss';
var d = [1,2,3];//In python list, in js, object
var e = {a:1,b:2}; //python dictionary in js, object
var f = true;
// null,undefined,NaN
// null : 변수에 값이 없을 때 정의
// undefined : 값이 지정되지 않음
// NaN : 존재하지 않는 데이터를 나타냅니다.
var a = null;
var b = undefined;
var c = NaN;
console.log(a,b,c);
// null undefined NaN 를 출력합니다.

var b;
console.log(b);
//undefined 값이 나옵니다.

var c = 0/0;
console.log(c);
// NaN값이 출력됩니다.

console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f));
//number number string object object boolean 이라고 출력됩니다.

//비교 연산자
//<,>,<=,>=,==,!=,(여기까지는 python과 같다.)===,!==
// ==과 ===의 차이점
// 결론부터 말씀드리면, 무조건 ===로 사용하시면 됩니다.
console.log(1==1);//true
console.log(1===1);//true
console.log('1'=='1');//true
console.log('1'==='1');//true
console.log('1'==1); //true
console.log('1'===1);// false -- 다른 datatype에는 False를 출력
// === 는 데이터의 값과 데이터의 타입을 모두 비교합니다. 이 편이 에러 발생을 줄여주는 쪽입니다.
// == 는 데이터의 값만 비교합니다.

//Garbage collector(GC)

// var a = 1; 이라고 하면 변수 a가 1을 가리키는데 이때 1은 ram에 들어있게 됩니다.
// a=null값을 지정해주면 변수와 ram과의 연결이 끊어지게 되고
// 1은 그대로 ram에 남아있게 되는데 그때 program language 안에 있는 GC가 ram에 남아있는
// 즉, 주소값을 참조하고 있지 않는 값(객체를 참조하고 있는)을 없애줍니다.

//쓰레기 수집은 동적 할당된 메모리 영역 가운데 더 이상 사용할 수 없게 된 영역을 탐지하여
// 자동으로 해제하는 기법이다. 더 이상 사용할 수 없게 된 영역이란, 어떤 변수도 가리키지 않게 된 영역을 의미한다.


// NaN
// 비교 연산에서 NaN이 들어가면 무조건 False가 나옵니다.
console.log(NaN === NaN);// false return 비교 연산에 사용되면 절대로 안됩니다. 그냥 비교연산에는 안쓰면 됩니다.


//논리 연산자

// &&(and), ||(or)
console.log(true && true); // true
console.log(true || false); // true
console.log(true && false); // false


// 조건문
// if, elif,else -- in python
 // if, else if, else -- in js
if (true){
  console.log('hello');
}else if(true){
  console.log('world')
}else{
  console.log('dss')
 }

//한 줄로 쓸 때에는 중괄호를 안써도 되지만 가독성을 위해서 중괄호를 관례 상 써줍니다.
 // indent를 지켜주지 않아도 코드가 진행되는 데 문제가 없습니다.(in js)


// false로 간주되는 data를 확인해봅시다.
null,undefined,NaN,0,""
//위의 예시 외에는 true 로 간주된다고 보시면 됩니다.
//[],{}는 python에서는 false였지만, js 에서는 비어있는 list나 dictionary도 object로 간주되기 때문에 true로 반환됩니다.


// 문제 1. 점수를 입력받아서 학점을 출력하는 코드
var point = 76;
var reuslt = '';

if (point>90){
  result = 'A';
}
else if (point>80){
  result = 'B';
}
else{
  result = 'C';
}
console.log(result); //'c'



// 반복문
// while,for, do while(거의 안씁니다.)
//break, continue가 있습니다.(like Python)

// while 문
var num = 0;
while (true){
  num++;
  if (num > 3){
    break;
  }
  console.log(num);
}
console.log(num);//return 4


// python -for : iterable data 갯수만큼 반환
// in js, for (초기값;조건;증감)
// in : es6에서 추가되었습니다. (class,화살표함수(lambda in python))

// for 문
for(var i=0; i<5; i++){
  console.log(i);
}
// return 01234


//배열(array)


//추가 append in python list
var arr = ['a','b','c','d','e'];
console.log(arr[2]);//indexing
arr.push('f');//append
console.log(arr);
arr.unshift('z');//left-append
console.log(arr);


// // 제거 pop in python list
arr.shift(); // 첫번째 component delete
console.log(arr);
arr.pop();// 마지막 component delete
console.log(arr);


// 정렬
arr.reverse();//reverse like as python
console.log(arr);
arr.sort();
console.log(arr);//sort like as python

// // slicing - slice
var arr2 = arr.slice(2,3);//2번 요소에서 3번 미만까지를 자릅니다.
console.log(arr,arr2);

// splice
var arr3 = arr.splice(2,3);//split 같은 기능입니다.
console.log(arr,arr3);// ['a','b'],['c','d','e']

// 객체
// 파이썬에서 class로 만드는 객체와 같은 의미를 가진다.
// 파이썬에서 딕셔너리 데이터 타입과도 같은 의미를 갖는다.

var obj = {}; // var obj = new Object(); 와 같은 선언입니다.
// var obj ={} 와 같은 방법이 가장 Gerneal한 방법입니다.
obj.name = 'hskimim';
console.log(obj); //{ name: 'hskimim' }
obj['addr']='seoul';//{ name: 'hskimim', addr: 'seoul' }
console.log(obj);
// .name을 사용하는 것이 더 좋습니다.

//객체를 리터럴로 선언한다고 합니다.
// 리터럴(iteral)이 무엇인가?
//변수에 대입해주는 값이라고 생각하시면 됩니다.
var obj2 ={
  name:'kim',
  addr:'ilsan',
  skill:function(){
    console.log('coding');
  }
};
console.log(obj2);
// { name: 'kim', addr: 'ilsan', skill: [Function: skill]
// function

function sum(num1,num2){
  return num1 + num2;
}
var result = sum(1,2);
console.log(result); //3

var minus = function(num1,num2){
  return num1 - num2;
};

var result2 = minus(3,1);
console.log(result2); //2

//hoisting - 변수를 선언하면 최상단으로 올라갑니다.

// 스코프(scope)
var a = 'hello';//global 영역
function disp(){
  var a = 'world';//local 영역
  console.log(a);
}
disp();
console.log(a);

var a = 'hello';//global 영역
function disp(){
  a = 'world';//global 선언과 같은 것으로 var를 지워주면 됩니다.
  console.log(a);
}
disp();
console.log(a);//world로 바뀌게 됩니다.

//즉시실행함수, 익명함수
// js 는 front-end 언어입니다.
// front-end 언어는 브라우져에 공개됩니다.
// 서비스를 접속한 이용자가 전역 함수를 실행할 수 있습니다.
// 보안에 문제가 생길 수 있기 때문에, 모든 함수나 변수를 지역 변수나 함수로 선언을 해줍니다.
(function(){
  var name='hskimim';
  function disp(){
    console.log(name);
  }
  disp();
})();
disp(); // error 발생

(function(){
    console.log('dss')
})();
// OOP - 캡슐화, 추상화, 은닉화
// getter, setter
// 실제로 js 에서 모듈을 사용하는 방법
// 모듈패턴

// 모듈 변수 선언
// Module 이라는 변수가 있으면 Module이 대입
// 없으면 빈 객체를 만듭니다.
var Module = Module || {};

(function(_Module){

  var _name = "hskimim";

  _Module.getName = function(){
    return _name;
  };

  _Module.setName = function(name){
    _name = name;
  };

})(Module);

console.log(Module.getName());
console.log(Module._name);

//clouser 클로져, 프로토타입 개념을 추가적으로 공부

// 콜백 함수
// 함수에서 아규먼트로 함수를 받아서 함수안의 코드가 다 수행된 후에
// 아규먼트로 받은 함수를 수행합니다.
// 여기서 아규먼트로 받은 함수를 콜백함수라고 합니다.
function add(callback,n1,n2){
  var result = n1 + n2;
  callback(result);
}

function disp(result){
  console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

var result = add(sqrt,2,3);
console.log(result);

//api를 주고 받을 때,r
// api - request,response -> callback 함수를 수행

function add(callback,n1,n2){
  var result = n1+n2;
  callback(result)
}

function disp(result){
  console.log(result);
}

function sqrt(result){
  console.log(result*result);
}

var result = add(sqrt,2,3);
console.log(result);
