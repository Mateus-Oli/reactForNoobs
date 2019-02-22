import axios from 'axios';
import baseURL from '../config/api';

export default axios.create({ baseURL });
