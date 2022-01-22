import React from "react";
import PropTypes from "prop-types";
import ProfileStyles from "./profilstyle.module.css";
const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={ProfileStyles.profile}>
      <div className={ProfileStyles.description}>
        <img src={avatar} alt="User avatar" className={ProfileStyles.avatarp} />
        <p className={ProfileStyles.namep}>{username}</p>
        <p className={ProfileStyles.tagp}>@{tag}</p>
        <p className={ProfileStyles.locationp}>{location}</p>
      </div>

      <ul className={ProfileStyles.statsp}>
        <li>
          <span className={ProfileStyles.labelp}>Followers</span>
          <span className={ProfileStyles.quantitp}>{stats.followers}</span>
        </li>
        <li>
          <span className={ProfileStyles.labelp}>Views</span>
          <span className={ProfileStyles.quantitp}>{stats.views}</span>
        </li>
        <li>
          <span className={ProfileStyles.labelp}>Likes</span>
          <span className={ProfileStyles.quantitp}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
