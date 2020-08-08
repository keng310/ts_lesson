// interface は型定義ができるハッシュみたいなイメージ
// intro関数の引数にそのまま渡せる
// 複数の引数を持つ場合とか、クラスっぽく管理しておきたいときとかに便利
interface Person {
  name: string;
  age: number;
}

function intro(person: Person): string {
  return "my name is ${person.name}. i am ${person.age}"
}

var ken = {
  name: 'ken',
  age: 20
}

intro(ken)
