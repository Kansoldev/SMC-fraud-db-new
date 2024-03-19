'use server'
// import {useCookies} from "next-client-cookies";
import {getCookies} from "next-client-cookies/server";
import {headers} from "next/headers";


export async function login(formData) {
    const cookies = getCookies();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

    const remember = formData.get('remember')
    const cookieAge = remember ? 30 * 24 * 60 * 60 : 24 * 60 * 60

    console.log(cookieAge)

    const res = await fetch(`${process.env.API_URL}/api/v1/auth/authenticate`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            email: formData?.get("email"),
            password: formData?.get("password")
        })
    }, { revalidate: 1 })

    console.log(res.status)
    // console.log(res)
    // console.log(res.message)

    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(cookie)
    ))

        if(!res.ok) {
            const user = await res.json() ?? res.status
            if(user.user) {

                await Object.entries(user.user).forEach(([key, value]) => {
                    if(key !== 'password' && key !== 'avatar') {
                        cookies.set(key, value);
                    }
                });

            }
            return user

        }

        const data = await res.json()
        console.log(data)

        if(res.status === 200) {

            cookies.set('roles', data?.roles?.join(','), {maxAge: cookieAge})
            cookies.set('access_token', data?.access_token, {maxAge: cookieAge})

            await Object.entries(data.user).forEach(([key, value]) => {
                if(key !== 'password' && key !== 'avatar') {
                    cookies.set(key, value, {maxAge: cookieAge});
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


export async function sendVerifyCode(email) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

    const res = await fetch(`${process.env.API_URL}/api/v1/auth/sendVerification`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            siteUrl: process.env.SITE_URL,
            email: email,
            timestamp: Date.now(),
        })
    }, { revalidate: 1 })

    console.log(res.status)


    if(res.ok) {
        const data = await res.json()
        console.log(data)

        if (res.status === 401) {
            return 401
        }
        else if(res.status === 200) {

            return 200
        }

    }

}

export async function verifyCode(id, code) {

    const cookies = getCookies();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");

    const res = await fetch(`${process.env.API_URL}/api/v1/auth/verifyEmail`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            id: id,
            code: code,
            timestamp: Date.now(),
        })
    }, { revalidate: 1 })

    console.log(res.status)
    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(cookie)
    ))

    const data = await res.json()
    console.log(data)

    if(data.user) {

        await Object.entries(data.user).forEach(([key, value]) => {
            if(key !== 'password' && key !== 'avatar') {
                cookies.set(key, value);
            }
        });

    }

    return data

}

export async function validate() {

    const cookies = getCookies();
    // console.log(getCookies().get())
    const token = cookies.get('access_token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    headers.append('X-Auth-Token', token);

    const res = await fetch(`${process.env.API_URL}/api/v1/auth/validate`, {
        headers: headers,
        method: 'GET',
    }, { revalidate: 1 })

    console.log(res.status)

    // if (res.status === 200) {
    //
    //     Object.keys(cookies.get()).map((cookie) => {
    //         if (cookie !== 'email' && cookie !== 'access_token') {
    //             cookies.remove(cookie)
    //         }
    //     })
    //
    //     const data = await res.json()
    //
    //     await Object.entries(data.user).forEach(([key, value]) => {
    //         if (key !== 'password' && key !== 'email') {
    //             cookies.set(key, value);
    //         }
    //     });
    //
    // }
    if(res.status === 401) {
        return 401
    }
    else {
        return 404
    }

}

export async function logout() {
    const cookies = getCookies()

    Object.keys(cookies.get()).map((cookie) => (
        cookies.remove(`${cookie}`)
    ));

    return cookies.get() ?? false

}





