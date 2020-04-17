export default [
    {
        id: 1,
        nom: 'Auguste renoir',
        prenom: 'Albert',
        email: 'admin@gmail',
        image: 'membre.png',
        date_naissance: '25/12/2017',
        format: 'plein ecran',
        resolution: '2560x1320',
        wallpapers: [
            {
                id: 1,
                nom: 'les nymphéas',
                hd: true,
                image: 'b1.jpeg',
                nombre_telechargement: 255,
                tags:[
                    {id: 18, nom: 'fleur', repertorie: true},
                    {id: 2, nom: 'eau', repertorie: true},
                    {id: 3, nom: 'paysage', repertorie: true},
                ],
                auteur: {id: 1, nom_auteur: 'claude monet'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 1, nom: 'impressionisme', image_categorie: '1.jpg', nombre_wallpaper: 155},
                ]
            },
            {
                id: 2,
                nom: 'impression soleil levant',
                hd: true,
                image: 'b2.jpeg',
                nombre_telechargement: 20,
                tags:[
                    {id: 4, nom: 'mer', repertorie: true},
                    {id: 5, nom: 'soleil', repertorie: true},
                    {id: 6, nom: 'lumière', repertorie: true},
                ],
                auteur: {id: 2, nom_auteur: 'auguste renoir'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 2, nom: 'classicisme', image_categorie: '2.jpg', nombre_wallpaper: 20},
                ]
            },
            {
                id: 3,
                nom: 'la seine à asnières',
                hd: true,
                image: 'b3.jpg',
                nombre_telechargement: 451,
                tags:[
                    {id: 7, nom: 'bateau', repertorie: true},
                    {id: 8, nom: 'fleuve', repertorie: true},
                    {id: 9, nom: 'innocence', repertorie: true},
                ],
                auteur: {id: 2, nom_auteur: 'auguste renoir'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 3, nom: 'pre-raphalites', image_categorie: '3.jpg', nombre_wallpaper: 65},
                ]
            },
            {
                id: 4,
                nom: 'château de norham',
                hd: true,
                image: 'b4.jpg',
                nombre_telechargement: 78,
                tags:[
                    {id: 10, nom: 'chateau', repertorie: true},
                    {id: 3, nom: 'paysage', repertorie: true},
                ],
                auteur: {id: 2, nom_auteur: 'auguste renoir'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 4, nom: 'pointillisme', image_categorie: '4.jpg', nombre_wallpaper: 12},
                ]
            },
            {
                id: 5,
                nom: 'la seine à asnières',
                hd: true,
                image: 'b5.jpeg',
                nombre_telechargement: 78,
                tags:[
                    {id: 7, nom: 'bateau', repertorie: true},
                    {id: 8, nom: 'fleuve', repertorie: true},
                    {id: 9, nom: 'innocence', repertorie: true},
                ],
                auteur: {id: 2, nom_auteur: 'auguste renoir'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 5, nom: 'cubisme', image_categorie: '5.jpg', nombre_wallpaper: 100},
                ]
            },
        ],
        telechargement: [
            {
                id: 6,
                nom: 'château de norham',
                hd: true,
                image: 'b6.jpeg',
                nombre_telechargement: 78,
                tags:[
                    {id: 7, nom: 'bateau', repertorie: true},
                    {id: 8, nom: 'fleuve', repertorie: true},
                    {id: 9, nom: 'innocence', repertorie: true},
                ],
                auteur: {id: 11, nom_auteur: 'billiam turner'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 6, nom: 'fauvisme', image_categorie: '6.jpg', nombre_wallpaper: 245},
                ]
            },
            {
                id: 7,
                nom: 'la seine à asnières',
                hd: true,
                image: 'b7.jpg',
                nombre_telechargement: 14,
                tags:[
                    {id: 10, nom: 'chateau', repertorie: true},
                    {id: 3, nom: 'paysage', repertorie: true},
                ],
                auteur: {id: 11, nom_auteur: 'billiam turner'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 7, nom: 'peintre romantique', image_categorie: '7.jpg', nombre_wallpaper: 200},
                ]
            },
            {
                id: 8,
                nom: 'les nymphéas',
                hd: true,
                image: 'b4.jpg',
                nombre_telechargement: 99,
                tags:[
                    {id: 7, nom: 'bateau', repertorie: true},
                    {id: 8, nom: 'fleuve', repertorie: true},
                    {id: 9, nom: 'innocence', repertorie: true},
                ],
                auteur: {id: 1, nom_auteur: 'claude monet'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 8, nom: 'ecole de barbizon', image_categorie: '8.jpg', nombre_wallpaper: 11},
                ]
            },
            //
            {
                id: 1,
                nom: 'les nymphéas',
                hd: true,
                image: 'b2.jpeg',
                nombre_telechargement: 255,
                tags:[
                    {id: 18, nom: 'fleur', repertorie: true},
                    {id: 2, nom: 'eau', repertorie: true},
                    {id: 3, nom: 'paysage', repertorie: true},
                ],
                auteur: {id: 1, nom_auteur: 'claude monet'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 1, nom: 'impressionisme', image_categorie: '1.jpg', nombre_wallpaper: 155},
                ]
            },
            {
                id: 2,
                nom: 'impression soleil levant',
                hd: true,
                image: 'b1.jpeg',
                nombre_telechargement: 20,
                tags:[
                    {id: 4, nom: 'mer', repertorie: true},
                    {id: 5, nom: 'soleil', repertorie: true},
                    {id: 6, nom: 'lumière', repertorie: true},
                ],
                auteur: {id: 1, nom_auteur: 'claude monet'},
                format: {id: 1, type: 'plein ecran'},
                resolution: {id: 1, taille: '2560X1440'},
                categorie:[
                    {id: 2, nom: 'classicisme', image_categorie: '2.jpg', nombre_wallpaper: 20},
                ]
            },
        ]
    }
]