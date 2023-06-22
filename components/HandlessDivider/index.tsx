import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
import { DividerProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { componentConfig, getPrefixCls } from '../_handless';

const defaultProps: DividerProps = {
  type: 'horizontal',
  orientation: 'center',
};

function Divider(baseProps: DividerProps, ref) {
  const props = useMergeProps<DividerProps>(baseProps, defaultProps, componentConfig.Divider);
  const { children, style, className, type, orientation, ...rest } = props;

  const prefixCls = getPrefixCls('divider');
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-with-text-${orientation}`]: children && orientation,
    },
    className
  );

  return (
    <div role="separator" ref={ref} className={classNames} style={style} {...rest}>
      {children && type === 'horizontal' ? (
        <span className={`${prefixCls}-text ${prefixCls}-text-${orientation}`}>{children}</span>
      ) : null}
    </div>
  );
}

const DividerComponent = forwardRef<unknown, DividerProps>(Divider);

DividerComponent.displayName = 'Divider';

export default DividerComponent;

export { DividerProps };
