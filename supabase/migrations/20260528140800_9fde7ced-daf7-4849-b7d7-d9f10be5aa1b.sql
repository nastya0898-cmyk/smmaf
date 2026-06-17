-- Revoke any read/modify privileges from anon and authenticated so personal data is not exposed
REVOKE SELECT, UPDATE, DELETE ON public.event_registrations FROM anon;
REVOKE SELECT, UPDATE, DELETE ON public.event_registrations FROM authenticated;

-- Keep INSERT only for public registration flow
GRANT INSERT ON public.event_registrations TO anon, authenticated;

-- Ensure service_role retains full access (used by edge functions/admin)
GRANT ALL ON public.event_registrations TO service_role;

-- Explicit deny-by-default policies for non-insert ops (RLS is already enabled).
-- No SELECT/UPDATE/DELETE policy exists, so RLS denies those for anon/authenticated.
-- (service_role bypasses RLS.)
