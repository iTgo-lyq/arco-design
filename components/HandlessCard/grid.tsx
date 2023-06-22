import React from 'react';
import cs from '../_util/classNames';
import { CardGridProps } from './interface';
import { getPrefixCls } from '../_handless';

function Grid(props: CardGridProps, ref) {
  const { children, style, className, hoverable } = props;
  const prefixCls = getPrefixCls('card-grid');
  return (
    <div
      ref={ref}
      style={style}
      className={cs(prefixCls, { [`${prefixCls}-hoverable`]: hoverable }, className)}
    >
      {children}
    </div>
  );
}

const CardComponent = React.forwardRef<unknown, CardGridProps>(Grid);

CardComponent.displayName = 'CardGrid';

export default CardComponent;

export { CardGridProps };
