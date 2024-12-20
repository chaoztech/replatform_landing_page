import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClickHandler}
      className={props.className}
    >
      {props.imgSrc && <img className="prefix-img" src={props.imgSrc} />}
      {props.text}
      {props.postFixImg && <img className="postfix-img" src={props.postFixImg} />}
    </button>
  );
};

export default Button;
