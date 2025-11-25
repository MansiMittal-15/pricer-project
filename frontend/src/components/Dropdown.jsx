import React from "react";

const Dropdown = React.forwardRef(({ items, position, onItemClick }, ref) => {
  return (
    <div
      className="w-56 h-auto m-3 border solid fixed bg-white z-30 border-black rounded-lg "
      style={{ left:position.left, top: position.top}}
      ref={ref}
      role="menu"
      aria-orientation="vertical"
    >
      {items.map((item) => {
        return (
          // <a 
          //   href="/" key={item}>
          //   {" "}
          //   <div className="hover:bg-purple-800 hover:text-white py-3 text-lg px-2">{item}</div>
          // </a>
          <a 
            href={item.link || '/'} // Use a real link if available
            key={item.text || item}
            role="menuitem"
            className="block"
            onClick={() => onItemClick && onItemClick(item)} // Optional click handler
          >
            <div className="hover:bg-purple-800 hover:text-white py-3 text-lg px-2">
              {item.text || item}
            </div>
          </a>
        );
      })}
    </div>
  );
})

export default Dropdown;
