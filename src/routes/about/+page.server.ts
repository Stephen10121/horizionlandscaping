import { sendForm } from '$lib/sendForm';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email") as string | null;
        const name = data.get("name") as string | null;
        const desc = data.get("what") as string | null;
        const whereFrom = data.get("whereFrom") as string | null;

        if (!email || !name || !desc) {
            return { success: false }
        }

        await sendForm(email, name, desc, whereFrom);

        return { success: true }
	},
} satisfies Actions;