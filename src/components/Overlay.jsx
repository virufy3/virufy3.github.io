import React from "react";

export default function Overlay({ active, ...props }) {
  const hasChildren = typeof props.children !== "undefined";

  return (
    <>
      {active && (
        <div className="bg-black bg-opacity-30 fixed inset-0 z-10" {...props}>
          {hasChildren && <div className="z-20">{props.children}</div>}
        </div>
      )}
    </>
  );
}
