'use client'

//client side rendering

import axios from "axios";
import CardProfile from "../components/Card";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/utils/http/https";
import { dataUserType } from "@/type/type";




export default function ProfilePage() {
  const { data, isLoading } = useQuery<dataUserType>(
    { queryKey: ['data-user'], queryFn: async () => await getUser(), staleTime: 100 }
  );
console.log('haha')
  useEffect(() => {


  }, [])

  return (
    <div>

      <CardProfile data={data} />
    </div>
  )
}

