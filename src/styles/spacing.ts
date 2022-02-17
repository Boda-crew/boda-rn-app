import { StyleProp, ViewStyle } from 'react-native';

export interface SpaceBaseProps {
  m?: SpaceScale;
  mt?: SpaceScale;
  mr?: SpaceScale;
  mb?: SpaceScale;
  ml?: SpaceScale;
  mv?: SpaceScale;
  mh?: SpaceScale;
  /**
   * `padding` ex 32
   */
  p?: SpaceScale;
  pt?: SpaceScale;
  pr?: SpaceScale;
  pb?: SpaceScale;
  pl?: SpaceScale;
  pv?: SpaceScale;
  ph?: SpaceScale;
}

export interface SpaceProps extends SpaceBaseProps {
  style?: StyleProp<ViewStyle>;
}

export type SpaceScale = keyof typeof spaceScale;

export const spaceScale = {
  s01: 2,
  s02: 4,
  s03: 8,
  s04: 12,
  s05: 16,
  s06: 24,
  s07: 32,
  s08: 40,
  s09: 48,
  s10: 64,
  s11: 80,
  s12: 96,
  s13: 160,
};

export const getSpaceStyle = (props: SpaceProps) => [
  {
    ...(props.m && { margin: spaceScale[props.m] }),
    ...(props.mt && { marginTop: spaceScale[props.mt] }),
    ...(props.mr && { marginRight: spaceScale[props.mr] }),
    ...(props.mb && { marginBottom: spaceScale[props.mb] }),
    ...(props.ml && { marginLeft: spaceScale[props.ml] }),
    ...(props.mv && { marginVertical: spaceScale[props.mv] }),
    ...(props.mh && { marginHorizontal: spaceScale[props.mh] }),
    ...(props.p && { padding: spaceScale[props.p] }),
    ...(props.pt && { paddingTop: spaceScale[props.pt] }),
    ...(props.pr && { paddingRight: spaceScale[props.pr] }),
    ...(props.pb && { paddingBottom: spaceScale[props.pb] }),
    ...(props.pl && { paddingLeft: spaceScale[props.pl] }),
    ...(props.pv && { paddingVertical: spaceScale[props.pv] }),
    ...(props.ph && { paddingHorizontal: spaceScale[props.ph] }),
  },
  props.style,
];
