import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../../store/actions/actions";
import UserInfo from "./UserInfo";
import UserForm from "./UserForm";

const User = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.group);
  useEffect(() => {
    dispatch(resetState())
  }, [dispatch]);

  console.log(state)
  return (
    <>
      <UserInfo />
      <UserForm />
    </>
  )
};

export default User;