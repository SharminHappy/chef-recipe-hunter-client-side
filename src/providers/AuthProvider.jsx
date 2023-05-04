import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import { getAuth } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'muri khan' }

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;