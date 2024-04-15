'use client'
import Link from "next/link";
import Image from "next/image";
import Home from "@/src/view/dashboard/Home";
import {QueryClient, useQuery} from "@tanstack/react-query";
import { get } from "@/src/api/fetch"

export default function Page() {
  const queryClient = new QueryClient()

  async function process() {
    try {
      return await get('user/profiles');
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }

  const result = useQuery({ queryKey: ['profiles'], queryFn: process })

  console.log(result.status)
  console.log(result.data)
  return (
      <Home data={result?.data} />
  );
}
