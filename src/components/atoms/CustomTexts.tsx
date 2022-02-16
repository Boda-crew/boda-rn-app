import React from 'react';
import { AText, ATextProps } from './AText';

export const ScreenTitle = (props: ATextProps) => (
  <AText size={30} weight="700" {...props} />
);

export const HeaderTitle = (props: ATextProps) => (
  <AText size={22} weight="700" {...props} />
);

export const ContentTitle = (props: ATextProps) => (
  <AText size={18} weight="700" {...props} />
);

export const ContentText = (props: ATextProps) => (
  <AText size={16} pcolor="gray4" {...props} />
);

export const HelpText = (props: ATextProps) => (
  <AText size={16} pcolor="gray3" {...props} />
);
