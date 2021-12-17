import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Content from './Content';

const GET_CONTENT_ITEMS = gql`

      query allContent {
        allM_Content {
          results
          {
            content_Name
            cmpContentToMasterLinkedAsset {
                results {
                    urls
                }
            }
            contentTypeToContent {
              id
              contentType_Label
            }
          }
        }
      }
      `;
  
const ContentItems = () => {
    const { loading, data, error } = useQuery(GET_CONTENT_ITEMS);
    if (loading) return <p>loading..</p>
    return (
<>
<h1>Latest Content</h1>
<u1>
    {data.allM_Content.results.map(result => <Content content={result} />)}
</u1>
</>

    )
};

export default ContentItems;