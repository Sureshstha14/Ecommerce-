import React from 'react';
type titlescript = {
  text1: string;
  text2: string;
};

const Title = (props: titlescript) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <p className="text-3xl md:text-4xl">
          {props.text1}{' '}
          <span className="font-bold text-gray-600">{props.text2}</span>
        </p>
        <p className="w-[40px] md:w-[120px] h-[2px] bg-gray-600 mx-4"></p>
      </div>
    </div>
  );
};

export default Title;
