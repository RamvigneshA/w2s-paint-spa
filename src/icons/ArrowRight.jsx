import * as React from "react";
const ArrowRight = ({ color = '#262626', size = 24, position = 'right', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ transform: position === 'right' ? 'rotate(0deg)' : 'rotate(180deg)' }}
  >
    <path
      d="M19.25 6.26953L17.4922 8.02734L23.2344 13.7695H3.01953V16.2305H23.2344L17.4922 21.9727L19.25 23.7305L27.9805 15L19.25 6.26953Z"
      fill={color}
    />
  </svg>
);
export default ArrowRight;
