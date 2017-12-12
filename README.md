
# README

## Configuration

Éditer le fichier `config.yml`.

* `name`: correspond au nom de votre projet ;
* `url`: indiquer l'adresse http (_exemple: http://nom_du_site.com_) ;
* `path.dist`: Chemin vers le dosiser du thème (_exemple: www/sites/all/themes/custom/subtheme_child_) ;
* `path.src`: Chemin vers le dosiser des sources.

## Installation

`npm install`

## Tâches automatiques

### Tâches principales

| Command | Description
|---------|------------
| **build** | **Sans minification des CSS et JS.**<br/>Regroupe: `clean`, `fonts`, `images`, `styles`, `scripts`.
| **build \--prod** | **Avec minification des CSS et JS.**<br/>Regroupe: `clean`, `fonts`, `images`, `styles`, `scripts`.
| **watch** | **Observateur de fichiers.**<br/>Réécriture en cas de modification des fichiers sources.

### Tâches individuelles

| Command | Description
|---------|------------
| **clean** | Supprime les dossiers contruits: `css`, `js`, `fonts`, `images` et `libraries`.<br/>**À utiliser si on est sur :D**
| **fonts** | Copie le dossier `source/fonts`.
| **libraries** | Copie le dossier `source/libraries`.
| **images** | Copie le dossier `source/images`<br/>Optimise les images png, jpg et svg.
| **scripts** | Compile les fichiers `source/js`.
| **styles** | Compile les fichiers `source/scss`.<br/>Utilise `autoprefixer`.

## License

[MIT](./LICENSE) &copy; [aQuELito](https://aquelito.fr/)
