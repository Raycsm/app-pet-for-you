import React, {useState} from "react";
import { createContext } from "react";
import firestore from '@react-native-firebase/firestore';

export const petContext = createContext({});

export const PetProvider = ({children}) => {

    const [pets, setPets] = useState([]);

    const getPet = () => {
        
        const unsubscriber = firestore()
            .collection('animal')
            .onSnapshot(
            querySnapshot => {
                const petsData = []
                querySnapshot.forEach((doc)=>{
                petsData.push({
                    key: doc.id,
                    ...doc.data(),
                })
                })
                setPets(petsData)
            }
            )
        return () => unsubscriber();
    };

    return(
        <petContext.Provider value={{
            pets,
            getPet,
        }}>
            {children}
        </petContext.Provider>
    );
  
};


