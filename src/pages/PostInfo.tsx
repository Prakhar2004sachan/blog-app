import React from 'react'
import { useParams } from 'react-router-dom';

function PostInfo() {
    const { postsId } = useParams();
  return (
    <div>PostInfo</div>
  )
}

export default PostInfo