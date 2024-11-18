import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export async function getvehicle(userID){

    try{
        const docRef = collection(db, "Users", userID,"vehicle")
        const docSnap = await getDocs(docRef)
        const items = [];
        
        if (docSnap.empty){
            console.log("doesnt exist")
            

        }else{

            docSnap.forEach((doc) =>{
                console.dir(doc.id)
                items.push({
                    id:doc.id,
                    ...doc.data()
                })
            })
            return items;
        }
    }catch (error){
        console.log(error);

    }


}
export async function addVehicle(userID, vehicle){
    const docRef = collection(db, "Users", userID,"vehicle")
    const docsnap= await addDoc(docRef, {
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        licensePlate: vehicle.licensePlate,
        color: vehicle.color,
        kilometers: vehicle.kilometers,
        reports: vehicle.reports || []
    })
    return docsnap.id


}

