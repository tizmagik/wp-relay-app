/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Single_post.flow
 * @generated SignedSource<<c17f45128cb8b7bce345ac4d44f7589e>>
 * @flow
 */

'use strict';

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
