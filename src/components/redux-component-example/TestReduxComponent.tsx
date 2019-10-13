import React, { FunctionComponent, useEffect, ReactElement } from 'react';
import CSS from 'csstype';
import { useSelector, useDispatch } from 'react-redux';
import { Appstate } from '../../reducers';
import { fetchPosts } from '../../actions';

export interface IUser {
  name: string;
  id: number;
  surname: string;
}

interface TestReduxComponentProps {
  user_name: string;
}

const divStyle: CSS.Properties = {
  color: 'black',
};

const TestReduxComponent: FunctionComponent<TestReduxComponentProps> = ({ user_name }: TestReduxComponentProps): ReactElement => {

  const users: IUser[] = useSelector((state: Appstate) => state.users);
  const posts: Array<[]> = useSelector((state: Appstate) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={divStyle}>
      <p>{user_name}</p>
      <button onClick={(): void => { dispatch({ type: 'ADD_POST', payload: { id: 99999, title: 'test title' } }); }}>Add post</button>
      <ul>
        {users.map((user: IUser) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <ul>
        {posts && posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default TestReduxComponent;
