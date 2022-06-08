import React from "react";

import "./Header.css";

export default function HeaderNew(props) {
  return (
    <div class="dp-wrapper">
      <div class="dp-section" id="dp-section_content">
        <div class="dp-sction-data-1">
          <div class="dp-section-data-group-1">
            <div
              onClick={() => props.handleToggle()}
              class="dp-menu-icon"
            ></div>
            <a class="dp-logo" href="#"></a>
            <div class="dp-breadcrumb">{props.title}</div>
          </div>
        </div>
        <div class="dp-sction-data-2">
          <div class="dp-section-data-group-2">
            <div class="dp-right-icon-group">
              <div class="dp-date-time-marker">Date/Time: </div>
              <div class="dp-notification-icon"></div>
              <div class="dp-user-name">Hi John!</div>
              <div class="dp-profile-icon"></div>
            </div>
            <div onclick="toggler()" class="dp-right-menu-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
