{
  class Car {
    // color: string;
    constructor(public color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }

  const bmw = new Car("red");

  //접근제한자(Access modifier) - public, private, protected, readonly
  class Car2 {
    //private name: string = "car";
    //#name: string = "car";
    //private는 상속되지 않고, public은 상속된다.

    //protected name: string = "car";
    //protected는 클래스와 자식클래스 내부에서는 참조할 수 있으나,
    //클래스 외부에서는 참조할 수 없다.

    //readonly name: string = "car";
    //readonly는 수정할 수 없다.

    //public name: string = "car";
    name: string = "car";

    static wheels = 4;
    //static은 this로 호출 불가능
    constructor(public color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
      console.log(this.name);
      // console.log(this.wheels);
      console.log(Car2.wheels);
    }
  }

  class Bmw extends Car2 {
    constructor(color: string) {
      super(color);
      //상속된 Car2의 color를 가져온다.
    }
    showName() {
      console.log(super.name);
      //상속된 Car2의 name을 사용한다.
    }
  }

  const z4 = new Bmw("black");
  console.log(z4.name);
  //protected에서는 호출 불가

  z4.name = "z4";
  //readonly에서는 수정 불가

  abstract class Car3 extends Car2 {
    abstract doSomething(): void;
  }
  //추상화는 프로퍼티나 써질 이름만 선언해주고 구체적인 기능은
  //상속받는 쪽에서 구현해준다.

  class Car4 extends Car3 {
    doSomething(): void {
      alert(3);
    }
    //부모클래스에서 추상화된 함수는 반드시 자식클래스에서 구현해준다.
  }

  // const car = new Car3("red");
  //abstract는 new로 객체 생성 불가능, 클래스 상속만 가능
}
