export function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return "";
}

export function setAuthCookie(id, password, days = 1) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const value = encodeURIComponent(btoa(`${id}:${password}`));
  document.cookie = `editor-auth=${value};expires=${expires.toUTCString()};path=/`;
}
