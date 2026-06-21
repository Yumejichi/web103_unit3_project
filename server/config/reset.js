import pool from './database.js';

const seed = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        city VARCHAR(255),
        state VARCHAR(10),
        zip VARCHAR(10),
        image VARCHAR(500)
    );

    CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE,
        time TIME,
        image VARCHAR(500),
        location_id INTEGER REFERENCES locations(id)
    );

    INSERT INTO locations (name, address, city, state, zip, image) VALUES
        (
            'SoFi Stadium',
            '1001 S. Stadium Dr',
            'Inglewood',
            'CA',
            '90301',
            'https://www.sofistadium.com/assets/img/MRK_0126_SFS_ADMAT_Elephant_SignUp_865x566-f6cceac340.jpg'
        ),
        (
            'Allegiant Stadium',
            '3333 Al Davis Way',
            'Las Vegas',
            'NV',
            '89118',
            'https://www.allegiantstadium.com/assets/img/promo-example-2-3d7b753c59-3d7b753c59.jpeg'
        ),
        (
            'Soldier Field',
            '1410 Special Olympics Dr',
            'Chicago',
            'IL',
            '60605',
            'https://www.soldierfield.com/assets/img/Static_Social-X_800x419_BTS-V3_2026_Regional_SoldierField_0827-f77f405914.jpg'
        ),
        (
            'AT&T Stadium',
            '1 AT&T Way',
            'Arlington',
            'TX',
            '76011',
            'https://attstadium.com/wp-content/uploads/2024/02/feature-field4.jpg'
        );

    INSERT INTO events (title, date, time, image, location_id) VALUES
        (
            'BTS World Tour: Opening Night',
            '2026-09-01',
            '20:00',
            'https://www.sofistadium.com/assets/img/MRK_0126_SFS_ADMAT_Elephant_SignUp_865x566-f6cceac340.jpg',
            1
        ),
        (
            'BTS Encore Experience',
            '2026-09-02',
            '20:00',
            'https://www.sofistadium.com/assets/img/MRK_0126_SFS_ADMAT_Elephant_SignUp_865x566-f6cceac340.jpg',
            1
        ),
        (
            'BTS Live in Las Vegas',
            '2026-05-23',
            '20:00',
            'https://www.allegiantstadium.com/assets/img/1920x1080V2-0148fa4d63.jpg',
            2
        ),
        (
            'BTS Fan Night: Vegas Edition',
            '2026-05-24',
            '20:00',
            'https://www.allegiantstadium.com/assets/img/1920x1080V2-0148fa4d63.jpg',
            2
        ),
        (
            'BTS Concert in Chicago',
            '2026-08-27',
            '19:00',
            'https://www.soldierfield.com/assets/img/Static_Social-X_800x419_BTS-V3_2026_Regional_SoldierField_0827-f77f405914.jpg',
            3
        ),
        (
            'BTS Summer Showcase',
            '2026-08-28',
            '19:00',
            'https://www.soldierfield.com/assets/img/Static_Social-X_800x419_BTS-V3_2026_Regional_SoldierField_0827-f77f405914.jpg',
            3
        ),
        (
            'BTS Finale in Texas',
            '2026-08-15',
            '20:30',
            'https://attstadium.com/wp-content/uploads/2026/01/Static_Digital-EventListing_700x525_BTS-V3_2026_Regional_ATTStadium_0815.jpg',
            4
        ),
        (
            'BTS Grand Finale Night',
            '2026-08-16',
            '20:30',
            'https://attstadium.com/wp-content/uploads/2026/01/Static_Digital-EventListing_700x525_BTS-V3_2026_Regional_ATTStadium_0815.jpg',
            4
        );
`;

try {
  await pool.query(seed);
  console.log('Tables created and seeded successfully');
} catch (err) {
  console.error('Error setting up database:', err);
} finally {
  await pool.end();
}
