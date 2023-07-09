// @ts-ignore
const iconsContext = require.context("lms-icons/components/", true, /js$/);
const icons = iconsContext
  .keys()
  .reduce(
    (acc, file) =>
      Object.assign(acc, { [file.slice(2, -3)]: iconsContext(file).default }),
    {}
  );

export default icons;
