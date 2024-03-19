'use server'
import {getCookies} from "next-client-cookies/server";

export default async function withAuth() {
    const cookies = getCookies()

    return cookies.get('email')
        // return true

};

export async function getAuth() {
    const cookies = getCookies()
    const data = {}

    Object.keys(cookies.get()).map((cookie) => (
             data[cookie] = cookies.get(cookie)
    ))
    return data
}
