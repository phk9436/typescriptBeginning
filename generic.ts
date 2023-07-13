{
  //Generic
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }
  //꺽쇠괄호 안에 가변적으로 사용될 변수명을 넣고, 변수명이 사용될 타입을 넣는다.

  const arr1 = [1, 2, 3];
  getSize(arr1);
  const arr2 = ["a", "b", "c"];
  getSize(arr2);
  const arr3 = [false, true, true];
  getSize(arr3);
  const arr4 = [{}, { name: "Tim" }];
  getSize(arr4);

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Mobile<object> = {
    name: "s23",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  const m2: Mobile<string> = {
    name: "s21",
    price: 800,
    option: "good",
  };

  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "a", age: 10 };
  const car: Car = { name: "bmw", color: "red" };
  const book: Book = { price: 3000 };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  showName(car);
  // showName(book);
}
