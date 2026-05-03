import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

export const createSupabseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,{
            async accessToken(){
                const { getToken } = await auth();
                return await getToken();
            }
        }
    )
}