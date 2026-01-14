#!/usr/bin/env node
/**
 * Reusable Video Upload Script for Supabase
 * Usage: node scripts/upload-video.mjs <video-file-path> <destination-name>
 * Example: node scripts/upload-video.mjs linkedva-preview.mp4 linkedva-preview.mp4
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { basename } from 'path';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const [,, filePath, destinationName] = process.argv;

if (!filePath) {
  console.error('❌ Usage: node scripts/upload-video.mjs <video-file-path> [destination-name]');
  console.error('   Example: node scripts/upload-video.mjs video.mp4 my-video.mp4');
  process.exit(1);
}

const finalDestination = destinationName || basename(filePath);
const storagePath = `projects/${finalDestination}`;

async function uploadVideo() {
  try {
    console.log(`📤 Uploading ${filePath} to ${storagePath}...`);
    
    const fileBuffer = readFileSync(filePath);
    const fileSizeMB = (fileBuffer.length / (1024 * 1024)).toFixed(2);
    console.log(`📦 File size: ${fileSizeMB} MB`);

    const { data, error } = await supabase.storage
      .from('project-media')
      .upload(storagePath, fileBuffer, {
        contentType: 'video/mp4',
        upsert: true
      });

    if (error) {
      console.error('❌ Upload failed:', error.message);
      process.exit(1);
    }

    const publicUrl = `${supabaseUrl}/storage/v1/object/public/project-media/${storagePath}`;
    console.log('✅ Upload successful!');
    console.log('📎 Public URL:', publicUrl);
    
    // Clean up: delete local file after successful upload
    try {
      const { unlinkSync } = await import('fs');
      unlinkSync(filePath);
      console.log('🗑️  Deleted local file:', filePath);
    } catch (cleanupErr) {
      console.warn('⚠️  Could not delete local file:', cleanupErr.message);
    }
    
    return publicUrl;
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

uploadVideo();
