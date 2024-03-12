export async function getCurrentUser() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const response = await ZOHO.CRM.CONFIG.getCurrentUser();
        return response.users[0];
    } catch (error) {
        console.error(error);
    }
}