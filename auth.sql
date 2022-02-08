create role authenticator noinherit login password '<password>';

create role web_anonym nologin;
grant web_anonym to authenticator;
GRANT usage ON schema public TO web_anonym;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO web_anonym;

