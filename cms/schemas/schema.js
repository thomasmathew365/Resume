// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import author from './author';
import blockContent from './blockContent';
import blog from './blog';
import category from './category';
import comment from './comment';
import home from './home';
import post from './post';

// First, we must import the schema creator
// We import object and document schemas
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    comment,
    blog,
    home
  ]),
})
