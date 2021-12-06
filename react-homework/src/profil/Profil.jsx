import React from "react";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatarp" />
        <p className="namep">{username}</p>
        <p className="tagp">@{tag}</p>
        <p className="locationp">{location}</p>
      </div>

      <ul className="statsp">
        <li>
          <span className="labelp">Followers</span>
          <span className="quantitp">{stats.followers}</span>
        </li>
        <li>
          <span className="labelp">Views</span>
          <span className="quantitp">{stats.views}</span>
        </li>
        <li>
          <span className="labelp">Likes</span>
          <span className="quantitp">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
