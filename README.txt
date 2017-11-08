PREFACE:

L'application ci-joint n'est pas le produit fini de notre étude.

Il s'agit ici d'un prototype, montrant le déroulement de nos recherches.

La différence entre ce prototype et le produit fini est l'absence du modèle client-Serveur, nécessaire au bon fonctionnement de l'application

Ainsi, lors de la phase de Choix, les étudiants et les sujets sont choisis aléatoirement parmi la BDD définie dans main.js, et les indicatifs sont purement factices.

Nous tenons à remercier nos collègues de travail pour leurs nombreux retours sur la maniabilité de l'application.




STRUCTURE GLOBALE DE L'APPLICATION:

Le fichier index.html inclue tout les fichiers js, qui ont été utilisés d'une manière similaire au c++, un fichier représentant une classe.

Les données sont gérées dans main.js, tout comme les différents inputs.

L'affichage est défini au cas par cas pour chaque élément.


L'application fonctionne selon le principe d'une machine à état, dont les différents états sont accessibles par les bulles du menu.

D'abord, l'utilisateur doit noter une base de donnée d'étudiants et de sujets, en fonction de ses gouts, puis lorsque sa notatio suit un ensemble de règle (facilemetn redéfinissable), il peut alors valider sa notation.

Lorsque suffisament d'étudiants ont validés leurs notation, la phase de choix devient accessible (pour les besoins de la démonstration cette phase est accessible directement après validation).

Si des étudiants tombent d'accord sur une proposition qu'ils ont en commun, elle leur est alors réservée.

La notion de commun d'accord et de réservation étant quelquechose devant être traitée coté serveur, nous n'avons pas poussé ce coté de l'application.




VOIES D'AMELIORATION:

Actuellement, la canvas est d'une taille fixée. Certains éléments ont été codés de manière extensibles, d'autres moins.

Les rendre globalement extensif serait un premier axe d'amélioration.

Le filtrage pendant la phase de notation peut aussi être quelquechose d'intéressant, mais comme nous n'avont pas trouvé de façons intéressantes de filtrer, nous l'avons laissé en plan.

Nous avions énoncé l'ajout de sujets/étudiants pendant l'étape de choix lors de nos prrésentations, mais l'idée de valider la notation afin de permettre au serveur de travailler est contre-indicatif avec cette notion là (Quid des étudiants ajoutés après q'un tel ait validé ses notations?).
Nous avons par conséquent retiré cette fonctionnalité. Une étude plus poussée sur les interactions client-serveur premettrait de trouver un terrain commun entre ces deux idées.

Le design est encore assez primaire et présente certaines incohérences. Aucun de nous n'étant efficace en graphismes, nous avont juste construit des éléments graphiques de base. Un travail plus poussé est ici envisageable.



De manière générale, le code est assez brouillon, manifeste de notre manque de connaissance en JS. Avec du recul, certaines parties du code (notamment les event listeners) auraient put être mieux gérés.


Merci de votre attention.