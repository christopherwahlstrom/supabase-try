const PROJECT_URL = import.meta.env.VITE_PROJECT_URL
const ANON_KEY = import.meta.env.VITE_ANON_KEY


const supabase = createClient(PROJECT_URL, ANON_KEY)

export async function signInWithEmail(email, password) {
    try{
        const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) throw error
      return [null, data]
    }catch(error){
        return [error, null]
    }
}


export async function getCurrentUser(access_token) {
    try{
        const { data } = await supabase.auth.api.getUser(access_token)
        return [null, data.user];
    }catch(error){
        console.log(error);
        return [error, null]
    }
}

