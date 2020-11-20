import React from "react";

const CaseFiles = ({ folders, status }) => {
  return (
    <>
      <h1>CASE FILES</h1>
      <ul>
        {folders.map((folder, i) => {
          const { files, title } = folder;
          return (
            <li key={i}>
              {title}
              <ul>
                {files.map((file, i) => {
                  return <li key={i}>{file}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <h2>Status</h2>
      {status}
    </>
  );
};

export default CaseFiles;
