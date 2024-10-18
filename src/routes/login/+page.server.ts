import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData()
        const passwordFormData = formData.get("password")
        if (passwordFormData != null) {
            const password = passwordFormData.toString()
            if (password == "123") {
                event.cookies.set("session", "value", {
                    path: "/",
                    httpOnly: true,
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24 * 30
                })
                throw redirect(301, '/');
            }
        }
        return { success: true };
    }
};