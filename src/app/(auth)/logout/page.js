"use client";
import React, { useEffect, useState } from "react";

import { redirect } from "next/navigation";
import {useCookies} from "next-client-cookies";

export default function Logout() {

    const cookies = useCookies()

    useEffect(() => {
        console.log(cookies)
        Object.keys(cookies.get()).map((cookie) => (
            cookies.remove(cookie)
        ));

        if(cookies.get('email')) {
            return redirect('/', 'push')
        } else {
            return redirect('/login', 'push')

        }
    }, [cookies]);

    return (
        <></>
    )
}

