export const SemiCircle = () => {

  return (
        <>
           {/* Premier demi-cercle */}
             <svg
              width="400"
              height="250"
              viewBox="0 0 508 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", bottom: 0, left: 0 }}
            >
              <circle
                cx="172.282"
                cy="335.596"
                r="283.254"
                transform="rotate(-55.881 172.282 335.596)"
                stroke="url(#paint0_linear_1_40)"
                strokeOpacity="0.15"
                strokeWidth="104"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_40"
                  x1="172.282"
                  y1="0.34256"
                  x2="172.282"
                  y2="670.85"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            {/* Deuxième demi-cercle plus petit */}
            <svg
              width="300"
              height="150"
              viewBox="0 0 508 353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", bottom: 0, left: 0 }}
            >
              <circle
                cx="172.282"
                cy="335.596"
                r="283.254"
                transform="rotate(-55.881 172.282 335.596)"
                stroke="url(#paint0_linear_1_40)"
                strokeOpacity="0.15"
                strokeWidth="104"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_40"
                  x1="172.282"
                  y1="0.34256"
                  x2="172.282"
                  y2="670.85"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
        </>
    );
};
