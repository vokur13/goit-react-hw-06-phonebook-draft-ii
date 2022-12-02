import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/contacts/slice';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts);

  return (
    <div>
      <button onClick={() => dispatch(add(payload))}>Add</button>
      {value}
      <button onClick={() => dispatch(remove(payload))}>Remove</button>
    </div>
  );
};
