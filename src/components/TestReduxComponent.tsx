import React, { FunctionComponent } from 'react';
import CSS from 'csstype';
import { useSelector } from 'react-redux';
import { Appstate } from '../reducers'


type TestReduxComponentProps = {
  user_name: string,
}

const divStyle: CSS.Properties = {
  color: 'white',
}

const TestReduxComponent: FunctionComponent<TestReduxComponentProps> = ({ user_name }: TestReduxComponentProps) => {

  const users: {}[] = useSelector((state: Appstate) => state.user);
  const posts: {}[] = useSelector((state: Appstate) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div style={divStyle}>
      <p>{user_name}</p>
      <button onClick={() => console.log(users)}>Show users</button>
      <ul>
          { posts && posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default TestReduxComponent;