import { useContext } from "react";
import { GroupContext } from "../context/main";

const GroupCreated = () => {
    const [state, dispatch] = useContext(GroupContext);

    return (
        <h1>Группа {state.groupName} создана!</h1>
    )
}

export default GroupCreated;