import React, { forwardRef, useContext, useEffect, useState } from 'react';
import cs from '../_util/classNames';
import IconLeft from '../../icon/react-icon/IconLeft';
import IconRight from '../../icon/react-icon/IconRight';
import { ConfigContext } from '../ConfigProvider';
import { isNumber } from '../_util/is';
import useMergeValue from '../_util/hooks/useMergeValue';
import { SiderProps } from './interface';

function Sider(props: SiderProps, ref) {
  const {
    children,
    className,
    style,
    theme = 'light',
    trigger,
    reverseArrow,
    collapsedWidth = 48,
    width = 200,
    collapsible,
    onCollapse,
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('layout-sider');
  const [collapsed, setCollapsed] = useMergeValue(false, {
    value: 'collapsed' in props ? props.collapsed : undefined,
    defaultValue: props.defaultCollapsed,
  });
  // Parsing props width from number to string, to be used as css property value.
  // Using px as the default unit
  const propsWidth = isNumber(width) ? `${width}px` : String(width);
  const _collapsedWidth = isNumber(collapsedWidth) ? `${collapsedWidth}` : String(collapsedWidth);
  const [siderWidth, setSiderWidth] = useState<string>(collapsed ? _collapsedWidth : propsWidth);

  useEffect(() => {
    // Parsing collapsed width from number to string, to be used as css property value.
    // Using px as the default unit
    const _collapsedWidth = isNumber(collapsedWidth)
      ? `${collapsedWidth}px`
      : String(collapsedWidth);
    setSiderWidth(collapsed ? _collapsedWidth : propsWidth);
  }, [collapsed, propsWidth, collapsedWidth]);

  const renderTrigger = () => {
    const triggerIcon =
      trigger ||
      (collapsed ? (
        reverseArrow ? (
          <IconLeft />
        ) : (
          <IconRight />
        )
      ) : reverseArrow ? (
        <IconRight />
      ) : (
        <IconLeft />
      ));

    return collapsible && trigger !== null ? (
      <div
        style={{ width: siderWidth }}
        className={cs(`${prefixCls}-trigger`, {
          [`${prefixCls}-trigger-light`]: theme === 'light',
        })}
        onClick={() => {
          setCollapsed(!collapsed);
          onCollapse && onCollapse(!collapsed, 'clickTrigger');
        }}
      >
        {triggerIcon}
      </div>
    ) : null;
  };

  return (
    <aside
      ref={ref}
      style={{
        width: siderWidth,
        ...style,
      }}
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-light`]: theme === 'light',
          [`${prefixCls}-has-trigger`]: trigger !== null && collapsible,
          [`${prefixCls}-collapsed`]: collapsed,
        },
        className
      )}
    >
      <div className={`${prefixCls}-children`}>{children}</div>
      {renderTrigger()}
    </aside>
  );
}

const ForwardRefSider = forwardRef<unknown, SiderProps>(Sider);

const SiderComponent = ForwardRefSider as typeof ForwardRefSider & {
  __ARCO_SIGN__: 'sider';
};

SiderComponent.displayName = 'LayoutSider';

SiderComponent.__ARCO_SIGN__ = 'sider';

export default SiderComponent;
