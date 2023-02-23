const KEY_PAYLOAD = 'KEY_PAYLOAD' as const;

const setLocalItem = (name: string, item?: unknown) => {
  if (!item) {
    window.localStorage.removeItem(name);
  } else {
    window.localStorage.setItem(name, JSON.stringify(item));
  }
};

const getLocalItem = (name: string) => {
  const item = window.localStorage.getItem(name);
  if (item) {
    return JSON.parse(item);
  }

  return null;
};

export const setPayload = (data?: PayLoadType) => {
  try {
    setLocalItem(KEY_PAYLOAD, data);
  } catch (e) {
    return false;
  }

  return true;
};

export const updatePayload = (
  data: LookupFormData | RequestFormData
): boolean => {
  try {
    const before = getLocalItem(KEY_PAYLOAD);
    if (!before) {
      setPayload(data);
      return true;
    }

    setPayload({ ...before, ...data });
  } catch (e) {
    return false;
  }

  return true;
};

type PayLoadType = LookupFormData & RequestFormData;

export const getPayload = (): PayLoadType | null => {
  const data = getLocalItem(KEY_PAYLOAD);
  if (!data) return null;

  return data;
};

export const removePayLoad = () => setLocalItem(KEY_PAYLOAD, null);

export default 'LocalStorageUtil';
