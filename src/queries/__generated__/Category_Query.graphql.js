/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Category_Query.graphql
 * @generated SignedSource<<0144b603e93384aec0ffdaefa3b767f7>>
 * @relayHash 25442c805c8cfaa20ba26a45d00ed39b
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query Category_Query(
  $id: ID!
) {
  category(id: $id) {
    ...Category_term
    id
  }
}

fragment Category_term on Category {
  id
  name
  taxonomy {
    slug
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Category_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID"
          }
        ],
        "concreteType": "Category",
        "name": "category",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Category_term",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Category_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Category_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID"
          }
        ],
        "concreteType": "Category",
        "name": "category",
        "plural": false,
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Taxonomy",
            "name": "taxonomy",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "slug",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Category_Query(\n  $id: ID!\n) {\n  category(id: $id) {\n    ...Category_term\n    id\n  }\n}\n\nfragment Category_term on Category {\n  id\n  name\n  taxonomy {\n    slug\n    id\n  }\n}\n"
};

module.exports = batch;