import React, { ReactNode, forwardRef } from 'react';
import IconLoading from '../../icon/react-handless-icon/IconLoading';
import { componentConfig, getPrefixCls } from '../_handless';
import cs from '../_util/classNames';
import useMergeProps from '../_util/hooks/useMergeProps';
import Group from './group';
import type { ButtonProps } from './interface';

function processChildren(children?: ReactNode) {
  const childrenList = [];
  let isPrevChildPure = false;
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child
  );
}

const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  shape: 'square',
};

function Button(baseProps: ButtonProps, ref) {
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, componentConfig.Button);
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    size = 'default',
    shape,
    href,
    anchorProps,
    disabled,
    loading,
    loadingFixedWidth,
    icon,
    iconOnly,
    rtl,
    long,
    ...rest
  } = props;

  const iconNode = loading ? <IconLoading /> : icon;

  const prefixCls = getPrefixCls('btn');
  const _type = type === 'default' ? 'secondary' : type;
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${_type}`,
    `${prefixCls}-size-${size}`,
    `${prefixCls}-shape-${shape}`,
    {
      [`${prefixCls}-long`]: long,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-loading-fixed-width`]: loadingFixedWidth,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-link`]: href,
      [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-rtl`]: rtl,
    },
    className
  );

  const InnerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );

  if (href) {
    const _anchorProps = { ...anchorProps };
    if (disabled) {
      delete _anchorProps.href;
    } else {
      _anchorProps.href = href;
    }
    return (
      <a
        ref={ref}
        {...rest}
        {..._anchorProps}
        style={style}
        className={classNames}
        onClick={undefined}
      >
        {InnerContent}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      {...rest}
      style={style}
      className={classNames}
      type={htmlType}
      disabled={disabled}
      onClick={undefined}
    >
      {InnerContent}
    </button>
  );
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __BYTE_BUTTON: boolean;
  Group: typeof Group;
};

ButtonComponent.__BYTE_BUTTON = true;

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export type { ButtonProps };
