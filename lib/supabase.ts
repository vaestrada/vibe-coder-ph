import { createClient } from '@supabase/supabase-js'
import { proxyMediaUrl } from './utils'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our database
export interface Project {
  id: string
  title: string
  description: string | null
  tech_stack: string | null
  live_url: string | null
  media_type: 'image' | 'video'
  media_url: string | null
  thumbnail_url: string | null
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

// Only select the columns we actually use in the UI to reduce response payload size
const PROJECT_COLUMNS = 'id, title, description, tech_stack, live_url, media_type, media_url, thumbnail_url, featured, order_index, created_at, updated_at' as const;

/** Rewrite Supabase storage URLs to our Vercel proxy to avoid Supabase egress */
function proxyProjectMedia<T extends { media_url: string | null; thumbnail_url: string | null }>(
  projects: T[]
): T[] {
  return projects.map((p) => ({
    ...p,
    media_url: proxyMediaUrl(p.media_url),
    thumbnail_url: proxyMediaUrl(p.thumbnail_url),
  }));
}

// Helper functions for projects
export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select(PROJECT_COLUMNS)
    .order('order_index', { ascending: true })
    .order('created_at', { ascending: false })

  if (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching projects:', error)
    }
    return []
  }

  return proxyProjectMedia(data || [])
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select(PROJECT_COLUMNS)
    .eq('featured', true)
    .order('order_index', { ascending: true })

  if (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching featured projects:', error)
    }
    return []
  }

  return proxyProjectMedia(data || [])
}

export const getProjectById = async (id: string): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching project:', error)
    }
    return null
  }

  return data
}
