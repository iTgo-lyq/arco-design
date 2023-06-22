import { CSSProperties, ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Omit } from '../_util/type';

/**
 * @title Layout
 */
export interface LayoutProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh
   * 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
   * @en
   * Indicates that there is a `Sider` in the children. Generally no need to specify.
   * It's used to avoid flicker during server-side rendering
   */
  hasSider?: boolean;
}

/**
 * @title Layout.Header
 */
export interface HeaderProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}

/**
 * @title Layout.Footer
 */
export interface FooterProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}

/**
 * @title Layout.Content
 */
export interface ContentProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className' | 'ref'> {
  className?: string | string[];
}

/**
 * @title Layout.Sider
 */
export interface SiderProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string | string[];
  sign?: 'sider';
  /**
   * @zh 主题颜色
   * @en Theme of layout
   * @defaultValue light
   */
  theme?: 'dark' | 'light';
  /**
   * @zh 当前收起状态
   * @en Whether sider is collapsed
   */
  collapsed?: boolean;
  /**
   * @zh 是否可收起
   * @en Whether sider can be collapsed
   */
  collapsible?: boolean;
  /**
   * @zh 收缩宽度，设置为 0 会出现特殊 trigger
   * @en Width of collapsed sider
   * @defaultValue 48
   */
  collapsedWidth?: number;
  /**
   * @zh 是否默认收起
   * @en Whether sider is collapsed by default
   */
  defaultCollapsed?: boolean;
  /**
   * @zh 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
   * @en Reverse the direction of the fold arrow, can be used when sider is on the right
   */
  reverseArrow?: boolean;
  /**
   * @zh 自定义底部折叠触发器，设置为 null 时隐藏 trigger
   * @en Customize the trigger element to collapse sider at bottom. Set it to `null` to hide the trigger
   */
  trigger?: string | ReactNode;
  /**
   * @zh 宽度
   * @en Width of sider
   * @defaultValue 200
   */
  width?: number | string;
  /**
   * @zh 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
   * @en Callback when sider collapse state changes
   */
  onCollapse?: (collapse: boolean, type: 'clickTrigger' | 'responsive') => void;
}
