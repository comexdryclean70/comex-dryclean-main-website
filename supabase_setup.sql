-- Create the bookings table
CREATE TABLE bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    items TEXT,
    location_lat FLOAT8,
    location_lng FLOAT8,
    status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts (since our booking form is public)
CREATE POLICY "Allow public inserts"
ON bookings
FOR INSERT
TO anon
WITH CHECK (true);

-- Create a policy to allow reading only by service_role (backend) or specific authenticated users
-- For simple dashboard viewing later, we might enable public read or specific auth based rules.
-- For now, allowing service_role (backend API) is implicit, so anon inserts are the key requirement.
