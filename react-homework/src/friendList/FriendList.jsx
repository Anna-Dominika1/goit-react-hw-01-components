import React from "react";
const FriendListItem = ({ a }) => {
  const { name, avatar, isOnline } = a;

  return (
    <li className="item">
      <span className={isOnline ? "true" : "false"}>
        {isOnline ? "online" : "ofline"}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
const FriendList = ({ friends }) => {
  return (
    <ul className="ul_wrapper">
      {friends.map((prop) => (
        <FriendListItem a={prop} key={prop.id} />
      ))}
    </ul>
  );
};

export default FriendList;
