import React from "react";

type ErrorPlaceholderProps = {
  title: React.ReactNode;
};

const Placeholder = ({ title }: ErrorPlaceholderProps) => {
  return (
    <div className="flex justify-center min-h-screen items-center w-full">
      <h1 className="text-red-500  text-center text-xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default Placeholder;
