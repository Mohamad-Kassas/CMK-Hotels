import { executeQuery } from "../../config/db";

console.log("Error conntecting to db")

const getAllHotelChains = async (req, res) => {
  let HotelChainsData = await executeQuery("select * from HotelChain", []);
  res.send(HotelChainsData);
};

export { getAllHotelChains };
