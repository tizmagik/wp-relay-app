/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Archive_posts.flow
 * @generated SignedSource<<6ec35a8f2b3e892e397f95a4bd32950f>>
 * @flow
 */

'use strict';

export type Archive_posts = {
  results?: ?Archive_posts_results;
};

export type Archive_posts_results_edges = {
  node?: ?any;
  cursor: string;
};

export type Archive_posts_results_pageInfo = {
  hasNextPage: boolean;
};

export type Archive_posts_results = {
  edges?: ?Array<?Archive_posts_results_edges>;
  pageInfo: Archive_posts_results_pageInfo;
};
