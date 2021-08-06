import { combineReducers } from "redux"; // 여러 개의 reducer를 하나로 합쳐 내보내는 기능을 수행
// 현재는 하나의 Reducer라 필요없지만 여러 개의 Reducer를 가진 project가 대부분이기에 익숙해지도록 구현했다.
// 결국 지금은 하나의 boardReducer를 rootReducer의 className으로 내보낸다.
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
  boardReducer,
});

export default rootReducer;
