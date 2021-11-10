import React from 'react';
import "./post.css";

export type PostProps = {
  /**
   * a nickname to be rendered in the component.
   */
  nickname: string
  /**
   * a url to an avatar image.
   */
  avatar: string
  /**
   * a url for the image to display.
   */
  image: string
  /**
   * a text snippet to be rendered
   */
  caption: string
  /**
   * a unique key for this post
   */
  key: string
};

export function Post({ nickname, avatar, image, caption }: PostProps) {
  return (
    <article className="Post">
        <header>
            <div className="Post-user">
                <div className="Post-user-avatar">
                    <img src={avatar} alt={nickname} />
                </div>
                <div className="Post-user-nickname">
                    <span>{nickname}</span>
                </div>
            </div>
        </header>
        <div className="Post-image">
            <div className="Post-image-bg">
                <img alt={caption} src={image} />
            </div>
        </div>
        <div className="Post-social">
            <div></div>
            <div></div>
        </div>
        <div className="Post-caption">
            <strong>{nickname}</strong> {caption}
        </div>
        <div className="Post-comment">
            <div></div>
        </div>
    </article>
  );
}
