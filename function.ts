function add2(num1: number, num2: number): void {
  console.log(num1 + num2);
}

//optional
function hello(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}`;
  }
  return `Hello, ${name}`;
}

console.log(hello("Sam"));
console.log(hello("Sam", 30));

//arguments
function add3(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(add3(1, 2, 3));

//this
interface User3 {
  name: string;
}

const Sam: User3 = {
  name: "Sam",
};

function showName(this: User, age: number) {
  console.log(this.name, age);
}

const a3 = showName.bind(Sam);
a3(30);

interface User4 extends User3 {
  age: number;
}

//function overload
//전달받은 매개변수의 개수나 타입에 따라 다른 동작을 하게 함.
function join(name: string, age: number): User4;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User4 | string {
  if (typeof age === "number") {
    return { name, age };
  }
  return "나이를 숫자로 입력해주세요.";
}

const Sam2: User4 = join("sam", 30);
const James: string = join("james", "30");

const addZero = (num: number) => (num > 9 ? "" : "0") + num;
function formatDate(date: Date, format?: string): string;
function formatDate(date: number, format?: string): string;
function formatDate(date: string, format?: string): string;

// 위 3개 함수를 함수 오버로딩 처리, date는 유니온 타입사용
function formatDate(date: string | Date | number, format = "yyyyMMdd"): string {
  const dateToFormat = new Date(date);

  // … dateToFormat validation … 만약 empty나 1, 0이 들어왔을 때 validation 처리해주기

  const yyyy = dateToFormat.getFullYear().toString();
  const MM = addZero(dateToFormat.getMonth() + 1);
  const dd = addZero(dateToFormat.getDate());

  return format.replace("yyyy", yyyy).replace("MM", MM).replace("dd", dd);
}

const dateRes = formatDate("232323");

//함수 오버로딩은 화살표 함수로는 사용 불가