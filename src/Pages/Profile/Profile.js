import React, { useState } from 'react';
import "../Profile/Profile.css";

// Make sure these components use default exports
import Left from '../../Components/LeftSide/Left';
import ProfileMiddle from '../../Components/Profile/ProfileMiddle';
import Right from '../../Components/RightSide/Right';
import Nav from '../../Components/Navigation/Nav';

// Make sure ProfileImg is a real image path
import ProfileImg from "../../assets/profile.jpg";

const Profile = () => {
  const [following, setFollowing] = useState(3);
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [images, setImages] = useState(null);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImg, setProfileImg] = useState(ProfileImg);

  const [modelDetails, setModelDetails] = useState({
    ModelName: "Vijay",
    ModelUserName: "@Vijay98",
    ModelCountryName: "India",
    ModelJobName: "Web Developer in Google"
  });

  return (
    <div className='interface'>
      {/* Nav */}
      <Nav
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        profileImg={profileImg}
      />

      <div className="home">
        {/* Left Side */}
        <Left
          following={following}
          setFollowing={setFollowing}
          profileImg={profileImg}
          modelDetails={modelDetails}
        />

        {/* Middle Profile */}
        <ProfileMiddle
          following={following}
          search={search}
          images={images}
          setImages={setImages}
          name={name}
          setName={setName}
          userName={userName}
          setUserName={setUserName}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          modelDetails={modelDetails}
          setModelDetails={setModelDetails}
        />

        {/* Right Side */}
        <Right
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          following={following}
          setFollowing={setFollowing}
        />
      </div>
    </div>
  );
}

export default Profile;
