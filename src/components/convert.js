import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("useEffect trigerred");
  }, [language, text]);
  return <div></div>;
};
export default Convert;
