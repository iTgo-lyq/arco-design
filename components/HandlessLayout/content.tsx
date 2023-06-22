import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
import { ContentProps } from './interface';
import { getPrefixCls } from '../_handless';

function Content(props: ContentProps, ref) {
  const { className, children, ...rest } = props;
  const prefixCls = getPrefixCls('layout-content');
  const classNames = cs(prefixCls, className);
  return (
    <main ref={ref} {...rest} className={classNames}>
      {children}
    </main>
  );
}

const contentComponent = forwardRef<unknown, ContentProps>(Content);

contentComponent.displayName = 'LayoutContent';

export default contentComponent;
