import React, { ReactElement } from 'react';
import IconLoading from '../../icon/react-handless-icon/IconLoading';
import cs from '../_util/classNames';
import DotLoading from './dot-loading';
import { SpinProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { componentConfig, getPrefixCls } from '../_handless';

function Spin(baseProps: SpinProps, ref) {
  const props = useMergeProps<SpinProps>(baseProps, {}, componentConfig.Spin);
  const {
    style,
    className,
    children,
    loading,
    size,
    icon,
    element,
    tip,
    dot,
    block = false,
    ...rest
  } = props;

  const prefixCls = getPrefixCls('spin');

  const loadingIcon = (
    <span className={`${prefixCls}-icon`}>
      {icon
        ? React.cloneElement(icon as ReactElement, {
            className: cs(`${prefixCls.replace('-spin', '-icon')}-loading`),
            style: {
              fontSize: size,
            },
          })
        : element ||
          (dot ? <DotLoading size={size} /> : <IconLoading style={{ fontSize: size }} />)}
    </span>
  );

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-block`]: block,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-with-tip`]: tip && !children,
        },
        className
      )}
      style={style}
      {...rest}
    >
      {children ? (
        <>
          <div className={`${prefixCls}-children`}>{children}</div>
          {loading && (
            <div className={`${prefixCls}-loading-layer`} style={{ fontSize: size }}>
              <span className={`${prefixCls}-loading-layer-inner`}>
                {loadingIcon}
                {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
              </span>
            </div>
          )}
        </>
      ) : (
        <>
          {loadingIcon}
          {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
        </>
      )}
    </div>
  );
}

const SpinComponent = React.forwardRef<unknown, SpinProps>(Spin);

SpinComponent.displayName = 'Spin';

export default SpinComponent;

export { SpinProps };
