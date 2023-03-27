import nc from "next-connect";
import {getAllHotelChains} from '../../../controller/HotelChain/HotelChain'
const handler = nc();
handler.get(getAllHotelChains);
export default handler;