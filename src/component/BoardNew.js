import React from "react";

// 입력 폼의 기능을 수행하는 컴포넌트
// 돌아가는 원리가 어떻냐면 BoardList.js에서 셀을 클릭하지 않았다면 현 Store의 state에는 초기값만이 들어가있을테고
// input에 값을 입력 후 저장하면 현 데이터만을 가지고 Action을 생성 후 onSave() 함수를 통해 dispatch한다.
// 수정의 경우라면 BoardList.js에서 셀을 클릭해 해당 boardId를 가지고 Action을 생성해 dispatch 했을 테고,
// 이로 인해 store의 state에 selectRowData: {} 안에 해당 boardId를 가진 데이터가 들어가게 된다.
// 이 때 Container.js 에서 Store의 state에 구독을 해놨기 때문에 변경 값을 감지하고 다시 BoardNew.js 컴포넌트를 리렌더링하고,
// 인자로 inputData를 보내는데 각 input마다 inputData 안의 데이터를 setting 시켜놓는 원리이다.
function BoardNew({ onSave, changeInput, inputData, resetForm }) {
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave(inputData);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div>
          제목 :
          <input
            type="text"
            name="boardTitle"
            onChange={changeInput}
            value={inputData.boardTitle}
          />
        </div>
        <div>
          내용 :
          <input
            type="text"
            name="boardContent"
            onChange={changeInput}
            value={inputData.boardContent}
          />
        </div>
        <input
          type="hidden"
          name="boardId"
          onChange={changeInput}
          value={inputData.boardId}
        />
        <button type="submit">신규 게시글 저장</button>
      </form>
    </div>
  );
}

export default BoardNew;
