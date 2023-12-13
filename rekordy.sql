INSERT INTO Users (username, email, password) VALUES 
('jan_kowalski', 'jan@example.com', 'haslo123');

INSERT INTO Recipes (user_id, title, description, instructions) VALUES 
(1, 'Pieczone kurczaki z ziemniakami', 'Pyszny obiad dla całej rodziny.', '1 Rozgrzej piekarnik do temperatury 200°C.

2 W misce połącz oliwę z oliwek (lub roztopione masło), sok z cytryny, posiekany czosnek, majeranek, tymianek, paprykę w proszku, sól i pieprz. Wymieszaj wszystkie składniki.

3 Ziemniaki umieść w dużym naczyniu do pieczenia i polej je 1/3 przygotowanej mieszanką oliwy z przyprawami.

4 Przygotowaną mieszanką z oliwy i przypraw natarć kurczaka z zewnątrz i wewnątrz. Użyj pędzla do równomiernego rozprowadzenia mieszanki.

5 Umieść kurczaka na ziemniakach w naczyniu do pieczenia. Jeśli masz termometr do mięsa, włóż go do najgrubszego fragmentu mięsa bez dotykania kości. Upewnij się, że termometr wskazuje temperaturę 75-80°C, aby kurczak był odpowiednio upieczony.

6 Piecz kurczaka w rozgrzanym piekarniku przez około 1,5-2 godziny (czas pieczenia może się różnić w zależności od wielkości kurczaka), co jakiś czas polewając go sokiem z dna naczynia.

7 Gdy kurczak będzie gotowy, wyjmij naczynie z piekarnika i pozostaw przez kilka minut, aby mięso mogło się osiedlić, a potem można pokroić na porcje.

8 Posyp posiekaną natką pietruszki i podawaj razem z pieczonymi ziemniakami.');

INSERT INTO Ingredients (name) VALUES 
('Kurczak');

INSERT INTO Recipe_Ingredients (recipe_id, ingredient_id, quantity) VALUES 
(1, 1, '1 kg');