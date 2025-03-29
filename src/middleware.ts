import {NextRequest, NextResponse} from "next/server";

export async function middleware(req:NextRequest){
    const protectedRoutes = ["/dashboard","/profile","/settings"];

    const token = req.cookies.get("accessToken")?.value;

    console.log({token});

    if(protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !token){
        return NextResponse.redirect(new URL("/auth",req.url))
    }

    return NextResponse.next();
}

export const config={
    matcher:["/dashboard/:path*"]
}