// import { redirect ,redirectTo,emailRedirectTo,us} from "react-router-dom";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
import { Await, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//-----SIGNIN----------------------------------------------------------------- * 

export function useSignUp() {

  const queryCLient = useQueryClient()

  async function signup(data) {
    console.log(data);
    const { data: signupData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,

    })
    return { error, signupData }
  }
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => { queryCLient.invalidateQueries({}) },

    onError: (error) => {
      throw error

    }

  })
  return { signup, mutate, isPending }
}

// -----Login--------------------------------------------------------------------------- *

export function useLogin() {

  async function login(email, password) {
    const { data: logData, error: logError } = await supabase.auth.signInWithPassword({
      email, password
    })

    if (logError) throw logError;
    return { logData, logError }
  }
  return { login }
}


// ----RESETING------------------------------------------------------------------- *

export function useResetPassword() {

  const queryCLient = useQueryClient()

  async function reseting({ email }) {
    console.log(email);
    ///when we send a requset to get a new pass then have to check our email to click on link to ridirecting ...
    const { data: resetPassword, error: errorReset } = await supabase.auth.resetPasswordForEmail(email, {
      //after click we schuld redirect to this page immeadtly 
      redirectTo: 'http://localhost:5173/confirm_password'
    })

    if (errorReset) throw errorReset;
    return { resetPassword }
  }

  const { mutate, isPending } = useMutation({
    mutationFn: reseting,

    onSuccess: () => {
      queryCLient.invalidateQueries({})
    },
    onError: (error) => {
      console.log(error);

    }

  })
  return { reseting, mutate, isPending }
}

// ----UPDATING-------------------------------------------------------------- *

export function useUpdateUser() {
  const queryCLient = useQueryClient()
  const navigate = useNavigate()
  async function updating(data) {
    const { data: updateData, error: updateError } = await supabase.auth.updateUser({
      password: data.newPass
    })

    // learn how to use error and where bitte !
    if (updateError) throw updateError;
    return { updateData }
  }

  const { mutate, isPending } = useMutation({
    mutationFn: updating,

    onSuccess: () => {
      queryCLient.invalidateQueries({})
      navigate('/home')
    },
    onError: (error) => {
      console.log(error);
    }

  })

  return { updating, mutate, isPending }
}

// -------LogOut--------------------------------------------------------

export function useLogout() {

  const navigate = useNavigate()
  async function logginout() {

    const { error: logoutError } = supabase.auth.signOut()

    if (logoutError) throw logoutError
  }

  const { mutate: logOuted, isPending } = useMutation({
    mutationFn: logginout,

    onSuccess: () => {
      navigate('/home')
    },
    onError: (error) => {
      console.log(error);
    }

  })

  return { logginout, logOuted, isPending }
}

