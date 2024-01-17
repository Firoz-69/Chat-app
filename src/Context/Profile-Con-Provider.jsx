import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
  const [profile, setprofile] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const Unsub = auth.onAuthStateChanged(authObj => {
      // act as sessions
      let useRef;
      if (authObj) {
        useRef = database.ref(`/profiles/${authObj.uid}`);
        useRef.on('value', snap => {
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setprofile(data);
          setisLoading(false);
        });
      } else {
        if (useRef) {
          useRef.off();
        }

        setprofile(null);
        setisLoading(false);
      }
    });
    // when the component unmounts the below executes
    return () => {
      Unsub();
      if (useRef) {
        useRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => useContext(ProfileContext);
