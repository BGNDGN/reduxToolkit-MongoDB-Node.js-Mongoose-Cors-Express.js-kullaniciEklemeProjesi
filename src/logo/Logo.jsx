import React from "react";
import "../css/Logo.css";

const Logos = () => {
  return (
    <div className="parent-container">

    <div className="custom-hr">
        <hr/>
    </div>

    <div className="icons">
      <a href="https://www.linkedin.com/in/burak-gündoğan-76346625a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="24px" height="24px" >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 24h4.49V7.98H.24V24zM8.81 7.98v16.02h4.49v-9.02c0-1.89.35-3.75 2.85-3.75 2.44 0 2.47 2.34 2.47 3.85v8.92h4.49v-9.62c0-5.16-2.74-7.57-6.41-7.57-2.96 0-4.28 1.63-5.01 2.77z" />
        </svg>
      </a>

      <a href="https://www.instagram.com/gundogn.burak/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg className="instagram-icon" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 448 512" fill="gray">
          <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,80.37A96.55,96.55,0,0,0,367.63,49.2C339.85,32,307.14,24,272.18,24H175.82C140.86,24,108.15,32,80.37,49.2A96.55,96.55,0,0,0,49.2,80.37C32,108.15,24,140.86,24,175.82V272.18c0,35,8,67.67,25.2,95.45A96.55,96.55,0,0,0,80.37,398.8C108.15,416,140.86,424,175.82,424H272.18c35,0,67.67-8,95.45-25.2A96.55,96.55,0,0,0,398.8,367.63C416,339.85,424,307.14,424,272.18V175.82C424,140.86,416,108.15,398.8,80.37ZM224,338A82,82,0,1,1,306,256,82,82,0,0,1,224,338Zm85.33-148.67a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.33,189.33Z" />
        </svg>
      </a>

      <a href="https://x.com/gundognburak" target="_blank" rel="noopener noreferrer" aria-label="X Twitter">
        <svg className="x-icon" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="gray">
          <path d="M4.146 3h4.877l3.172 4.796L16.902 3h4.787l-6.522 7.722L21 21h-4.872l-3.567-5.29L8.6 21H3.79l6.901-8.173zM7.433 5H5.76l10.834 14h1.672z" />
        </svg>
      </a>

        <a href="https://github.com/BGNDGN?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="gray">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 2-.27 7.7 7.7 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Logos;
