
ALTER TABLE public.event_registrations
  ADD CONSTRAINT event_registrations_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT event_registrations_full_name_len CHECK (char_length(full_name) BETWEEN 1 AND 120),
  ADD CONSTRAINT event_registrations_event_id_len CHECK (char_length(event_id) BETWEEN 1 AND 64),
  ADD CONSTRAINT event_registrations_role_len CHECK (char_length(role) BETWEEN 1 AND 64),
  ADD CONSTRAINT event_registrations_gym_len CHECK (gym IS NULL OR char_length(gym) <= 120),
  ADD CONSTRAINT event_registrations_weight_class_len CHECK (weight_class IS NULL OR char_length(weight_class) <= 32),
  ADD CONSTRAINT event_registrations_phone_len CHECK (phone IS NULL OR char_length(phone) <= 32),
  ADD CONSTRAINT event_registrations_notes_len CHECK (notes IS NULL OR char_length(notes) <= 2000);
