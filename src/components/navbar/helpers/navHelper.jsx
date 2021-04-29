const matchHash = ({ hash, path, hashLink = "#faq" }) => {
  const hashPath = path.split("#");
  if (hashPath.length < 2) {
    return hash !== hashLink;
  }
  if (hashPath[1] === hashLink && !hash) {
    return false;
  }
  return hashPath[1] === hash.replace("#", "");
};

const matchLastPath = (path, link) => {
  return path === link.path.replace("/", "").split("#")[0];
};

const getLastPath = (location) => {
  const lastPath = location.pathname.split("/");
  return lastPath[lastPath.length - 1];
};

export const isActivePath = (location, link) => {
  if (
    location.pathname.includes("dashboard") &&
    link.path.includes("our-org")
  ) {
    return true;
  }
  return (
    matchLastPath(getLastPath(location), link) &&
    matchHash({ hash: location.hash, path: link.path })
  );
};
