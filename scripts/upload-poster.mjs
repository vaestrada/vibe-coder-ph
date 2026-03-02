#!/usr/bin/env node

/**
 * Upload the Gen AI to Z poster to Supabase Storage for email use.
 * Usage: node scripts/upload-poster.mjs
 */

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function main() {
  const filePath = 'main_poster_gen_ai_to_z.png';
  const storagePath = 'events/gen-ai-to-z-poster.png';
  const bucket = 'project-media'; // existing bucket

  console.log(`\n📤 Uploading poster to Supabase Storage...`);
  console.log(`   Bucket: ${bucket}`);
  console.log(`   Path:   ${storagePath}\n`);

  const fileBuffer = readFileSync(filePath);

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(storagePath, fileBuffer, {
      contentType: 'image/png',
      upsert: true, // overwrite if exists
    });

  if (error) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }

  // Get the public URL
  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(storagePath);

  console.log(`✅ Upload successful!`);
  console.log(`   Storage path: ${data.path}`);
  console.log(`   Public URL:   ${urlData.publicUrl}\n`);
}

main();
