import React from 'react';

interface Props {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}
// 기존의 React에서는 컴포넌트에서 사용하는 인자들에 대한 정의를 PropTypes로 정의 하였지만 TypeScript는 interface라는 구현체를 구현하여 ToDoItem 컴포넌트에 React.SFC의 Generic으로 주입하여줍니다.
const TodoItem: React.SFC<Props> = ({ text, done, onToggle, onRemove }) => (
  <li>
    <b
      onClick={onToggle}
      style={{
        textDecoration: done ? 'line-through' : 'none',
      }}
    >
      {text}
    </b>
    <button style={{ all: 'unset', marginLeft: '0.5rem' }} onClick={onRemove}>
      [지우기]
    </button>
  </li>
);

export default TodoItem;
