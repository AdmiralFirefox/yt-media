interface WarningProps {
  width?: string;
  height?: string;
}

const Warning = ({ width = "256px", height = "256px" }: WarningProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <defs />
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(232,0,0)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M 45 60.473 c -2.493 0 -4.515 -2.022 -4.515 -4.515 v -36.44 c 0 -2.493 2.022 -4.515 4.515 -4.515 s 4.515 2.022 4.515 4.515 v 36.44 C 49.515 58.451 47.493 60.473 45 60.473 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(255,255,255)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M 45 75.003 c -1.186 0 -2.348 -0.486 -3.195 -1.333 c -0.203 -0.203 -0.395 -0.44 -0.564 -0.677 c -0.158 -0.248 -0.294 -0.508 -0.406 -0.79 c -0.113 -0.271 -0.203 -0.553 -0.26 -0.836 c -0.056 -0.293 -0.09 -0.586 -0.09 -0.88 c 0 -1.197 0.485 -2.359 1.321 -3.195 c 0.214 -0.215 0.44 -0.407 0.688 -0.564 c 0.249 -0.17 0.508 -0.305 0.779 -0.418 c 0.271 -0.112 0.553 -0.203 0.847 -0.26 c 0.576 -0.112 1.186 -0.112 1.761 0 c 0.294 0.057 0.576 0.148 0.847 0.26 c 0.27 0.112 0.53 0.248 0.778 0.418 c 0.248 0.158 0.474 0.349 0.689 0.564 c 0.834 0.836 1.321 1.997 1.321 3.195 c 0 1.185 -0.486 2.348 -1.321 3.182 c -0.215 0.215 -0.441 0.407 -0.689 0.564 c -0.248 0.159 -0.508 0.305 -0.778 0.418 c -0.271 0.114 -0.553 0.204 -0.847 0.26 C 45.587 74.969 45.293 75.003 45 75.003 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(255,255,255)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Warning;
