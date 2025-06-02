import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
providers: [
    GoogleProvider({
        clientId: "63146035357-h724ea6hlicugblo71hjl7hjhfs1fedr.apps.googleusercontent.com",
        clientSecret:"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"
    })
]
}) 