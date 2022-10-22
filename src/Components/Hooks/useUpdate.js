import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';


const useUpdate = () => {

  async function update() {
    const client = buildClient({ apiToken: '126a9840ad52f13ded80e6ac84b657' });
    const itemId = '37138133';
    const item = await client.items.update(itemId, {
      // we just pass the field that we want to change
      favorite: '{"favorite": ["codeProd:","banananas"]}',
    });
    console.log(item);
  }

  
  return {
    update
  }
}

export default useUpdate