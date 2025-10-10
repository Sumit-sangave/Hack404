-- Create registrations table
CREATE TABLE public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name TEXT NOT NULL,
  leader_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  member2 TEXT,
  member3 TEXT,
  member4 TEXT,
  theme TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public registration)
CREATE POLICY "Anyone can register"
  ON public.registrations
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to view registrations (for admin dashboard)
CREATE POLICY "Anyone can view registrations"
  ON public.registrations
  FOR SELECT
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to auto-update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create index for faster queries
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);
CREATE INDEX idx_registrations_email ON public.registrations(email);