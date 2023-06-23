import { CSSProperties } from 'react';

/**
 * @title Skeleton
 */
export interface SkeletonProps {
  style?: CSSProperties;
  className?: string;
  /**
   * @zh 是否显示动画效果
   * @en Whether to show animation
   */
  animation?: boolean;
  /**
   * @zh 是否显示子组件。为 `true` 时候显示占位符
   * @en Whether to show subcomponents. Set `true` to show placeholder
   * @defaultValue true
   */
  loading?: boolean;
  /**
   * @zh 是否显示图片占位
   * @en Whether to show the picture placeholder
   */
  image?: SkeletonImageProps | boolean;
  /**
   * @zh 是否显示文本占位
   * @en Whether to show text placeholder
   * @defaultValue true
   */
  text?: SkeletonTextProps | boolean;
  /**
   * @zh 视图的表现形式是从右开始向左结束。
   * @en View starts from the right and ends on the left.
   * @version 2.36.0
   */
  rtl?: boolean;
}

export interface SkeletonImageProps {
  style?: CSSProperties;
  className?: string;
  /** 图片形状 */
  shape?: 'circle' | 'square';
  /** 图片尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 图片位置 */
  position?: 'left' | 'right';
  prefixCls?: string;
}

export interface SkeletonTextProps {
  style?: CSSProperties;
  className?: string;
  /** 文本行数 */
  rows?: number;
  /** 文本行宽度 */
  width?: number | string | (string | number)[];
  prefixCls?: string;
}
