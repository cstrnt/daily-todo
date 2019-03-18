/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import dayjs from 'dayjs';
import Router from 'next/router';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const Pagination = ({ date }) => {
  const day = dayjs(date, 'DD.MM.YYYY');
  return (
    <div className="wrapper">
      <div
        className="item"
        onClick={() =>
          Router.push(
            `/?day=${dayjs(day)
              .subtract(1, 'day')
              .format('DD.MM.YYYY')}`
          )
        }
      >
        ← previous day
      </div>
      <div
        className="item"
        onClick={() =>
          Router.push(
            `/?day=${dayjs(day)
              .add(1, 'day')
              .format('DD.MM.YYYY')}`
          )
        }
      >
        next day →
      </div>
      <style jsx>
        {`
          .wrapper {
            margin-top: 10rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .item {
            border: 1px solid black;
            border-radius: 3px;
            margin: 1rem;
            padding: 0.5rem;
            cursor: pointer;
            user-select: none;
          }
          .item:hover {
            color: tomato;
            border-color: tomato;
          }
        `}
      </style>
    </div>
  );
};
export default Pagination;
