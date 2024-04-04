// import "../globals.css";
import {redirect} from "next/navigation";
import {CookiesProvider, getCookies} from "next-client-cookies/server";
import {validate} from "../../api/auth";

export const revalidate = 1
export const fetchCache = 'force-no-store'
export const metadata = {
  title: 'SMC fraud',
  description: '',
}

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: React.ReactNode
}) {

    const auth = getCookies().get('email')
    console.log("-================")
    console.log(auth)

    if (!auth) {
        return redirect('/login')
    }

    const validated = await validate()

    if(validated !== 200) {
        return redirect('/logout')
    }

    return (
        <>{children}</>
    );


}
