INSERT INTO departments (dep_name )
VALUES
    ('Security'),
    ('Entertainment');



INSERT INTO employees (first_name, last_name,job_titles,salaries, department,manager)
VALUES
    ('John', 'Walker','Security Guard',35000, 'Security', 'S.Rogers'),
    ('Thomas', 'Anderson','Security Guard',35000, 'Security', 'N. Laurence'),
    ('John', 'Stamos','Singer',42000, 'Entertainment', 'M.Jefferson'),
    ('Rick', 'Wilson','Bassist',42000, 'Entertainment', 'M.Jefferson'),
    ('Shawn', 'Barnes','Security Guard',35000, 'Security', 'S.Rogers'),
    ('Jimmy', 'Hurt','Security Officer',45000, 'Security', 'S.Rogers'),
    ('Dean', 'Stewart','Security Guard',35000, 'Security', 'S.Rogers'),
    ('Felipe', 'Menendez','Security Guard',35000, 'Security', 'S.Rogers'),
    ('Jen', 'Lester','Drummer',42000, 'Entertainment', 'M.Jefferson'),
    ('Rick', 'Holt','Guitarist',42000, 'Entertainment', 'M.Jefferson');




INSERT INTO roles (job_titles, role, department,salaries)
VALUES
  ('Security Guard', 'Secures premises and personnel by patrolling property; monitoring surveillance equipment; inspecting buildings, equipment, and access points; permitting entry. Obtains help by sounding alarms. Prevents losses and damage by reporting irregularities; informing violators of policy and procedures; restraining trespassers.','Security',35000 ),
  ('Singer', 'Learning, memorizing, recording, rehearsing, and performing songs. Collaborating with managers, movie producers, and other musicians. Fine-tuning craft through exercises and training. Maintaining the appropriate physical appearance and stamina needed for performances.',42000),    
  ('Drummer', 'Drummers provide rhythm and beat to a performance, play the drum during studio recording sessions, and contribute to the production of music.',42000),    
  ('Guitarist', 'Learning, memorizing, recording, rehearsing, and performing songs. Collaborating with managers, movie producers, and other musicians. Fine-tuning craft through exercises and training. Maintaining the appropriate physical appearance and stamina needed for performances.',42000),    
  ('Bassist', 'A bassist contributes to a song by adding depth and linking the harmony and rhythm together, contributing to the groove, feel, and style of the music, and completing the overall sound.',42000);    
