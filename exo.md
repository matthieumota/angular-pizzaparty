# Exo : page pizza-form

## Objectif

Créer une nouvelle page `pizza-form` capable de gérer deux cas :

- création d'une pizza : route `/pizza/new`
- édition d'une pizza existante : route `/pizza/:id/edit`

Pas besoin de faire le vrai formulaire pour l'instant (les champs, les inputs...), on le fera ensemble après. Le but ici c'est juste de faire fonctionner la page et la route.

## Consignes

1. Générer un nouveau composant `pizza-form`
2. Ajouter les deux routes dans `app.routes.ts`
3. Dans le composant, détecter si on est en mode création ou édition (regarder si `id` est présent dans les params de la route)
4. Afficher un titre différent selon le mode :
   - "Créer une pizza" en création
   - "Modifier une pizza" en édition
5. Ajouter un lien vers `/pizza/new` quelque part (par exemple sur la page liste)
6. Depuis la page détail, ajouter un lien vers `/pizza/:id/edit`

## Indice

Vous avez déjà fait un composant qui lit un `id` depuis l'`ActivatedRoute` (pizza-detail). Le principe est le même ici, sauf qu'on ne va pas forcément récupérer la pizza, juste vérifier si l'id existe ou pas.
