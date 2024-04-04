'use server'
// import {useCookies} from "next-client-cookies";
import {getCookies} from "next-client-cookies/server";


export async function login(formData, path) {
    const cookies = getCookies();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

    const formDataObject = {};
    formData?.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    formDataObject['timestamp'] = Date.now()

    const res = await fetch(`${process.env.API_URL}/auth/authenticate`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(formDataObject)
    }, { revalidate: 1 })

    console.log(res.status)

    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(cookie)
    ))

        if(!res.ok) {
            return await res.json() ?? res.status

        }

        const data = await res.json()
        console.log(data)

        if(res.status === 200) {

            cookies.set('access_token', data?.access_token)

            await Object.entries(data.user).forEach(([key, value]) => {
                if(key !== 'password') {
                    cookies.set(key, value);
                }
            });

        }

        return data ?? false

}

export async function register(formData) {
    const cookies = getCookies()
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

    const formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });

    const res = await fetch(`${process.env.API_URL}/api/v1/auth/register`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(formDataObject)
    }, { revalidate: 1 })

    console.log("Backend response status:", res.status); 

    console.log("Backend response:", res);
    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(cookie)
    ))


    const data = await res.json();
    if (data.status === 200) {
        await Object.entries(data.user).forEach(([key, value]) => {
            if (key !== 'password' && key !== 'avatar') {
                cookies.set(key, value, {maxAge: 3153600});
            }
        });

    }
    console.log(data)
   return data
}


export async function validate() {

    const cookies = getCookies();
    const token = cookies.get('access_token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    headers.append('X-Auth-Token', token);

    const res = await fetch(`${process.env.API_URL}/auth/validate`, {
        headers: headers,
        method: 'GET',
    }, { revalidate: 1 })

    console.log(res.status)

    // if(res.ok) {
    //     return await res.json()
    // }

    return res.status

}

export async function logout() {
    const cookies = getCookies()

    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(`${cookie}`)
    ));

    return cookies.get() ?? false

}





