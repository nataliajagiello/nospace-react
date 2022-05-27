import React from 'react';

type NoSpaceProps = {
    text: string;
}

const NoSpace = (props: NoSpaceProps) => {

    const removeSpaces = (text: string) => {
        if (typeof text !== "string") throw new TypeError("String is required!");
        return text.replace(/\s/g, "");
      };

  return (
        <p>
          {removeSpaces(props.text)}
        </p>
  );
}

export default NoSpace;
