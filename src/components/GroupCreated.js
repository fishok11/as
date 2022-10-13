import { useContext } from "react";
import { GroupContext } from "../context/main";
import GroupOwner from "./GroupOwner";

const GroupCreated = () => {
	const [state, dispatch] = useContext(GroupContext);

	return (
		<div className="croip-created--container">
			<h1>Группа {state.groupName} создана!</h1>
			<GroupOwner/>
		</div>
	)
}

export default GroupCreated;