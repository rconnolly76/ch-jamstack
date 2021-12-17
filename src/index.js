import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, gql, ApolloProvider } from '@apollo/client';
import { cache } from './cache';

const client = new ApolloClient({
  uri: 'https://play-summit-roger.sitecoresandbox.cloud/api/graphql/preview/v1',
  headers: {
    'X-GQL-Token': 'eDBZNHdaY1hrQWFSYVJqQ05VTmpqazJiNkllQm4zWGRFNEtTVWR6ZzBYZz18cGxheS1zdW1taXQtcm9nZXI='
  },
  cache
});

// Example inline query
// client.query({
//   query: gql`
//   query allContent {
//     allM_Content {
//       results
//       {
//         content_Name
//         contentTypeToContent {
//           id
//           contentType_Label
//         }
//       }
//     }
//   }
//   `
// }).then(res => {
//   console.log(res)
// });


ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
