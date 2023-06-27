const todos = [
  { id: 1687839848726, title: '테스트1', completed: false },
  { id: 1687839848726, title: '테스트1', completed: false },
  { id: 1687844205601, title: '테스트2', completed: false }
];

const todo = todos[0];
console.log(todo === todos[0]); // true
console.log(todo === todos[1]); // false : 객체는 변수에 주소값을 담는다. 따라서 각 요소의 값들은 모두 같지만 별개의 객체이다. 
console.log(todos.indexOf(todo)); // 0 : 객체도 배열의 요소이면 indexOf를 할 수 있다. 