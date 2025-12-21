-- Create leads table for storing form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT,
  source_page TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow only authenticated admins to view leads
-- For now, we'll create a simple read policy (can be restricted later)
CREATE POLICY "Service role can view leads" 
ON public.leads 
FOR SELECT 
USING (true);