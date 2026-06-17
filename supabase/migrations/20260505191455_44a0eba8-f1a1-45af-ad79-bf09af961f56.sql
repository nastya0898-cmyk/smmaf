
CREATE TABLE public.event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  event_id text NOT NULL,
  event_title text,
  role text NOT NULL,
  full_name text NOT NULL,
  dob date,
  gym text,
  weight_class text,
  email text NOT NULL,
  phone text,
  notes text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit registrations"
ON public.event_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
