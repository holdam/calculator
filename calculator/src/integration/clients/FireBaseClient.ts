import firebase from "../configs/firebase";
import 'firebase/database'

export const postCalculation = (calculation: string) => {
    firebase.database().ref('/calculations/' + String((Math.random() * 10000).toFixed(0))).set({
            calculation
        }
    );
};

export const retrieveFile = (fileName: string) => firebase.storage().ref(fileName);
