import React from 'react';

export default function Count({ prefixCls, maxCount, count, className, style }) {
  return (
    <span className={className} style={style}>
      <span key={count} className={`${prefixCls}-number-text`}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </span>
    </span>
  );
}
