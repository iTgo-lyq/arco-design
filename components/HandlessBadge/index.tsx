import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
import { isObject } from '../_util/is';
import Count from './count';
import { BadgeProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { componentConfig, getPrefixCls } from '../_handless';

const InnerColors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

const defaultProps: BadgeProps = {
  count: 0,
  maxCount: 99,
};

function Badge(baseProps: BadgeProps, ref) {
  const props = useMergeProps<BadgeProps>(baseProps, defaultProps, componentConfig.Badge);
  const {
    count,
    text,
    className,
    dotClassName,
    dot,
    maxCount,
    color,
    dotStyle: propsDotStyle,
    offset,
    style,
    status,
    rtl,
    children,
    ...restProps
  } = props;

  const prefixCls = getPrefixCls('badge');
  const dotStyle = { ...(propsDotStyle || {}) };
  const [leftOffset, topOffset] = offset || [];

  if (leftOffset) {
    dotStyle.marginRight = -leftOffset;
  }
  if (topOffset) {
    dotStyle.marginTop = topOffset;
  }

  const getDom = () => {
    if (isObject(count)) {
      return (
        <span className={cs(`${prefixCls}-custom-dot`, dotClassName)} style={dotStyle}>
          {count}
        </span>
      );
    }
    const colorStyle = !color || InnerColors.indexOf(color) > -1 ? {} : { backgroundColor: color };

    // display a red dot if color and status are NOT set
    if (text && !color && !status) {
      return (
        <span className={cs(`${prefixCls}-text`, dotClassName)} style={dotStyle}>
          {text}
        </span>
      );
    }
    if (status || (color && Number(count) <= 0)) {
      return (
        <span className={`${prefixCls}-status-wrapper`}>
          <span
            className={cs(
              `${prefixCls}-status-dot`,
              {
                [`${prefixCls}-status-${status}`]: status,
                [`${prefixCls}-color-${color}`]: color,
              },
              dotClassName
            )}
            style={{ ...colorStyle, ...dotStyle }}
          />
          {text && <span className={`${prefixCls}-status-text`}>{text}</span>}
        </span>
      );
    }
    if ((dot || color) && Number(count) > 0) {
      return (
        <span
          className={cs(
            `${prefixCls}-dot`,
            {
              [`${prefixCls}-color-${color}`]: color,
            },
            dotClassName
          )}
          style={{ ...colorStyle, ...dotStyle }}
        />
      );
    }
    return (
      <Count
        prefixCls={prefixCls}
        className={cs(`${prefixCls}-number`, dotClassName)}
        style={{ ...colorStyle, ...dotStyle }}
        maxCount={maxCount}
        count={count}
      />
    );
  };

  return (
    <span
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-status`]: status,
          [`${prefixCls}-no-children`]: !children,
          [`${prefixCls}-rtl`]: rtl,
        },
        className
      )}
      ref={ref}
      style={style}
      {...restProps}
    >
      {children}
      {getDom()}
    </span>
  );
}

const BadgeComponent = forwardRef<unknown, BadgeProps>(Badge);
BadgeComponent.displayName = 'Badge';

export default BadgeComponent;

export { BadgeProps };
