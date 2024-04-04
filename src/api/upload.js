"use server"
// import {getCookies} from "next-client-cookies/server";

import {getAuth} from "@/api/withAuth";
// import {headers} from "next/headers";

export async function upload(file, path) {
  // const apiUrl = getCookies().get('apiUrl')

  const auth = await getAuth()
  const token = auth.access_token
  // const token = getCookies().get('access_token');

  const headers = new Headers();
  // headers.append('Content-Type', file.type);
  headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  headers.append('X-Auth-Token', token);


  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/${path}`, {
      method: 'POST',
      headers: headers,
      body: file,
    }, { revalidate: 1 });

    console.log(res.status)
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    if (res.status === 500) {
      return 500
    }
    else if(res.status === 200) {
      console.log(data);

      return data;
    }
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}