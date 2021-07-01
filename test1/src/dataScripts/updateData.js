import setDate from '../utils/setDate';
import getCurrency from './getCurrency'

export default function updateData(date, callback) {
    getCurrency().then(data => callback(data, setDate()));
    setInterval(() => {
        console.log(date, setDate());
        if(date !== setDate()) {
            getCurrency().then(data => callback(data, setDate()));
        }
    }, 1000 * 6);
}