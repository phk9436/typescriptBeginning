{
  //1. keyof
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  type UserKey = keyof User;
  //User의 키값들을 유니온 형태로 받아옴
  //'id' | 'name' | 'age' | 'gender'

  const uk: UserKey = "name";

  // 2. Partial<T>
  interface User2 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  const admin: Partial<User2> = {
    id: 1,
    name: "Bob",
  };
  //타입을 부분적으로만 사용할 때

  // 3. Required<T>
  interface User3 {
    id: number;
    name: string;
    age?: number;
  }

  const admin2: Required<User3> = {
    id: 1,
    name: "Bob",
    age: 30,
  };
  //옵셔널 프로퍼티도 필수 프로퍼티로 바뀜

  // 4. Readonly<T>
  interface User4 {
    id: number;
    name: string;
    age?: number;
  }
  const admin3: Readonly<User4> = {
    id: 1,
    name: "Bob",
  };

  // admin3.id = 2; //error;

  // 5. Record<K, T>
  //K는 키값, T는 밸류값
  type Grade = "1" | "2" | "3" | "4";
  type Score = "A" | "B" | "C" | "D" | "F";
  const score: Record<Grade, Score> = {
    1: "A",
    2: "B",
    3: "B",
    4: "D",
  };

  interface User5 {
    id: number;
    name: string;
    age: number;
  }

  function isValid(user: User5) {
    const res: Record<keyof User5, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };
    return res;
  }

  // 6. Pick<T, K>
  //T 중 K 키값만 사용 가능
  interface User6 extends User5 {
    gender: "M" | "W";
  }

  const admin4: Pick<User6, "id" | "name"> = {
    id: 0,
    name: "haha",
  };

  // 7. Omit<T, K>
  //T 중 K 키값을 제외하고 사용 가능
  const admin5: Omit<User6, "age" | "gender"> = {
    id: 0,
    name: "haha",
  };

  // 8. Exclude<T, K>
  // 타입 T 중 타입 K를 제외하고 사용 가능
  // Omit의 K는 프로퍼티를 제거, Exclude의 K는 타입을 제거
  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | boolean>;

  // 9. NonNullable<T>
  // null, undefined을 제외하고 타입을 생성한다.
  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>;
  // const j:T4 = null //error;
}
