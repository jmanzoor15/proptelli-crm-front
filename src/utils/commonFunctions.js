export const getFormattedPathName = (pathname,exclude) => {
    const pathParts = pathname.split("/").filter(Boolean); // split and remove empty parts

    const target = pathParts.find((part) => !exclude.includes(part));

    if (!target) return "";

    let formatted = target.replace(/-/g, " ");

    formatted = formatted.replace(/([a-z])([A-Z])/g, "$1 $2");

    formatted = formatted
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formatted;
  };