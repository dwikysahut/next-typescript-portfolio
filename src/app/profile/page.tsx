/* eslint-disable react-hooks/rules-of-hooks */
'use client'

//client side rendering

import axios from "axios";
import CardProfile from "../components/Card";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "@/utils/http/https";
import { dataUserType } from "@/type/type";
import { Button } from "@mui/material";




export default function ProfilePage() {
  const { data, isLoading } = useQuery<dataUserType>(
    { queryKey: ['data-user'], queryFn: async () => await getUser(), staleTime: 100 }
  );
  const mutationLogin=useMutation({ mutationKey: ['data-user'], mutationFn: () => axios.post('http://localhost:5000/login', { user_email: 'ssss', user_password: 'ssss' }) })
  const handler = () => mutationLogin.mutate()
  console.log('haha')
  useEffect(() => {


  }, [])

  return (
    <div>
      <Button onClick={handler}></Button>
      {/* <CardProfile data={{data}} /> */}
    </div>
  )
}

