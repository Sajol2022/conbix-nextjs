"use client"
import { useEffect } from 'react';
import "./globals.css";
import SwitchTab from '@/components/pages/common/dark-light';

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body>
                <SwitchTab />
                {children}
            </body>
        </html>
    );
}