import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { withRouter } from 'next/router';
import { get, post } from '../lib/helpers';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';
import Pagination from '../components/Pagination';

const Home = withRouter(({ router: { query } }) => {
  const [list, setList] = useState([]);
  const day = query.day || dayjs().format('DD.MM.YYYY');

  const onTodoAdd = async title => {
    const { data } = await post('add', {
      todo: { title },
    });
    setList([...list, data]);
  };

  const toggleDone = id => {
    const index = list.findIndex(e => e.id === id);
    setList(
      Object.assign([list], {
        ...list,
        [index]: { ...list[index], done: !list[index].done },
      })
    );
    post('done', { id });
  };

  useEffect(() => {
    get(`?day=${day}`).then(({ data }) => setList(data));
  }, [day]);
  return (
    <div>
      {list.map(item => (
        <Todo key={item.id} data={{ toggleDone, ...item }} />
      ))}
      <AddTodo onSubmit={onTodoAdd} />
      <Pagination date={day} />
      <style jsx>
        {`
          div {
            width: 60%;
            min-height: 50vh;
            margin: 3rem auto;
            border: 2px solid black;
            border-radius: 3px;
            box-shadow: 10px 10px 5px 0px rgba(135, 127, 135, 0.28);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
});
export default Home;
