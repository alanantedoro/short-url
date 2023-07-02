const shorter = (req, res, next) => {
  try {
    // lo que sea
  } catch {
    res.status(401).json({
      error: -1,
      description: "Couldnt short that URL.",
    });
  }
};

export default shorter;
