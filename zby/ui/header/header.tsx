import React from 'react';
import "./header.css";

export type HeaderProps = {
  /**
   * destination url when user clicks on logo
   */
  url: string
};

export function Header({ url }: HeaderProps) {
  return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
              <a className="Nav-brand-logo" href={url}>
                Instagram
              </a>
          </div>
        </div>
      </nav>
  );
}
