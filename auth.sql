ALTER DATABASE nidoca SET "app.jwt_secret" TO '<jwt secret>';

CREATE ROLE authenticator noinherit login password '<password>';

CREATE ROLE web_anonym nologin;
GRANT web_anonym to authenticator;
GRANT usage ON schema public TO web_anonym;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO web_anonym;
REVOKE SELECT ON ALL TABLES IN SCHEMA public FROM web_anonym;

CREATE ROLE auth_user_all nologin;
GRANT auth_user_all to authenticator;
GRANT usage on schema public to auth_user_all;
GRANT ALL ON ALL TABLES IN SCHEMA public TO auth_user_all;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO auth_user_all;