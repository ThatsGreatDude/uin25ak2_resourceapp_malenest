import React, { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <h1>{title}</h1>; 
};

export default PageTitle;
