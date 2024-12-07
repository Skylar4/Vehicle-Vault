import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, updateDoc } from "firebase/firestore";

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
export async function getVehicleById(userID, vehicleId) {
    try {
      const docRef = doc(db, "Users", userID, "vehicle", vehicleId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error("Vehicle not found");
      }
    } catch (error) {
      console.error("Error fetching vehicle:", error);
      return null;
    }
  }
export async function updateRepairs(userID, VehicleId,vehicle) {

    try{
    const docRef = doc(db, "Users", userID,"vehicle",VehicleId)
    const docsnap= await updateDoc(docRef, {

        reports: vehicle.reports
    })
    return docsnap.id;
 }
 catch (error){
    console.log(error)
    console.log(userID)
    console.log(vehicle.reports)
    console.log(VehicleId)

 }

}
export async function getProfileData(userID) {
    try {
      const vehicleCollectionRef = collection(db, "Users", userID, "vehicle");
      const vehicleSnapshot = await getDocs(vehicleCollectionRef);
      let totalVehicles = 0;
      let totalRepairs = 0;
      vehicleSnapshot.forEach((doc) => {
        totalVehicles++;
        const vehicleData = doc.data();
        if (vehicleData.reports && Array.isArray(vehicleData.reports)) {
          totalRepairs += vehicleData.reports.length;
        }
      });
  
      return {totalVehicles, totalRepairs };
    } catch (error) {
        console.log(error)
    }
  }
