import { DataTypes as DT, Model } from "sequelize";
import connection from "../Connection/connection";

class URL extends Model {}

URL.init(
  {
    originalURL: {
      type: DT.STRING(),
      allowNull: false,
    },
    shortURL: {
      type: DT.STRING(),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "URL",
  }
);

export default URL;
