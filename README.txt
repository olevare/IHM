PREFACE:

L'application ci-joint n'est pas le produit fini de notre �tude.

Il s'agit ici d'un prototype, montrant le d�roulement de nos recherches.

La diff�rence entre ce prototype et le produit fini est l'absence du mod�le client-Serveur, n�cessaire au bon fonctionnement de l'application

Ainsi, lors de la phase de Choix, les �tudiants et les sujets sont choisis al�atoirement parmi la BDD d�finie dans main.js, et les indicatifs sont purement factices.

Nous tenons � remercier nos coll�gues de travail pour leurs nombreux retours sur la maniabilit� de l'application.




STRUCTURE GLOBALE DE L'APPLICATION:

Le fichier index.html inclue tout les fichiers js, qui ont �t� utilis�s d'une mani�re similaire au c++, un fichier repr�sentant une classe.

Les donn�es sont g�r�es dans main.js, tout comme les diff�rents inputs.

L'affichage est d�fini au cas par cas pour chaque �l�ment.


L'application fonctionne selon le principe d'une machine � �tat, dont les diff�rents �tats sont accessibles par les bulles du menu.

D'abord, l'utilisateur doit noter une base de donn�e d'�tudiants et de sujets, en fonction de ses gouts, puis lorsque sa notatio suit un ensemble de r�gle (facilemetn red�finissable), il peut alors valider sa notation.

Lorsque suffisament d'�tudiants ont valid�s leurs notation, la phase de choix devient accessible (pour les besoins de la d�monstration cette phase est accessible directement apr�s validation).

Si des �tudiants tombent d'accord sur une proposition qu'ils ont en commun, elle leur est alors r�serv�e.

La notion de commun d'accord et de r�servation �tant quelquechose devant �tre trait�e cot� serveur, nous n'avons pas pouss� ce cot� de l'application.




VOIES D'AMELIORATION:

Actuellement, la canvas est d'une taille fix�e. Certains �l�ments ont �t� cod�s de mani�re extensibles, d'autres moins.

Les rendre globalement extensif serait un premier axe d'am�lioration.

Le filtrage pendant la phase de notation peut aussi �tre quelquechose d'int�ressant, mais comme nous n'avont pas trouv� de fa�ons int�ressantes de filtrer, nous l'avons laiss� en plan.

Nous avions �nonc� l'ajout de sujets/�tudiants pendant l'�tape de choix lors de nos prr�sentations, mais l'id�e de valider la notation afin de permettre au serveur de travailler est contre-indicatif avec cette notion l� (Quid des �tudiants ajout�s apr�s q'un tel ait valid� ses notations?).
Nous avons par cons�quent retir� cette fonctionnalit�. Une �tude plus pouss�e sur les interactions client-serveur premettrait de trouver un terrain commun entre ces deux id�es.

Le design est encore assez primaire et pr�sente certaines incoh�rences. Aucun de nous n'�tant efficace en graphismes, nous avont juste construit des �l�ments graphiques de base. Un travail plus pouss� est ici envisageable.



De mani�re g�n�rale, le code est assez brouillon, manifeste de notre manque de connaissance en JS. Avec du recul, certaines parties du code (notamment les event listeners) auraient put �tre mieux g�r�s.


Merci de votre attention.