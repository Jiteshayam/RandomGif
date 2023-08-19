import React from "react";
import { LuDownload } from 'react-icons/lu'


const card = ({gif,loadingDownload,download}) => {
  return (
    <div className="tagimgcontainter">
      <img className="tagImg" src={gif.images.downsized_large.url} alt="" />
      <p className="imgtitle">{gif.title}</p>

      {loadingDownload ? (
        <Spinner />
      ) : (
        <a
          href="" target="_blank"
          onClick={() => download(gif.images.downsized_large.url, gif.title)}
        >
          <LuDownload />
        </a>
      )}
    </div>
  );
};

export default card;
