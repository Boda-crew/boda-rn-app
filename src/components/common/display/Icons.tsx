// https://oblador.github.io/react-native-vector-icons/
export { default as EvilIcons } from 'react-native-vector-icons/EvilIcons';
export { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Circle } from 'react-native-svg';

interface IconProps extends SvgProps {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return icons[name](props);
};

export type IconName = keyof typeof icons;

const icons = {
  alert: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 20}
      height={props.height || 25}
      viewBox="0 0 20 25"
      fill="none"
    >
      <Path
        d="M10 25c.663 0 1.299-.274 1.768-.762A2.654 2.654 0 0012.5 22.4h-5c0 .69.263 1.35.732 1.838A2.452 2.452 0 0010 25zm7.5-9.1V9.4a7.99 7.99 0 00-1.774-5.03 7.438 7.438 0 00-4.476-2.653V1.3c0-.345-.132-.675-.366-.92A1.226 1.226 0 0010 0c-.332 0-.65.137-.884.38a1.327 1.327 0 00-.366.92v.417A7.438 7.438 0 004.274 4.37 7.989 7.989 0 002.5 9.4v6.5L0 18.5v2.6h20v-2.6l-2.5-2.6z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),
  'alert-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 22}
      height={props.height || 25}
      viewBox="0 0 22 25"
      fill="none"
    >
      <Path
        d="M10.686 0a3.226 3.226 0 013.222 3.07 8.269 8.269 0 015.044 7.616v4.242a2.624 2.624 0 012.42 2.613v1.614c0 .78-.634 1.41-1.413 1.41H1.412A1.41 1.41 0 010 19.155v-1.614a2.624 2.624 0 012.42-2.613v-4.242A8.271 8.271 0 017.462 3.07 3.226 3.226 0 0110.686 0zm8.67 18.55V17.54a.607.607 0 00-.606-.605 1.814 1.814 0 01-1.814-1.814v-4.436a6.252 6.252 0 00-4.34-5.953l-.7-.225V3.223a1.209 1.209 0 00-2.42 0v1.285l-.7.225a6.255 6.255 0 00-4.34 5.953v4.436a1.815 1.815 0 01-1.814 1.814.608.608 0 00-.606.605v1.008h17.34zm-12.5 2.015H8.87a1.815 1.815 0 103.63 0h2.016a3.83 3.83 0 01-7.662 0z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),
  announcement: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 26}
      height={props.height || 23}
      viewBox="0 0 26 23"
      fill="none"
    >
      <Path
        d="M25.17 18.2V2.776A2 2 0 0022.539.877L7.866 5.768h-3.67c-1.4 0-4.196.944-4.196 4.72 0 3.775 2.797 4.72 4.195 4.72h3.67l14.673 4.89a2 2 0 002.633-1.897z"
        fill={props.color || '#000'}
      />
      <Path
        d="M7.866 14.159v5.243c0 .7.42 2.098 2.097 2.098h5.244c.525 0 1.573-.42 1.573-2.098v-3.67"
        stroke={props.color || '#000'}
        strokeWidth={2}
      />
    </Svg>
  ),
  'announcement-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 28}
      height={props.height || 23}
      viewBox="0 0 28 23"
      fill="none"
    >
      <Path
        d="M8.767 16.303v3.343c0 .624.256 1.223.71 1.665a2.46 2.46 0 001.714.689h5.424a2.46 2.46 0 001.714-.69 2.32 2.32 0 00.71-1.664v-.726l6.935 1.887a.83.83 0 00.218.028.825.825 0 00.489-.157.79.79 0 00.235-.278.766.766 0 00.084-.35V1.786a.766.766 0 00-.32-.624.82.82 0 00-.706-.134L9.466 5.533h-2.77a5.692 5.692 0 00-2.168.367c-.69.262-1.32.656-1.85 1.158a5.384 5.384 0 00-1.241 1.765 5.254 5.254 0 000 4.19c.288.663.71 1.263 1.24 1.765.531.502 1.16.896 1.85 1.158.69.261 1.428.386 2.168.367h2.072zm1.616-9.393l15.001-4.088v16.192l-15-4.088V6.91zm0 9.644l7.056 1.927v1.177a.774.774 0 01-.236.554.82.82 0 01-.571.23h-5.425a.82.82 0 01-.571-.23.774.774 0 01-.237-.554l-.016-3.104zM2.765 10.92c0-1.013.414-1.984 1.151-2.7a3.99 3.99 0 012.78-1.118h2.071v7.631H6.695a3.99 3.99 0 01-2.777-1.116 3.763 3.763 0 01-1.153-2.697z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.6}
      />
    </Svg>
  ),
  check: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 14}
      height={props.height || 11}
      viewBox="0 0 14 11"
      fill="none"
    >
      <Path
        d="M0 5.911L1.556 3.89 5.6 7.31 12.133 0 14 1.711l-8.244 9.022L0 5.911z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),
  class: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 32}
      height={props.height || 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M11.709 1.766c1.72 1.199 2.626 2.784 3.127 4.428a3.225 3.225 0 002.036-.126c-.338-2.326-1.205-4.153-3.175-5.85-.327-.282-.615-.282-.979-.05l-1.027.657c-.504.323-.473.6.018.942z"
        fill={props.color || '#65636A'}
      />
      <Path
        d="M17.067 7.202c-.713.429-1.78.429-2.492 0C6.163 2.129-2.865 9.04.867 19.609c2.051 5.804 6.598 15.334 14.421 11.512a1.358 1.358 0 011.067 0c7.825 3.822 12.371-5.708 14.422-11.512 3.732-10.569-5.297-17.48-13.71-12.407z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),
  'class-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 32}
      height={props.height || 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M17.37 7.882c-.64.387-1.601.387-2.243 0C7.55 3.314-.58 9.538 2.78 19.056c1.847 5.228 5.942 13.81 12.988 10.369.27-.131.692-.131.961 0 7.047 3.442 11.142-5.141 12.988-10.369 3.361-9.518-4.77-15.742-12.346-11.174zM13.658 2c.648.648 2.59 2.202 2.59 5.829"
        stroke={props.color || '#000'}
        strokeWidth={3}
      />
    </Svg>
  ),
  close: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 12}
      height={props.height || 12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4.455L10.455 0 12 1.56 7.56 6 12 10.455 10.455 12 6 7.56 1.56 12 0 10.455 4.455 6 0 1.56 1.56 0 6 4.455z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),
  comment: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M3.512 0h10.976A3.512 3.512 0 0118 3.512v7.025a3.51 3.51 0 01-3.512 3.512h-3.591L7.35 17.543a1.192 1.192 0 01-.836.352c-.174 0-.345-.042-.498-.123a1.01 1.01 0 01-.53-1.003l.073-2.72H3.512A3.512 3.512 0 010 10.537V3.512A3.512 3.512 0 013.512 0zM1.756 10.537a1.756 1.756 0 001.756 1.756h2.955a.876.876 0 01.878.902l-.05 1.94 2.634-2.588a.878.878 0 01.608-.254h3.95a1.756 1.756 0 001.757-1.756V3.512a1.756 1.756 0 00-1.756-1.756H3.512a1.756 1.756 0 00-1.756 1.756v7.025z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),
  delete: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 21}
      viewBox="0 0 18 21"
      fill="none"
    >
      <Path
        d="M1 4.394h1.312v16h13.376v-16H17.1V3.253h-5.176V.9H6.076v2.353H.9v1.141H1zm6.218-2.353h3.564v1.212H7.218V2.04zm7.33 17.212H3.452V4.394H14.547v14.859z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.2}
      />
      <Path
        d="M6.512 5.942v-.1H5.372V17.572H6.511V5.941zM9.57 5.942v-.1H8.429V17.572H9.57V5.941zM13.041 6v-.1H11.9V17.63h1.141V6z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.2}
      />
    </Svg>
  ),
  'arrow-down': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 11}
      viewBox="0 0 18 11"
      fill="none"
    >
      <Path d="M1 1l8 8 8-8" stroke={props.color || '#000'} strokeWidth={2} />
    </Svg>
  ),
  heart: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 20}
      height={props.height || 17}
      viewBox="0 0 20 17"
      fill="none"
    >
      <Path
        d="M5.455 0C2.453 0 0 2.322 0 5.165c0 2.865 1.892 5.133 3.944 6.933 2.05 1.8 4.361 3.245 5.403 4.263L10 17l.653-.639c1.042-1.018 3.352-2.463 5.403-4.263C18.108 10.298 20 8.03 20 5.165 20 2.322 17.547 0 14.546 0 12.6 0 10.966 1.028 10 2.486 9.034 1.028 7.399 0 5.455 0z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  homework: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 30}
      height={props.height || 30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <Rect
        width={props.width || 30}
        height={props.height || 30}
        rx={6}
        fill={props.color || '#65636A'}
      />
      <Path
        d="M13.065 16.82l-3.871-3.872L7.142 15l4.897 4.897a1.451 1.451 0 002.052 0l8.767-8.768-2.051-2.052-7.742 7.742z"
        fill={'#fff'}
      />
    </Svg>
  ),

  'homework-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 30}
      height={props.height || 30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <Path
        d="M13.065 16.82l-3.871-3.872L7.142 15l4.897 4.897a1.451 1.451 0 002.052 0l8.767-8.768-2.051-2.052-7.742 7.742z"
        fill={props.color || '#000'}
      />
      <Path
        d="M24.677 0H5.323A5.323 5.323 0 000 5.323v19.354A5.323 5.323 0 005.323 30h19.354A5.323 5.323 0 0030 24.677V5.323A5.323 5.323 0 0024.677 0zm2.42 24.677a2.42 2.42 0 01-2.42 2.42H5.323a2.42 2.42 0 01-2.42-2.42V5.323a2.42 2.42 0 012.42-2.42h19.354a2.42 2.42 0 012.42 2.42v19.354z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  information: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 19}
      height={props.height || 19}
      viewBox="0 0 19 19"
      fill="none"
    >
      <Path
        d="M9.507 0A9.507 9.507 0 000 9.507C0 14.67 4.329 18.994 9.493 19A9.498 9.498 0 0019 9.49C18.994 4.33 14.67 0 9.507 0zm1.794 14.725a.053.053 0 01-.016.037.053.053 0 01-.038.016H7.751a.054.054 0 01-.053-.053v-1.632a.055.055 0 01.053-.054h.522V9.22H7.75a.055.055 0 01-.053-.055v-1.63a.055.055 0 01.053-.055h2.664a.053.053 0 01.05.034.053.053 0 01.003.02v5.506h.78a.053.053 0 01.053.054v1.632zM9.37 4.22a1.32 1.32 0 110 2.638 1.32 1.32 0 010-2.638z"
        fill={props.color || '#454545'}
      />
    </Svg>
  ),

  'arrow-left': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 11}
      height={props.height || 18}
      viewBox="0 0 11 18"
      fill="none"
    >
      <Path d="M10 1L2 9l8 8" stroke={props.color || '#000'} strokeWidth={2} />
    </Svg>
  ),

  like: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M13.22 3.005A3.004 3.004 0 0010.215 0h-.943l-.538.772-4.807 6.91-.322.466v9.579h11.418l.466-1.1 2.238-5.35v-.031a3.82 3.82 0 00-3.579-5.237h-1.385l.117-.523c.225-.808.34-1.643.34-2.481zM1.803 8.112H0v9.615h1.803V8.112z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  'like-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M13.22 3.005A3.004 3.004 0 0010.215 0h-.943l-.538.772-4.807 6.91-.322.466v9.579h11.418l.466-1.1 2.238-5.35v-.031a3.82 3.82 0 00-3.579-5.237h-1.385l.117-.523c.225-.808.34-1.643.34-2.481zm.928 4.807a2.07 2.07 0 011.74.901 2.022 2.022 0 01.192 1.863l-2.26 5.348H5.409v-7.21l4.808-6.911a1.202 1.202 0 011.201 1.202 7.51 7.51 0 01-.3 2.067l-.601 2.74h3.632zM1.803 8.112H0v9.615h1.803V8.112z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  option: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 15}
      height={props.height || 3}
      viewBox="0 0 15 3"
      fill="none"
    >
      <Circle cx={7.5} cy={1.5} r={1.5} fill={props.color || '#000'} />
      <Circle cx={1.5} cy={1.5} r={1.5} fill={props.color || '#000'} />
      <Circle cx={13.5} cy={1.5} r={1.5} fill={props.color || '#000'} />
    </Svg>
  ),

  person: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 20}
      height={props.height || 22}
      viewBox="0 0 20 22"
      fill="none"
    >
      <Path
        d="M10 11.333c-4.842 0-8.88 3.442-9.803 8.013C-.02 20.43.895 21.333 2 21.333h16c1.105 0 2.02-.904 1.802-1.987-.921-4.57-4.96-8.013-9.802-8.013z"
        fill={props.color || '#000'}
      />
      <Circle cx={10} cy={5.556} r={5.556} fill={props.color || '#000'} />
    </Svg>
  ),

  'person-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 20}
      height={props.height || 22}
      viewBox="0 0 20 22"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm4-6a6 6 0 00-2.685 11.367A10 10 0 000 21a1 1 0 102 0 8 8 0 0116 0 1 1 0 102 0 10 10 0 00-7.315-9.633A6 6 0 0010 0z"
        fill={props.color || '#A5A4A9'}
      />
    </Svg>
  ),

  plus: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.154C6.392 22.154 1.846 17.608 1.846 12S6.392 1.846 12 1.846 22.154 6.392 22.154 12 17.608 22.154 12 22.154z"
        fill={props.color || '#000'}
      />
      <Path
        d="M12.791 6.586H11.21v10.83h1.582V6.585z"
        fill={props.color || '#000'}
      />
      <Path
        d="M5.632 11.176l-.009 1.583 12.748.069.008-1.583-12.747-.069z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  privacy: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 25}
      height={props.height || 30}
      viewBox="0 0 25 30"
      fill="none"
    >
      <Path
        d="M0 6.5L12.188 0l12.187 6.5V16c0 1.333-1.016 4.9-5.078 8.5-4.063 3.6-6.432 5.167-7.11 5.5-.677-.5-3.046-2.3-7.109-5.5C1.016 21.3 0 17.5 0 16V6.5z"
        fill={props.color || '#65636A'}
      />
      <Path
        d="M9.221 13.566a1.016 1.016 0 00-1.436 1.436l3.047 3.047a1.015 1.015 0 001.436 0l5.078-5.078a1.015 1.015 0 00-1.436-1.436l-4.36 4.36-2.329-2.329z"
        fill={props.color || '#fff'}
      />
    </Svg>
  ),

  'privacy-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 28}
      height={props.height || 34}
      viewBox="0 0 28 34"
      fill="none"
    >
      <Path
        d="M26.436 7.632l-11.917-6.5a1.083 1.083 0 00-1.038 0l-11.917 6.5A1.083 1.083 0 001 8.584v9.447a10.833 10.833 0 003.986 8.41l8.328 6.814a1.084 1.084 0 001.372 0l8.33-6.814A10.835 10.835 0 0027 18.031V8.584a1.084 1.084 0 00-.564-.952zm-1.603 10.4a8.666 8.666 0 01-3.189 6.732L14 31.017l-7.643-6.253a8.666 8.666 0 01-3.19-6.733V9.227L14 3.317l10.833 5.91v8.804z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
      <Path
        d="M10.433 15.4a1.084 1.084 0 00-1.532 1.533l3.25 3.25a1.083 1.083 0 001.532 0l5.417-5.417a1.084 1.084 0 00-1.532-1.532l-4.65 4.65-2.485-2.483z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
    </Svg>
  ),

  report: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 23}
      height={props.height || 23}
      viewBox="0 0 30 28"
      fill="none"
    >
      <Path
        d="M0 2.775A2 2 0 012.632.877L15 5v23L1.368 23.456A2 2 0 010 21.558V2.775z"
        fill={props.color || '#A5A4A9'}
      />
      <Path
        d="M30 2.775A2 2 0 0027.367.877L15 5v23l13.633-4.544A2 2 0 0030 21.558V2.775z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),

  'report-color': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 23}
      height={props.height || 23}
      viewBox="0 0 30 28"
      fill="none"
    >
      <Path
        d="M0 2.775A2 2 0 012.632.877L15 5v23L1.368 23.456A2 2 0 010 21.558V2.775z"
        fill={'#FFA6A5'}
      />
      <Path
        d="M30 2.775A2 2 0 0027.367.877L15 5v23l13.633-4.544A2 2 0 0030 21.558V2.775z"
        fill={'#E96D6B'}
      />
    </Svg>
  ),

  'report-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 23}
      height={props.height || 23}
      viewBox="0 0 31 31"
      fill="none"
    >
      <Path
        d="M2.115 25.537A1.115 1.115 0 011 24.422V2.115a1.115 1.115 0 012.23 0v22.307a1.115 1.115 0 01-1.115 1.115zM28.883 25.537a1.115 1.115 0 01-1.115-1.115V2.115a1.116 1.116 0 012.23 0v22.307a1.115 1.115 0 01-1.115 1.115z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
      <Path
        d="M15.5 29.999c-.12 0-.24-.02-.354-.058l-13.383-4.46a1.115 1.115 0 11.705-2.117l13.384 4.461A1.116 1.116 0 0115.5 30z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
      <Path
        d="M15.5 29.999a1.116 1.116 0 01-.354-2.174l13.384-4.461a1.118 1.118 0 011.411.705 1.114 1.114 0 01-.705 1.411l-13.384 4.461A1.113 1.113 0 0115.5 30zM15.5 7.692a1.115 1.115 0 01-.354-2.173L28.53 1.057a1.115 1.115 0 01.706 2.117l-13.384 4.46a1.116 1.116 0 01-.353.058z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
      <Path
        d="M15.5 7.692c-.12 0-.24-.02-.354-.057L1.764 3.174a1.115 1.115 0 11.705-2.117L15.852 5.52a1.116 1.116 0 01-.353 2.173z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
      <Path
        d="M15.5 29.998a1.115 1.115 0 01-1.116-1.115V6.577a1.116 1.116 0 012.23 0v22.306A1.115 1.115 0 0115.5 30z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.8}
      />
    </Svg>
  ),

  'arrow-right': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 11}
      height={props.height || 18}
      viewBox="0 0 11 18"
      fill="none"
    >
      <Path d="M1 17l8-8-8-8" stroke={props.color || '#000'} strokeWidth={2} />
    </Svg>
  ),

  'arrow-right-small': (props: SvgProps) => (
    <Svg {...props} width={9} height={14} viewBox="0 0 9 14" fill="none">
      <Path d="M1 13l6-6-6-6" stroke="#000" strokeWidth={2} />
    </Svg>
  ),

  school: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 33}
      height={props.height || 33}
      viewBox="0 0 33 33"
      fill="none"
    >
      <Path
        d="M31.562 11.286a.92.92 0 00.924-.923V6.909a.914.914 0 00-.616-.855L16.55.686a.949.949 0 00-.615 0L.615 6.054A.914.914 0 000 6.91v3.454c0 .513.41.923.923.923h3.078v16.209H.923a.92.92 0 00-.923.923v3.659c0 .513.41.923.923.923h30.673a.92.92 0 00.924-.923v-3.693a.92.92 0 00-.924-.924H28.52V11.286h3.043zm-21.885 0h3.728v16.209H9.677V11.286zm13.131 16.209h-3.727V11.286h3.727v16.209z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),

  student: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 32}
      height={props.height || 19}
      viewBox="0 0 32 19"
      fill="none"
    >
      <Path
        d="M0 6.401v.196c.117.17.283.3.475.372L0 6.597V18.386h2.03v-.297-1.004c.001-.484 0-1.366 0-1.998V7.373L6.53 9.595l2.03.776 5.478 2.097a5.077 5.077 0 003.625 0l5.478-2.097 2.03-.776 5.874-2.244a1.016 1.016 0 000-1.9L17.662.336a5.077 5.077 0 00-3.625 0L.655 5.452a1.015 1.015 0 00-.655.95zM14.037 14.5a5.077 5.077 0 003.625 0l5.478-2.097 2.03-.777v4.245a1.016 1.016 0 01-.507.883 19.353 19.353 0 01-8.813 2.173 19.353 19.353 0 01-8.814-2.168 1.016 1.016 0 01-.507-.883v-4.25l2.03.777 5.478 2.097z"
        fill={props.color || '#65636A'}
      />
    </Svg>
  ),

  'student-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 34}
      height={props.height || 22}
      viewBox="0 0 34 22"
      fill="none"
    >
      <Path
        d="M4.6 7.606L15.692 3.07h0c.656-.27 1.391-.27 2.046 0h0L28.8 7.606l-11.026 4.75s0 0 0 0a2.681 2.681 0 01-2.113 0L4.6 7.607zm0 0l11.06 4.75L4.6 7.607zm28.143-.048v-.004a1.108 1.108 0 00-.665-.997h0l-.007-.003L18.575 1.02s0 0 0 0a4.861 4.861 0 00-3.717 0L1.325 6.554h0l-.008.003a1.108 1.108 0 00-.665.987 1.108 1.108 0 000 .142v11.703a1.108 1.108 0 102.217 0V9.229l2.901 1.253v6.973h0v.006a1.108 1.108 0 00.554.942l.01.005.009.005.22.11a20.898 20.898 0 0020.307 0l.22-.11.01-.005.009-.005a1.107 1.107 0 00.554-.942h0v-6.979l4.451-1.918.01-.004.01-.005a1.108 1.108 0 00.609-.997zm-24.756 9.27v-5.361l6.79 2.935h0a4.9 4.9 0 003.879 0h0l6.79-2.935v5.362a18.682 18.682 0 01-17.46 0z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={0.7}
      />
    </Svg>
  ),

  study: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 22}
      height={props.height || 22}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        d="M2 14L.424 20.305a1 1 0 001.252 1.202L8.5 19.5 22 6c0-4.4-4-5.833-6-6L2 14z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  'study-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M16.293.292l-14 14a.926.926 0 00-.19.28l-.035.084c-.012.03-.03.063-.037.098l-2 8a1 1 0 001.22 1.214l8-2c.035 0 .065-.027.097-.037l.085-.035c.104-.046.2-.11.28-.19l14-14A1 1 0 0024 7 7 7 0 0017 0a1 1 0 00-.707.292zM3.763 16.076a4.982 4.982 0 014.16 4.172l-5.547 1.375 1.387-5.547zm5.918 2.83a6.96 6.96 0 00-1.1-2.115c.044-.025.087-.054.127-.085L21.163 4.25c.47.7.752 1.509.822 2.35L9.681 18.905zM19.75 2.837L7.292 15.291c-.031.04-.06.083-.085.128a6.961 6.961 0 00-2.115-1.1L17.398 2.015c.841.07 1.65.352 2.352.822z"
        fill={props.color || '#000'}
      />
    </Svg>
  ),

  test: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 24}
      height={props.height || 31}
      viewBox="0 0 24 31"
      fill="none"
    >
      <Path fill={'#A5A4A9'} d="M0 14h8v17H0z" />
      <Path fill={'#65636A'} d="M8 0h8v31H8z" />
      <Path fill={'#DBDADF'} d="M16 7h8v24h-8z" />
    </Svg>
  ),

  'test-color': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 24}
      height={props.height || 31}
      viewBox="0 0 24 31"
      fill="none"
    >
      <Path fill={'#F29B83'} d="M0 14h8v17H0z" />
      <Path fill={'#E96D6B'} d="M8 0h8v31H8z" />
      <Path fill={'#FDD478'} d="M16 7h8v24h-8z" />
    </Svg>
  ),

  'test-outline': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 24}
      height={props.height || 32}
      viewBox="0 0 24 32"
      fill="none"
    >
      <Path
        d="M23 31h-8V8h8v23zM21.487 9.413h-4.973v20.174h4.973V9.413zM9 31H1V15h8v16zM7.487 15.983H2.513v14.034h4.974V15.983z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={1.3}
      />
      <Path
        d="M16 31H8V1h8v30zM14.487 2.498H9.513v27.004h4.974V2.498z"
        fill={props.color || '#000'}
        stroke={props.color || '#000'}
        strokeWidth={1.3}
      />
    </Svg>
  ),

  'arrow-up': (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 18}
      height={props.height || 11}
      viewBox="0 0 18 11"
      fill="none"
    >
      <Path d="M17 10L9 2l-8 8" stroke={props.color || '#000'} strokeWidth={2} />
    </Svg>
  ),

  submit: (props: SvgProps) => (
    <Svg
      {...props}
      width={props.width || 36}
      height={props.height || 36}
      viewBox="0 0 36 36"
      fill="none"
    >
      <Circle cx={18} cy={18} r={18} fill={props.color || '#588CED'} />
      <Path
        x={11}
        y={8}
        d="M5.612 12.535v-7.28L3.779 7.096 1.948 8.938l-.973-.98L0 6.98l3.471-3.49C5.38 1.57 6.968 0 7 0c.032 0 1.62 1.57 3.529 3.49L14 6.98l-.974.979-.973.979-1.833-1.842-1.832-1.841v14.56H5.612v-7.28z"
        fill="#fff"
      />
    </Svg>
  ),
};
