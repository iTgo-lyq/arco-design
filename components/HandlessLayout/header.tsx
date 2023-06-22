import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
import { HeaderProps } from './interface';
import { getPrefixCls } from '../_handless';

function Header(props: HeaderProps, ref) {
  const { className, children, ...rest } = props;
  const prefixCls = getPrefixCls('layout-header');
  const classNames = cs(prefixCls, className);
  return (
    <header ref={ref} {...rest} className={classNames}>
      {children}
    </header>
  );
}

const HeaderComponent = forwardRef<unknown, HeaderProps>(Header);

HeaderComponent.displayName = 'LayoutHeader';

export default HeaderComponent;
