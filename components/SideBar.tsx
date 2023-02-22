'use client';

import { collection, orderBy, query } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';
import NewChat from './NewChat';

function SideBar() {
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc')),
    );
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />

                    <div className="hidden md:inline">
                        <ModelSelection />
                    </div>

                    <div className="flex flex-col space-y-2 my-2">
                        {loading && (
                            <div className="text-sm animate-pulse text-center text-white">
                                <p>Loading Chats...</p>
                            </div>
                        )}

                        {/* Map through the ChatRows */}
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>

            {session && (
                <img
                    onClick={() => signOut()}
                    src={session?.user?.image!}
                    alt="Profile pic"
                    className="h-8 w-8 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 sm:h-12 sm:w-12"
                />
            )}
        </div>
    );
}

export default SideBar;
