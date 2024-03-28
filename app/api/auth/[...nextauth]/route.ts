import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'name@email.com' },
                password: { label: 'password', type: 'password', placeholder: '........' },
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                
                return {
                    id: "userId",
                    username,
                    password
                };
            },
          })

    ]
})

export const GET = handler;
export const POST = handler;