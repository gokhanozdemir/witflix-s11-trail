import { useState } from 'react';

import { Link } from 'react-router-dom';

function Profile(props) {
  const [avatar, setAvartar] = useState(props.kisi.avatarImageID);

  const handleAvatar = () => {
    const rastgeleSayi = Math.floor(Math.random() * 10000);
    setAvartar(rastgeleSayi);
  };

  return (
    <div className="profile">
      <img
        src={`https://api.multiavatar.com/${avatar}.svg`}
        alt={props.kisi.name + ' Avatar'}
        onClick={handleAvatar}
      />
      {/* span'ı Link ile değiştir 
      (Link'i router'dan import etmeyi unutma)
      tıklandığında "/profile/{kisi.id}" adresine yönlendir */}
      <Link to={`/profile/${props.kisi.id}`}>{props.kisi.name}</Link>
    </div>
  );
}

export default Profile;
