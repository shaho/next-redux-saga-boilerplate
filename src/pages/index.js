import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import withReduxSaga from "../";

import { fetchPostsStart } from "../redux/post/actions";
import {
  selectIsPostFetching,
  selectPostsItems,
} from "../redux/post/selectors";

const Home = ({ posts, isLoading }) => {
  // console.log(posts);
  return (
    <div>
      <div className="detail">
        <ul>
          {isLoading && <div>is loading...</div>}
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

Home.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(fetchPostsStart());

  return { isServer };
};

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

const mapStateToProps = createStructuredSelector({
  posts: selectPostsItems,
  isLoading: selectIsPostFetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsStart: () => {
      return dispatch(fetchPostsStart());
    },
  };
};

export default withReduxSaga(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
