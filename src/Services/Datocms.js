import { GraphQLClient } from 'graphql-hooks';

export const API_URL = 'https://graphql.datocms.com/';
export const API_TOKEN ='f99dfc998a43929e417cab61b132aa';

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${API_TOKEN}`,
  }
});