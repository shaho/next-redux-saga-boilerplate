import React, { Component } from "react";
import { END } from "redux-saga";

function withReduxSaga(BaseComponent) {
  class WrappedComponent extends Component {
    static displayName = `withReduxSaga(${BaseComponent.displayName ||
      BaseComponent.name ||
      "BaseComponent"})`;

    static async getInitialProps(props) {
      const { isServer, store } = props.ctx;

      let pageProps = {};

      if (BaseComponent.getInitialProps) {
        pageProps = await BaseComponent.getInitialProps(props);
      }

      // Stop saga on the server
      if (isServer) {
        store.dispatch(END);
        await store.sagaTask.toPromise();
      }

      return pageProps;
    } // end getInitialProps

    render() {
      return <BaseComponent {...this.props} />;
    }
  } // end class

  return WrappedComponent;
}

export default withReduxSaga;
