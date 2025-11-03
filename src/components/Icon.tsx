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
