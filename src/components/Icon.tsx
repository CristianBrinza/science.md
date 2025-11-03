import React from 'react';

interface IconProps {
  type?: keyof typeof icons;
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  rotate?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => Promise<void> | void;
}
export const icons = {
  ro: (
    <>
      <rect width="24" height="24" rx="12" fill="#F3F4F6" />
      <g clipPath="url(#clip0_3032_5696)">
        <rect
          x="3.75"
          y="3.75"
          width="16.5"
          height="16.5"
          rx="8.25"
          fill="#B3B3B3"
        />
        <rect x="3" y="3" width="6" height="18" fill="#0052B4" />
        <rect x="9" y="3" width="6" height="18" fill="#FFDA44" />
        <rect x="15" y="3" width="6" height="18" fill="#D80027" />
      </g>
      <defs>
        <clipPath id="clip0_3032_5696">
          <rect
            x="3.75"
            y="3.75"
            width="16.5"
            height="16.5"
            rx="8.25"
            fill="white"
          />
        </clipPath>
      </defs>
    </>
  ),
  ru: (
    <>
      <rect x="0.5" width="24" height="24" rx="12" fill="#F3F4F6" />
      <g clipPath="url(#clip0_3032_5703)">
        <rect
          x="4.25"
          y="3.75"
          width="16.5"
          height="16.5"
          rx="8.25"
          fill="#B3B3B3"
        />
        <rect
          x="3.5"
          y="21"
          width="6"
          height="18"
          transform="rotate(-90 3.5 21)"
          fill="#D80027"
        />
        <rect
          x="3.5"
          y="15"
          width="6"
          height="18"
          transform="rotate(-90 3.5 15)"
          fill="#0052B4"
        />
        <rect
          x="3.5"
          y="9"
          width="6"
          height="18"
          transform="rotate(-90 3.5 9)"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_3032_5703">
          <rect
            x="4.25"
            y="3.75"
            width="16.5"
            height="16.5"
            rx="8.25"
            fill="white"
          />
        </clipPath>
      </defs>
    </>
  ),
  en: (
    <>
      <rect width="24" height="24" rx="12" fill="#F3F4F6" />
      <g clipPath="url(#clip0_3032_5698)">
        <rect
          x="3.75"
          y="3.75"
          width="16.5"
          height="16.5"
          rx="8.25"
          fill="#0052B4"
        />
        <rect x="9.75" y="3.75" width="4.5" height="16.5" fill="#F0F0F0" />
        <rect
          x="3.75"
          y="14.25"
          width="4.5"
          height="16.5"
          transform="rotate(-90 3.75 14.25)"
          fill="#F0F0F0"
        />
        <rect
          x="4.5"
          y="6.84082"
          width="2.25"
          height="18.7371"
          transform="rotate(-45 4.5 6.84082)"
          fill="#F0F0F0"
        />
        <rect
          x="17.7491"
          y="4.5"
          width="2.25"
          height="18.7371"
          transform="rotate(45 17.7491 4.5)"
          fill="#F0F0F0"
        />
        <rect
          x="3.75"
          y="13.5"
          width="3"
          height="16.5"
          transform="rotate(-90 3.75 13.5)"
          fill="#D80027"
        />
        <rect
          x="5.34418"
          y="6.24951"
          width="0.75"
          height="18.0707"
          transform="rotate(-45 5.34418 6.24951)"
          fill="#D80027"
        />
        <rect
          x="18.0279"
          y="5.25"
          width="0.75"
          height="18.0707"
          transform="rotate(45 18.0279 5.25)"
          fill="#D80027"
        />
        <rect x="10.5" y="3.75" width="3" height="16.5" fill="#D80027" />
      </g>
      <defs>
        <clipPath id="clip0_3032_5698">
          <rect
            x="3.75"
            y="3.75"
            width="16.5"
            height="16.5"
            rx="8.25"
            fill="white"
          />
        </clipPath>
      </defs>
    </>
  ),
  loading: (
    <>
      <path
        opacity="0.1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5 3.34302C9.51088 3.34302 7.60322 4.13319 6.1967 5.53972C4.79018 6.94624 4 8.85389 4 10.843C4 12.8321 4.79018 14.7398 6.1967 16.1463C7.60322 17.5528 9.51088 18.343 11.5 18.343C13.4891 18.343 15.3968 17.5528 16.8033 16.1463C18.2098 14.7398 19 12.8321 19 10.843C19 8.85389 18.2098 6.94624 16.8033 5.53972C15.3968 4.13319 13.4891 3.34302 11.5 3.34302ZM1 10.843C1 5.04402 5.701 0.343018 11.5 0.343018C17.299 0.343018 22 5.04402 22 10.843C22 16.642 17.299 21.343 11.5 21.343C5.701 21.343 1 16.642 1 10.843Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5003 3.34303C9.56664 3.33889 7.70696 4.0857 6.31325 5.42603C6.02453 5.69299 5.64252 5.83589 5.24947 5.82398C4.85643 5.81206 4.48378 5.64628 4.21175 5.36233C3.93973 5.07837 3.79008 4.69895 3.79504 4.30576C3.8 3.91256 3.95916 3.53704 4.23825 3.26003C6.19029 1.38467 8.79333 0.339074 11.5003 0.343029C11.8981 0.343029 12.2796 0.501064 12.5609 0.782369C12.8422 1.06367 13.0003 1.4452 13.0003 1.84303C13.0003 2.24085 12.8422 2.62238 12.5609 2.90369C12.2796 3.18499 11.8981 3.34303 11.5003 3.34303Z"
        fill="currentColor"
      />
    </>
  ),
  menu: (
    <>
      <path
        d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6ZM4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12ZM5 17C4.73478 17 4.48043 17.1054 4.29289 17.2929C4.10536 17.4804 4 17.7348 4 18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17H5Z"
        fill="currentColor"
      />
    </>
  ),
};
const Icon: React.FC<IconProps> = ({
  type,
  size,
  width,
  height,
  color = 'var(--theme_primary_color_black)',
  rotate = '0',
  className = '',
  style,
  onClick,
}) => {
  const finalWidth = width || size || '24px';
  const finalHeight = height || size || '24px';

  return (
    <svg
      style={{
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
      onClick={onClick}
      className={className}
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      {type && icons[type]}
    </svg>
  );
};

export default Icon;
