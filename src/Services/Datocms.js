import { GraphQLClient } from 'graphql-hooks';

export const API_URL = 'https://graphql.datocms.com/';
export const API_TOKEN ='126a9840ad52f13ded80e6ac84b657';

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${API_TOKEN}`,
  }
});