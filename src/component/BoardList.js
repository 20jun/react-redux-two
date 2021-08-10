import React from "react";

// 데이터를 뿌려주는 목록의 역할을 하는 컴포넌트
// 부모 컴포넌트(Container.js)로부터 받은 onRowClick() 함수를 각 셀마다 onClick으로 주었다.
// 이는 각 셀을 클릭할 때마다 boardId를 가지고 Actio을 생성해 dispatch할 수 있도록 한다.
// onRemove도 마찬가지
function BoardList({
  boardId,
  boardTitle,
  boardContent,
  onRemove,
  onRowClick,
}) {
  return (
    <tr>
      <td onClick={() => onRowClick(boardId)}>{boardId}</td>
      <td onClick={() => onRowClick(boardId)}>{boardTitle}</td>
      <td onClick={() => onRowClick(boardId)}>{boardContent}</td>
      <td>
        <button onClick={() => onRemove(boardId)}>삭제</button>
      </td>
    </tr>
  );
}

export default BoardList;
