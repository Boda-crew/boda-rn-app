import { DateValue } from '@types';

export const KO_DAY = ['일', '월', '화', '수', '목', '금', '토'];

export const getDateData = (target: DateValue) => {
  const time = new Date(target);
  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    date: time.getDate(),
    day_idx: time.getDay(),
    day_ko: KO_DAY[time.getDay()],
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

/**
 * 오전 10:30
 */
export const formatClock = (target: DateValue) => {
  const { hour, minute } = getDateData(target);

  const indicator = hour > 12 ? '오후' : '오전';
  const h = hour > 12 ? hour - 12 : hour;
  const m = minute < 10 ? '0' + minute : minute;

  return `${indicator} ${h}:${m}`;
};

/**
 * 3/3
 */
export const formatDate = (target: DateValue) => {
  const { month, date } = getDateData(target);
  const d = date < 10 ? '0' + date : date;
  return `${month}/${d}`;
};

/**
 * 2021/3/31 오전 10:30
 */
export const formatCommon = (target: DateValue) => {
  const { year, month, date, day_ko } = getDateData(target);

  return `${year}/${month}/${date} (${day_ko}) ${formatClock(target)}`;
};

/**
 * 동적으로 변하는 new Date()는 인수로 받아오는게 바람직하다.
 * @returns 1초 전, 1분 전, 1시간 전, 1일 전, 1년 전
 */
export const formatDuration = (target: DateValue, now: DateValue = new Date()) => {
  const second = Math.floor(
    (new Date(now).getTime() - new Date(target).getTime()) / 1000,
  );
  if (second < 60) return `${second}초 전`;

  const minute = Math.floor(second / 60);
  if (minute < 60) return `${minute}분 전`;

  const hour = Math.floor(second / 3600);
  if (hour < 24) return `${hour}시간 전`;

  const day = Math.floor(hour / 24);
  if (day < 365) return `${day}일 전`;

  const years = Math.floor(day / 365);
  return `${years}년 전`;
};
