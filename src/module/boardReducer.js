// Action Type : Action의 Type을 선언해 놓은 녀석들
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";

// Action Create Function : dispatch를 통해 명령이 떨어지면, 선언 되어진 Action Type을 가지고 Action 객체를 생성한다.
export const boardSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    boardId: saveData.boardId,
    boardTitle: saveData.boardTitle,
    boardContent: saveData.boardContent,
  },
});

export const boardRemove = (boardId) => ({
  type: MODE_REMOVE,
  boardId: boardId,
});

export const boardSelectRow = (boardId) => ({
  type: MODE_SELECT_ROW,
  boardId: boardId,
});

// initState
const initialState = {
  boards: [
    {
      boardId: 1,
      boardTitle: "제목1",
      boardContent: "내용내용내용1",
    },
    {
      boardId: 2,
      boardTitle: "제목2",
      boardContent: "내용내용내용2",
    },
    {
      boardId: 3,
      boardTitle: "제목3",
      boardContent: "내용내용내용3",
    },
    {
      boardId: 4,
      boardTitle: "제목4",
      boardContent: "내용내용내용4",
    },
    {
      boardId: 5,
      boardTitle: "제목5",
      boardContent: "내용내용내용5",
    },
  ],
  lastId: 5,
  selectRowData: {},
};

// Reducer : 생성된 Action을 참조해 Type에 맞게 Store의 State에 변경을 준다.
// 이 때 Reducer의 초기 state 값은 initialState를 참조한다.
export default function boardReducer(state = initialState, action) {
  switch (
    action.type // 클릭한 boardId를 가지지 않은 data만 return
  ) {
    case MODE_REMOVE:
      return {
        ...state,
        boards: state.boards.filter((row) => row.boardId !== action.boardId),
      };
    case MODE_SAVE:
      if (action.saveData.boardId === "") {
        // boardId가 없다면 신규 데이터 저장
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            // concat 함수 : 두 개의 문자열을 하나의 문자열로 만들어주는 역할
            ...action.saveData,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        // boardId가 있다면 기존 데이터 수정
        return {
          ...state,
          boards: state.boards.map((data) =>
            data.boardId === action.saveData.boardId
              ? { ...action.saveData }
              : data
          ),
          selectRowData: {},
        };
      }

    case MODE_SELECT_ROW:
      return {
        //클릭한 셀의 boardId를 가진 state만 찾아서 return
        ...state,
        selectRowData: state.boards.find(
          (row) => row.boardId === action.boardId
        ),
      };
    default:
      return state;
  }
}
