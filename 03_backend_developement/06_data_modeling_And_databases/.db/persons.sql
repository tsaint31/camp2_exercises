BEGIN;
--
-- Necessary for gen_random_uuid()
--

CREATE EXTENSION IF NOT EXISTS pgcrypto;

--
-- Name: persons; Type: TABLE; Schema: public; Owner: camp2
--

DROP TABLE IF EXISTS persons;

CREATE TABLE persons (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    lastname character varying(255),
    firstname character varying(255),
    address character varying(255),
    city character varying(255)
);

--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: camp2
--

INSERT INTO persons (lastname, firstname, address, city) VALUES
  ('Technology', 'Eura', '165 Avenue de Bretagne', 'Lille'),
  ('Holmes', 'Sherlock', '221B Baker Street', 'London'),
  ('Tatum', 'Chaning', '21 Jump Street', 'Detroit'),
  ('Regina', 'Elizabeth', 'Buckingham Palace ', 'London');

COMMIT;
