import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import FbComments from '@site/src/components/FbComments';

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = props;
  return (
    <>
      <BlogPostItem {...props} />
      {/* Solo se muestran los comentarios si estamos viendo el post completo */}
      {isBlogPostPage && <FbComments />}
    </>
  );
}
