export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      perscriptions: {
        Row: {
          created_at: string | null
          id: number
          medication: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          medication?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          medication?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "perscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
