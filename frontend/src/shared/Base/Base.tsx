import './Base.scss';
import { ReactNode } from 'react';

interface BaseData {
  title: string;
  children: ReactNode;
}

export default function Base({ title, children }: BaseData) {
  return (
    <div className="base">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
