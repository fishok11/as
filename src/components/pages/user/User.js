import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../../../store/actions/actions";
import UserInfo from "./UserInfo";
import UserForm from "./UserForm";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState())
  }, [dispatch]);

  return (
    <>
      <UserInfo />
      <UserForm />
    </>
  )
};

export default User;