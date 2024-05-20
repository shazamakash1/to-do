import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dimitrix:shazam@cluster0.chpcoao.mongodb.net/TODO-LIST"
  );
  console.log("DB Connected");
};
