{
  //1. literal types
  //한번 정해지면 변화하지 않는 타입
  const userName1 = "Bob";
  let userName2 = "Tom";

  type Job = "police" | "developer" | "teacher";

  interface User {
    name: string;
    jop: Job;
  }

  //2. union types;
  //파이프를 이용해 여러 가지 타입 중 하나가 사용됨을 선언
  interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
  }

  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }

  //3. intersection types
  //여러 타입을 합쳐서 사용하는 것

  interface Car2 {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Toy & Car2 = {
    name: "타요",
    start() {
      console.log("가자");
    },
    color: "blue",
    price: 1000,
  };
}
