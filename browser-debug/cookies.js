const getCookies = (name) => {
  const cookies = document.cookie;
  const allCookies = cookies.split(";");
  const findCookies = allCookies.find((c) => c.includes(name));
  if (findCookies) {
    // 'country = US'
    const coockiesNameValues = findCookies.split("=");
    return coockiesNameValues[1];
  }
};
