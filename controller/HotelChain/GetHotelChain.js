import { executeQuery } from "../../config/db";


//in this folder, we define methods that we need
const getAllHotelChains = async (req, res) => {
  let HotelChainsData = await executeQuery("select * from HotelChain", []);
  res.send(HotelChainsData);
};

export { getAllHotelChains };
