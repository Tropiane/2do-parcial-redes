CREATE TABLE IF NOT EXISTS producto (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    detalle TEXT NOT NULL,
    imagen TEXT NOT NULL
);

INSERT INTO producto (nombre, detalle, imagen)
VALUES
    ('Notebook', 'Equipo portátil para trabajar y estudiar.',
     'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600'),

    ('Teclado', 'Teclado para escribir y trabajar en una PC de escritorio.',
     'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600'),

    ('Mouse', 'Mouse óptico para uso diario.',
     'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600'),

    ('Monitor', 'Pantalla para conectar a una PC o notebook.',
     'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600'),

    ('Auriculares', 'Auriculares de vincha para escuchar música.',
     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'),

    ('Cámara digital', 'Cámara fotográfica con lente intercambiable.',
     'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600'),

    ('Reloj inteligente', 'Reloj de pulsera para consultar notificaciones y registrar actividad.',
     'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600');