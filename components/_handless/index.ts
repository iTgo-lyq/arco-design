export const getPrefixCls = (componentName: string, customPrefix?: string) =>
  `${customPrefix || 'arco'}-${componentName}`;

export const componentConfig = {
  Avatar: {},
  Layout: {},
  Button: {},
  Badge: {},
  Card: {},
  Spin: {},
  Result: {},
  Space: {},
  Divider: {},
  Skeleton: {},
  Link: {},
  Steps: {},
};
