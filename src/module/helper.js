import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = process.env.REACT_APP_PROJECT_URL;
const ANON_KEY = process.env.REACT_APP_ANON_KEY;

const supabase = createClient(PROJECT_URL, ANON_KEY);

export async function signInWithEmail(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) throw error;
        return [null, data];
    } catch (error) {
        return [error, null];
    }
}

export async function getCurrentUser(access_token) {
    try {
        const { data } = await supabase.auth.api.getUser(access_token);
        return [null, data.user];
    } catch (error) {
        console.log(error);
        return [error, null];
    }
}