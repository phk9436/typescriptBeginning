{
  let user: object;

  user = {
    name: "xx",
    age: 30,
  };

  // console.log(user.name) //error; (object에는 특정 속성에 대한 정보가 없다)

  type Score = "A" | "B" | "C" | "D" | "F";

  interface User {
    name: string;
    age: number;
    gender?: "male" | "female";
    readonly birth: number;
    [grade: number]: Score; //grade의 속성키가 유동적으로 선언됨
  }

  let user2: User = {
    name: "xx",
    age: 30,
    birth: 2000,
    1: "A",
    //   2: 'a' //error;
  };

  console.log(user2.age);
  user2.gender = "female";

  // user2.birth = 1990; //error; (readonly)

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  add(10, 20); //30

  interface isAdult {
    (age: number): boolean;
  }

  const funcIsAdult: isAdult = (age) => {
    return age > 19;
  };

  funcIsAdult(33); //true

  // implements
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log("go!");
    }
  }

  const bmw = new Bmw("green");
  console.log(bmw.color); //"green"
  bmw.start();

  //extends
  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    color: "black",
    wheels: 4,
    start() {
      console.log("go!");
    },
    door: 5,
    stop() {
      console.log("stop");
    },
  };

  interface Toy {
    name: string;
  }

  interface ToyCar extends Car, Toy {
    price: number;
  }
}
