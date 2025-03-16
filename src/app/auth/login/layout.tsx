import { Metadata } from "next";
import React, { Fragment } from "react";


export const metadata: Metadata = {
    title: "Login"
};


export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <Fragment>{children}</Fragment>
    )
}