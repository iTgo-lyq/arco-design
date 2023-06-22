import React, { CSSProperties, PropsWithChildren, forwardRef } from 'react';
import cs from '../_util/classNames';
import { AvatarProps } from './interface';
import { isNumber } from '../_util/is';
import { componentConfig, getPrefixCls } from '../_handless';

const defaultProps: AvatarProps = {
  shape: 'circle',
  triggerType: 'button',
};

const Avatar = forwardRef<HTMLElement, PropsWithChildren<AvatarProps>>(
  (props: PropsWithChildren<AvatarProps>, ref) => {
    const prefixCls = getPrefixCls('avatar');
    const mergedProps = { ...defaultProps, ...componentConfig.Avatar, ...props };

    const {
      className,
      shape,
      size,
      children,
      triggerIcon,
      triggerIconStyle,
      triggerType,
      rtl,
      onClick,
      ...rest
    } = mergedProps;
    const style = { ...props.style };

    const classNames = cs(
      prefixCls,
      `${prefixCls}-${shape}`,
      {
        [`${prefixCls}-with-trigger-icon`]: triggerIcon,
        [`${prefixCls}-rtl`]: rtl,
      },
      className
    );
    const childrenList = React.Children.toArray(children);
    const isImage =
      childrenList.length === 1 &&
      React.isValidElement(childrenList[0]) &&
      childrenList[0].type !== 'string';

    const _triggerIconStyle: CSSProperties = triggerIconStyle || {};
    if (
      triggerType === 'button' &&
      (!triggerIconStyle || (triggerIconStyle && !triggerIconStyle.color)) &&
      style &&
      style.backgroundColor
    ) {
      _triggerIconStyle.color = style.backgroundColor;
    }

    return (
      <div
        ref={ref as any}
        onClick={onClick}
        {...rest}
        style={{
          width: size,
          height: size,
          fontSize: isNumber(size) ? size / 2 : '',
          ...style,
        }}
        className={classNames}
      >
        {isImage ? <span className={`${prefixCls}-image`}>{children}</span> : null}
        {!isImage && <span className={`${prefixCls}-text`}>{children}</span>}
        {triggerIcon && (
          <div className={`${prefixCls}-trigger-icon-${triggerType}`} style={_triggerIconStyle}>
            {triggerIcon}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
