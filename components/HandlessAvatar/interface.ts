import { CSSProperties, ReactNode } from 'react';

/**
 * @title Avatar
 */
export interface AvatarProps {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @zh 头像的形状，有圆形(circle)和正方形(square)两种
   * @en The shape of the avatar. Two shapes are available: `circle` and `square`
   * @defaultValue circle
   */
  shape?: 'circle' | 'square';
  /**
   * @zh 头像的尺寸大小，单位是 `px`
   * @en The size of the avatar in `px`
   */
  size?: number;
  /**
   * @zh 可点击的头像交互图标。
   * @en Clickable avatar interaction icon.
   */
  triggerIcon?: ReactNode;
  /**
   * @zh 交互图标的样式
   * @en Interactive icon style
   */
  triggerIconStyle?: CSSProperties;
  /**
   * @zh 可点击的头像交互类型。
   * @en Clickable avatar interaction type.
   * @defaultValue button
   */
  triggerType?: 'mask' | 'button';
  /**
   * @zh 视图的表现形式是从右开始向左结束。
   * @en View starts from the right and ends on the left.
   * @version 2.36.0
   */
  rtl?: boolean;
  /**
   * @zh 点击回调
   * @en Callback when avatar is clicked
   */
  onClick?: (e) => void;
}
