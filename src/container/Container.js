import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../component/BoardList";
import BoardNew from "../component/BoardNew";
import { boardRemove, boardSave, boardSelectRow } from "../module/boardReducer";

function Container() {
  // State
  let [inputData, setInputData] = useState({
    boardId: "",
    boardTitle: "",
    boardContent: "",
  });

  // 함수형 컴포넌트에서 dispatch를 사용할 수 있게 해줌.
  const dispatch = useDispatch();

  // onRemove와 onSave는 Action을 dispatch하는 함수
  const onRemove = (boardId) => dispatch(boardRemove(boardId));
  const onSave = (saveData) => dispatch(boardSave(saveData));

  // reducer state의 selectRowData field를 가져온 뒤 subscribe(구독)
  const { selectRowData } = useSelector((state) => state.boardReducer);

  // User Function
  const onRowClick = (boardId) => {
    // dispatch를 하고,
    dispatch(boardSelectRow(boardId));

    // inputData에 selectRowData의 값을 반영
    if (JSON.stringify(selectRowData) === "{}") {
      // Javascript 값이나 객체를 JSON 문자열로 변환
      setInputData({
        boardId: selectRowData.boardId,
        boardTitle: selectRowData.boardTitle,
        boardContent: selectRowData.boardContent,
      });
    }
  };

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      boardId: "",
      boardTitle: "",
      boardContent: "",
    });
  };

  // reducer state의 boards field를 가져온 뒤 subscribe(구독)
  const { boards } = useSelector((state) => state.boardReducer);

  return (
    <div>
      <div>
        <table border="1">
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Container;
