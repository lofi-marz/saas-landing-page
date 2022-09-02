import React from 'react';
import Head from 'next/head';
import { WithChildrenProps } from 'types';

type LayoutProps = WithChildrenProps;

export function Layout({ children }: LayoutProps) {
    return (
        <div className="h-full min-h-screen w-full">
            <div className="flex flex-col items-center justify-center">
                <Head>
                    <title>saas</title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex min-h-screen w-full grow flex-col bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}
