CREATE DATABASE facturacion_db;
CREATE TABLE public.usuarios
(
    id_usuario serial NOT NULL DEFAULT,
    usuario_usuario character varying COLLATE pg_catalog."default",
    nombre_usuario character varying COLLATE pg_catalog."default",
    clave_usuarioi character varying COLLATE pg_catalog."default",
    CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario)
);

CREATE TABLE public.roles
(
    id_rol serial NOT NULL DEFAULT,
    nombre_rol character varying COLLATE pg_catalog."default",
    CONSTRAINT roles_pkey PRIMARY KEY (id_rol)
);