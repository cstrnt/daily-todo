import PropTypes from 'prop-types';

const Todo = ({ data: { id, title, done, toggleDone } }) => (
  // eslint-disable-next-line
  <div
    style={{ textDecoration: `${done ? 'line-through' : ''}` }}
    onClick={() => toggleDone(id)}
  >
    {title}
    <style jsx>
      {`
        div {
          width: 60%;
          margin: 0.5rem;
          min-height: 3rem;
          text-align: center;
          border: 2px solid black;
          user-select: none;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

Todo.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Todo;
