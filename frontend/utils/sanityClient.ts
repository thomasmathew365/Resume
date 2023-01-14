import { createClient } from 'next-sanity';

// export default class SanityClient {
//   client;

//   constructor() {    
//     this.client = createClient({
//       projectId: process.env.NEXT_PUBLIC_SANITY_ID,
//       dataset: "production",
//       apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//       useCdn: false,
//     });
//   }

//   public async Query(query: string) {
//     try {
//       return await this.client.fetch(query);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }


// const sanityClient = require('@sanity/client')


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
})

export default client