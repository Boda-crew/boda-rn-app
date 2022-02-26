/* regex method */
export const filterInput = (input: string, reg: RegExp) => {
  const res = reg.exec(input)?.join();
  return !!res ? res : '';
};
export const isValidInput = (input: string, reg: RegExp | RegExp[]) => {
  if (Array.isArray(reg)) return reg.every(re => re.test(input));
  return reg.test(input);
};

export const regex = {
  number: /[^0-9]/g,
  phone: /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  kor: /^[가-힣]+$/,
  eng: /[a-zA-Z]+$/,
};

export const filterTelInput = (input: string) => {
  const res = input.replace(regex.number, '');
  return res.replace(regex.phone, '$1-$2-$3').replace('--', '-');
};

export const filterPhoneInput = (input: string) => {
  const res = input.replace(regex.number, '');
  if (res.length < 4) return res;

  const prefix = `${res.substring(0, 3)}-${res.substring(3, 7)}`;
  if (res.length < 8) return prefix;

  return `${prefix}-${res.substring(7)}`;
};
