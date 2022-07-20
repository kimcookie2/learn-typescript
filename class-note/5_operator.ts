function logMessage(value: any) {
  console.log(value);
}
logMessage('hello');
logMessage(100);

function logMessage2(value: string | number) {
  console.log(value);
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// interface를 유니온 타입으로 정의하면 공통된 속성만 접근가능
function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill;
  // someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 34});
// error
// askSomeone2({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone2({ name: '캡틴', age: 100});

// var seho: string | number | boolean;
// var capt: string & number & boolean;