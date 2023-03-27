import nc from "next-connect";
//importing function to getAllHotelChains
import {getAllHotelChains} from '../../../controller/HotelChain/GetHotelChain'
const handler = nc();
//calling the method
handler.get(getAllHotelChains);
export default handler;