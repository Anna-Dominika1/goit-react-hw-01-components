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

Profile.defaultProps = {
  avatar:
    "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=dgCF0utHY-wAX9vvQku&edm=ABmJApABAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT8E35fGfy2SkHKncfgC3I-9kAeN-z38PozGq9M8gkrujA&oe=6207180F&_nc_sid=6136e7",
  tag: "@nickName",
  location: "Not Found",
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
