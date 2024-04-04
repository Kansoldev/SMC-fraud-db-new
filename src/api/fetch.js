'use server'
import {getCookies} from "next-client-cookies/server";

export async function post(formData, path) {

    // const token = getCookies().get('access_token');
// console.log(token)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    // headers.append('X-Auth-Token', token);

    const formDataObject = {};
    formData?.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    formDataObject['timestamp'] = Date.now()

    return await fetch(`${process.env.API_URL}/${path}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formDataObject)
        }, {revalidate: 1})
            .then(response => {
                return response.json()
            })

}

export async function get(path) {

    const token = getCookies().get('access_token');
// console.log(token)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
    headers.append('X-Auth-Token', token);


    try {
        const res = await fetch(`${process.env.API_URL}/${path}`, {
            method: 'GET',
            headers: headers,
        }, { revalidate: 1 });

        // console.log(`RESPONSE STATUS: ${res.status}`)
        if (!res.ok) {
            return false;
        }

        const data = await res.json();
        // console.log(data);

        return data;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
}
