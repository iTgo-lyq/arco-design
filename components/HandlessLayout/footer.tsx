import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
import { FooterProps } from './interface';
import { getPrefixCls } from '../_handless';

function Footer(props: FooterProps, ref) {
  const { className, children, ...rest } = props;
  const prefixCls = getPrefixCls('layout-footer');
  const classNames = cs(prefixCls, className);
  return (
    <footer ref={ref} {...rest} className={classNames}>
      {children}
    </footer>
  );
}

const FooterComponent = forwardRef<unknown, FooterProps>(Footer);

FooterComponent.displayName = 'LayoutFooter';

export default FooterComponent;
