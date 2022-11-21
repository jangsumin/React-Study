import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <Comment name={"장수민"} comment={"처음으로 만든 컴포넌트입니다."}/>
      <Comment name={"말왕"} comment={"운동 중입니다."}/>
      <Comment name={"KFC 할아버지"} comment={"징거버거 만드는 중입니다."} />
    </div>
  );
}

export default CommentList;