let car = "bmw";
//타입 추론 : 타입을 선언하지 않아도 자동으로 추론

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// week.push(3); //error



// 1. 튜플 (Tuple)
let b:[string, number];
//인덱스마다 타입이 다를 경우 사용

b = ['a', 1];
b[0].toLowerCase();
// b[1].toLowerCase(); //error



// 2. void, never
const sayHello = ():void => console.log('hello');
//아무것도 반환하지 않을 때 사용

const showError = ():never => {
    throw new Error();
}

const infLoop = ():never => {
    while (true) {
        // do something..
    }
}
//항상 에러를 반환하거나 무한 루프를 도는 등의 경우에 사용



// 3. enum

enum Os {
    Window = 3,
    Ios = 10,
    Android,
}

//enum에 값을 따로 주지 않으면 1부터 차례대로 증가
//값을 따로 주면, 주지 않은 다음 값은 이전 값보다 1 증가
console.log(Os['Ios']);

enum Os2 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and',
}
//위처럼 입력하면 아래처럼 컴파일됨
const Os2Comfiled = {
    Window: 'win',
    Ios: 'ios',
    Android: 'and',
}
//enum으로 타입을 생성해두면 그 안의 key값만 할당이 됨.
let myOs:Os;
myOs = Os.Android;

// Os.Android = 11; //error; (enum은 값 재할당 불가능)
// Os.Watch = 12; //error; (새로운 속성 추가 불가능)

// enum Os3 {
//     Window = true
// } //error; (문자나 숫자 외의 값 할당 불가능)

//Object와 enum의 차이
//1. enum은 object와 달리 새로운 속성을 추가하거나 속성에 값을 재할당할 수 없다.
//2. object의 속성값은 모든 타입이 올 수 있으나, enum의 속성값은 문자 또는 숫자만 허용된다.

//enum은 열거형 타입으로, 해당 용도로 선언할 때 object보다 명확한 의미 전달이 가능.

const enum Os4 {
    Window,
    Ios,
    Android
}
console.log(Os4.Android)
//const enum을 쓰면 더 간결하게 트랜스파일 된다.

// 4. null, undefined
let typeNull:null = null;
let typeUndefined:undefined = undefined;