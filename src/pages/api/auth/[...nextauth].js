import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user" },
        password: {  label: "Password", type: "password", placeholder: "password" }
      },
      authorize: (credentials) => {
        if (
          credentials.username === "admin" && 
          credentials.password === "Hwga$DK4mG"
        ){
          return {
            id: 1,
            name: "William Villani",
            email: "william.stiehler@evoluinfo.com.br",
          };
        } 

        else if (
          credentials.username === "fvillani" && 
          credentials.password === "ng@2023"
        ){
          return {
            id: 2,
            name: "Fernando Villani",
            email: "villani@nutrigourmet.net",
          };
        }
        return null;
      }
    }),
  ],
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.id = user.id;
        token.sessionId = user.sessionId;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    }
  },

  secret: "68E753B1849CD16AD178CD864A5FB05B2829F9007CD660194445C2422BC4D9C1",
  jwt: {
    secret: "68E753B1849CD16AD178CD864A5FB05B2829F9007CD660194445C2422BC4D9C1",
    encryption: true, 
  },
}


export default NextAuth(authOptions)