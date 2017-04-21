/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Single_post.graphql
 * @generated SignedSource<<135b7982db8d63aadc2a170e9cf54e68>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Single_post = {
  id: string;
  date?: ?string;
  title?: ?Single_post_title;
  content?: ?Single_post_content;
  featured_media?: ?any;
  tags?: ?Array<?Single_post_tags>;
};

export type Single_post_title = {
  rendered?: ?string;
};

export type Single_post_content = {
  rendered?: ?string;
};

export type Single_post_tags = {
  id: string;
  name?: ?string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Single_post",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "date",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Title",
      "name": "title",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "rendered",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Content",
      "name": "content",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "rendered",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": null,
      "name": "featured_media",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Media_media",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "name": "tags",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post"
};

module.exports = fragment;