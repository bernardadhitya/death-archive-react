import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from './env';


const { url, apiKey } = supabaseConfig;
const supabase = createClient(url, apiKey);