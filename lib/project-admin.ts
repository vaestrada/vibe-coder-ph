// Utility functions for uploading media and managing projects
// This can be used in development or admin interfaces

import { supabase } from './supabase'

export const uploadProjectMedia = async (
  file: File, 
  projectId: string,
  mediaType: 'image' | 'video'
): Promise<{ url: string | null; error: string | null }> => {
  try {
    // Generate a unique filename
    const fileExt = file.name.split('.').pop()
    const fileName = `${projectId}-${Date.now()}.${fileExt}`
    const filePath = `${mediaType}s/${fileName}`

    // Upload file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('project-media')
      .upload(filePath, file, {
        cacheControl: '31536000', // 1 year — video content rarely changes
        upsert: false
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return { url: null, error: uploadError.message }
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('project-media')
      .getPublicUrl(filePath)

    return { url: urlData.publicUrl, error: null }
  } catch (error) {
    console.error('Upload error:', error)
    return { url: null, error: 'Failed to upload file' }
  }
}

export const updateProjectMedia = async (
  projectId: string,
  mediaUrl: string,
  thumbnailUrl?: string
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const updateData: Record<string, string> = { media_url: mediaUrl }
    if (thumbnailUrl) {
      updateData.thumbnail_url = thumbnailUrl
    }

    const { error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', projectId)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, error: null }
  } catch (error) {
    console.error('Update error:', error)
    return { success: false, error: 'Failed to update project' }
  }
}

export const createProject = async (projectData: {
  title: string
  description: string
  tech_stack: string
  live_url?: string
  media_type: 'image' | 'video'
  featured?: boolean
  order_index?: number
}): Promise<{ id: string | null; error: string | null }> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([projectData])
      .select('id')
      .single()

    if (error) {
      return { id: null, error: error.message }
    }

    return { id: data.id, error: null }
  } catch (error) {
    console.error('Create project error:', error)
    return { id: null, error: 'Failed to create project' }
  }
}

// Development helper: Upload buloy.space video
export const uploadBuloyVideo = async (videoFile: File) => {
  console.log('🎬 Starting buloy.space video upload...')
  
  // First, find the buloy.space project
  const { data: projects, error: fetchError } = await supabase
    .from('projects')
    .select('id')
    .eq('title', 'Buloy Estrada - Personal Space')
    .single()

  if (fetchError || !projects) {
    console.error('❌ Could not find buloy.space project:', fetchError)
    return { success: false, error: 'Project not found' }
  }

  // Upload the video
  const { url, error: uploadError } = await uploadProjectMedia(
    videoFile, 
    projects.id, 
    'video'
  )

  if (uploadError || !url) {
    console.error('❌ Video upload failed:', uploadError)
    return { success: false, error: uploadError }
  }

  // Update the project with the video URL
  const { success, error: updateError } = await updateProjectMedia(projects.id, url)

  if (!success) {
    console.error('❌ Project update failed:', updateError)
    return { success: false, error: updateError }
  }

  console.log('✅ Successfully uploaded buloy.space video!')
  console.log('📹 Video URL:', url)
  
  return { success: true, url }
}
