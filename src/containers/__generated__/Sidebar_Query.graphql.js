/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Sidebar_Query.graphql
 * @generated SignedSource<<468e7a80e27f07bb56dcdea612ab1639>>
 * @relayHash f1bc8c84760effbc1ff8729c0342a489
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query Sidebar_Query(
  $sidebarID: ID!
) {
  sidebar(id: $sidebarID) {
    ...Sidebar_sidebar
    id
  }
}

fragment Sidebar_sidebar on Sidebar {
  widgets {
    classname
    content {
      rendered
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "sidebarID",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Sidebar_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "sidebarID",
            "type": "ID"
          }
        ],
        "concreteType": "Sidebar",
        "name": "sidebar",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Sidebar_sidebar",
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
  "name": "Sidebar_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "sidebarID",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "Sidebar_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "sidebarID",
            "type": "ID"
          }
        ],
        "concreteType": "Sidebar",
        "name": "sidebar",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Widget",
            "name": "widgets",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "classname",
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
              }
            ],
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
    ]
  },
  "text": "query Sidebar_Query(\n  $sidebarID: ID!\n) {\n  sidebar(id: $sidebarID) {\n    ...Sidebar_sidebar\n    id\n  }\n}\n\nfragment Sidebar_sidebar on Sidebar {\n  widgets {\n    classname\n    content {\n      rendered\n    }\n  }\n}\n"
};

module.exports = batch;
