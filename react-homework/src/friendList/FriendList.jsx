import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import friendsStyles from "./friendListItem.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={friendsStyles.ul_wrapper}>
      {friends.map((prop) => (
        <FriendListItem props={prop} key={prop.id} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
