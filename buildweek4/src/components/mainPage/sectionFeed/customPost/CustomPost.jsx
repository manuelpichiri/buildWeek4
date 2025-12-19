import {
  ThumbsUp,
  MessageSquareText,
  Repeat2,
  Send,
  Plus,
  Ellipsis,
} from "lucide-react";
import Linkify from "linkify-react";
import "./style.css";

const CustomPost = ({
  authorSrcImg,
  authorName,
  authorFollowersNum,
  authorJobTitle,
  caption,
  postSrcImg,
  timeAgo,
  isSponsored,
}) => {
  return (
    <div className="custom-post-main-container bg-white">
      <div className="custom-post-header">
        <div className="custom-post-header-author">
          <div className="custom-post-header-author-logo">
            <img
              className={authorJobTitle ? "rounded-pill" : ""}
              src={authorSrcImg}
              alt="author logo"
            />
          </div>
          <div className="custom-post-header-author-description">
            <h5 className="m-0">{authorName}</h5>
            {authorFollowersNum ? (
              <p className="m-0">{authorFollowersNum} follower</p>
            ) : (
              <p className="m-0">{authorJobTitle}</p>
            )}
            {isSponsored ? (
              <p className="m-0">Post sponsorizzato</p>
            ) : (
              <div className="d-flex align-items-center gap-1">
                <p className="m-0">{timeAgo}</p>
                <span>&#183;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="custom-post-header-follow-container">
            <div className="d-flex align-items-center gap-1">
              <Plus size={20} />
              <p className="m-0">Segui</p>
            </div>
            <div>
              <Ellipsis size={20} />
            </div>
          </div>
        </div>
      </div>

      <Linkify options={{ className: "custom-post-caption-link" }}>
        <p className="custom-post-caption">{caption}</p>
      </Linkify>
      <img
        className="w-100 object-fit-cover d-block"
        src={postSrcImg}
        alt="post image"
      />

      <div className="custom-post-footer mt-4">
        <div>
          <ThumbsUp size={16} />
          <p className="d-none d-sm-block">Consiglia</p>
        </div>
        <div>
          <MessageSquareText size={16} />
          <p className="d-none d-sm-block">Commenta</p>
        </div>
        <div>
          <Repeat2 size={16} />
          <p className="d-none d-sm-block">Diffondi il post</p>
        </div>
        <div>
          <Send size={16} />
          <p className="d-none d-sm-block">Invia</p>
        </div>
      </div>
    </div>
  );
};

export default CustomPost;
