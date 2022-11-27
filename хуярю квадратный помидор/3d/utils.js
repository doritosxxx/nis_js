const utils = {
  objectAsStyleString(object) {
    const mappers = {
      width: (number) => number + "px",
      height: (number) => number + "px",
    };

    return Object.entries(object)
      .map(
        ([key, value]) => `${key}:${mappers[key] ? mappers[key](value) : value}`
      )
      .join(";");
  },
};
