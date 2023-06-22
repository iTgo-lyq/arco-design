import React, { forwardRef } from 'react';
import cs from '../_util/classNames';
// import Sider from './sider';
import Header from './header';
import Footer from './footer';
import Content from './content';
import { LayoutProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { getPrefixCls, componentConfig } from '../_handless';

export interface LayoutState {
  siders: string[];
}

function Layout(baseProps: LayoutProps, ref) {
  const props = useMergeProps<LayoutProps>(baseProps, {}, componentConfig.Layout);
  const { className, hasSider, ...rest } = props;

  const prefixCls = getPrefixCls('layout');
  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-has-sider`]: hasSider,
    },
    className
  );

  return (
    <section ref={ref} {...rest} className={classNames}>
      {props.children}
    </section>
  );
}

const ForwardRefLayout = forwardRef<unknown, LayoutProps>(Layout);

const LayoutComponent = ForwardRefLayout as typeof ForwardRefLayout & {
  // Sider: typeof Sider;
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
};

LayoutComponent.displayName = 'Layout';

// LayoutComponent.Sider = Sider;
LayoutComponent.Header = Header;
LayoutComponent.Footer = Footer;
LayoutComponent.Content = Content;

export default LayoutComponent;
