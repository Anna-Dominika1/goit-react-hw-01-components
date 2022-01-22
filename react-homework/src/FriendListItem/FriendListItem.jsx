import React from "react";
import PropTypes from "prop-types";
import friendsStyles from "../friendList/FriendListItem.module.css";
const FriendListItem = ({ props }) => {
  const { name, avatar, isOnline } = props;

  return (
    <li className={friendsStyles.item}>
      <span className={isOnline ? friendsStyles.true : friendsStyles.false}>
        {isOnline ? "online" : "ofline"}
      </span>
      <img
        className={friendsStyles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendsStyles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
FriendListItem.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendListItem.propTypes = {
  props: PropTypes.object.isRequired,
};
