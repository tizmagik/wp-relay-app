/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Image_image.graphql
 * @generated SignedSource<<7aff42968883ae76cc6335832bacebf9>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Image_image = {
  source_url?: ?string;
  media_details?: ?Image_image_media_details;
};

export type Image_image_media_details_sizes = {
  name?: ?string;
  source_url?: ?string;
};

export type Image_image_media_details = {
  sizes?: ?Array<?Image_image_media_details_sizes>;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Image_image",
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "Image",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "source_url",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "ImageDetails",
          "name": "media_details",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "MediaSize",
              "name": "sizes",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "name",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "source_url",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Media"
};

module.exports = fragment;