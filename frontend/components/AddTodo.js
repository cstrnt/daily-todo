import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from 'react';
import { withRouter } from 'next/router';

const AddTodo = withRouter(({ router, onSubmit }) => {
  const [todo, setTodo] = useState('');
  const isDisabled = !router.query.day === dayjs().format('DD.MM.YYYY');

  return (
    <div>
      <input
        placeholder="add a todo"
        onChange={e => setTodo(e.target.value)}
        value={todo}
        type="text"
        required
        disabled={isDisabled}
      />
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => {
          setTodo('');
          onSubmit(todo);
        }}
      >
        Add
      </button>
      <style jsx>
        {`
          margin: 1.5rem 0;
        `}
      </style>
    </div>
  );
});

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
