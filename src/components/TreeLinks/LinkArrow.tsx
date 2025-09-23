import React from 'react';

// 常量定义
const SVG_PATHS = {
  ARROW_HEAD:
    'M11.136 22.2862L11.1313 22.2863C11.1243 22.2863 11.1174 22.2849 11.1109 22.2823C11.1045 22.2796 11.0986 22.2756 11.0937 22.2707L11.0937 22.2707L11.0917 22.2687C11.0805 22.2575 11.0742 22.2422 11.0742 22.2263C11.0742 22.2105 11.0805 22.1953 11.0917 22.1841C11.0917 22.184 11.0917 22.184 11.0917 22.184L14.4286 18.8471L14.7822 18.4936L14.4286 18.14L11.1009 14.8123C11.0922 14.8014 11.0875 14.7878 11.0877 14.7737C11.088 14.7582 11.0943 14.7434 11.1052 14.7324C11.1162 14.7214 11.131 14.7151 11.1466 14.7149C11.1606 14.7146 11.1743 14.7193 11.1852 14.7281L14.9083 18.4512C14.9195 18.4625 14.9258 18.4777 14.9258 18.4936C14.9258 18.5095 14.9195 18.5247 14.9083 18.5359L11.1758 22.2685L11.1758 22.2685L11.1736 22.2707C11.1687 22.2756 11.1628 22.2796 11.1564 22.2823C11.1499 22.2849 11.143 22.2863 11.136 22.2862Z',
  CONNECTOR: 'M1 10V13.5C1 16.2614 3.23858 18.5 6 18.5H15',
  VERTICAL_LINE_TOP: 'M1 0 V14',
  VERTICAL_LINE_BOTTOM: 'M1 14 V36',
};

const COLORS = {
  ACTIVE: 'currentColor',
  INACTIVE: 'var(--app-shell-border-color)',
  HIGHLIGHT: 'var(--nl-color)',
};

// 接口定义
export interface NavArrowProps {
  isLast: boolean;
  isActive?: boolean;
  isBefore?: boolean;
  isAfter?: boolean;
}

// SVG子组件
const ArrowHead: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <path
    d={SVG_PATHS.ARROW_HEAD}
    className="arrow-head"
    strokeWidth="2"
    stroke={isActive ? COLORS.ACTIVE : COLORS.INACTIVE}
  />
);

const Connector: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <path
    d={SVG_PATHS.CONNECTOR}
    className="connector"
    strokeWidth="2"
    stroke={isActive ? COLORS.ACTIVE : COLORS.INACTIVE}
  />
);

const VerticalLine: React.FC<{
  type: 'top' | 'bottom';
  isActive?: boolean;
  isBefore?: boolean;
  isAfter?: boolean;
}> = ({ type, isActive, isBefore, isAfter }) => (
  <path
    d={type === 'top' ? SVG_PATHS.VERTICAL_LINE_TOP : SVG_PATHS.VERTICAL_LINE_BOTTOM}
    className={`vertical-line-${type}`}
    strokeWidth="2"
    stroke={
      type === 'top'
        ? isActive || (isBefore && !isAfter)
          ? COLORS.HIGHLIGHT
          : COLORS.INACTIVE
        : !isActive && isBefore
          ? COLORS.HIGHLIGHT
          : COLORS.INACTIVE
    }
  />
);

// 主组件
export function LinkArrow({ isLast, isActive, isAfter, isBefore }: NavArrowProps) {
  return (
    <svg width="18" height="36" viewBox="0 0 16 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ArrowHead isActive={isActive} />
      {!isActive && <Connector isActive={isActive} />}
      {!isLast && <VerticalLine type="bottom" isActive={isActive} isAfter={isAfter} isBefore={isBefore} />}
      {isActive && <Connector isActive={isActive} />}
      <VerticalLine type="top" isActive={isActive} isBefore={isBefore} />
    </svg>
  );
}
