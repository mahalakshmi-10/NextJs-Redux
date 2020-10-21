// import App, {Container} from 'next/app'
// import React from 'react'

// export default class MyApp extends App {
//   static async getInitialProps ({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return {pageProps}
//   }

//   render () {
//     const {Component, pageProps} = this.props
//     return <Container>
//       <Component {...pageProps} />
//     </Container>
//   }
// }



// import React from 'react'
// import { Provider } from 'react-redux'
// import App, { Container } from 'next/app'
// import withRedux from 'next-redux-wrapper'
// import { initStore } from '../store'

// export default withRedux(initStore)(class MyApp extends App {
//   static async getInitialProps ({Component, ctx}) {
//     return {
//       pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
//     }
//   }

//   render () {
//     const {Component, pageProps, store} :any = this.props
//     return <Container>
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     </Container>
//   }
// })


import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../store';

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);



