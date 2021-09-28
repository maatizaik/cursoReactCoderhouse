import {collection, addDoc} from 'firebase/firestore';
import {getData} from '../firebase/index';

const orders = collection(getData(),'orders');
const newOrder = await addDoc(collection(getdata(),'orders'),{
    buyer: userInfo,
    items: cart,
    // date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: price(),
});
console.log("Orden creada con el numero: ", newOrder.id);
