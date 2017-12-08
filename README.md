
# README

## Configuration

Éditer le fichier `config.yml`.

* `name` : correspond au nom de votre projet ;
* `url` : indiquer l'adresse http (_exemple: http://nom_du_site.com_) ;
* `theme_path` : correspond au chemin vers le dosiser du thème créé (_exemple: www/sites/all/themes/custom/subtheme_child_).

## Installation

`npm install`

## Tâches automatiques

| Command | Description
|---------|------------
| **clean** | Supprime les dossiers contruits: `css`, `js`, `fonts`, `images` et `libraries`.<br/>**À utiliser si on est sur :D**
| **fonts** | Copie le dossier `source/fonts`.
| **images** | Copie le dossier `source/images`<br/>Optimise les images png, jpg et svg.
| **scripts** | Compile les fichiers `source/js`.
| **styles** | Compile les fichiers `source/scss`.<br/>Utilise `autoprefixer`.
| **developpement** | **Sans minification des CSS et JS.**<br/>Regroupe: `clean`, `fonts`, `images`, `styles`, `scripts`.
| **produtction** | **Avec minification des CSS et JS.**<br/>Regroupe: `clean`, `fonts`, `images`, `styles`, `scripts`.
| **watch** | **Observateur de fichiers.**<br/>Réécriture en cas de modification des fichiers sources.

## License

[MIT](./LICENSE) &copy; [aQuELito](https://aquelito.fr/)
