import React from 'react';
import cs from '../_util/classNames';
import { ButtonGroupProps } from './interface';
import { getPrefixCls } from '../_handless';

function Group(props: ButtonGroupProps, ref) {
  const { className, style, children, ...rest } = props;
  const prefixCls = getPrefixCls('btn-group');
  const classNames = cs(prefixCls, className);

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
}

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);

GroupComponent.displayName = 'ButtonGroup';

export default GroupComponent;

// export { ButtonGroupProps };
