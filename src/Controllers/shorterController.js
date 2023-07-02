class shorterController {
  constructor() {}

  addNew = async (urlToShort) => {
    const newURL = await shortURL.create({
      originalURL: urlToShort,
    });
    return newURL;
  };
}

export default shorterController;
