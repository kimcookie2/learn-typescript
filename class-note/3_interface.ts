interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);

// 함수의 스펙에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c']
arr[0]; // 'a'

// 딕셔너리 패턴