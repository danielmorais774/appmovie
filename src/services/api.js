const server = (endpoint, params) => {
    if (endpoint === 'api/home') {
        return JSON.stringify(
            [
                {
                    title: 'Recentes',
                    innerData: [
                        { id: 1, title: "Mulan", imdbGrade: 5.6, runtime: "01:30", genre: "Ação, Aventura", launchYear: "2020", sinopse: "A aclamada cineasta Niki Caro dá vida à épica lenda da icônica guerreira chinesa em Mulan, da Disney, em que uma jovem destemida arrisca a própria vida por amor à família e à pátria para se tornar uma das maiores guerreiras de toda a China. Quando o Imperador da China emite um decreto estabelecendo que um homem de cada família deve servir no exército imperial para defender o país dos invasores do Norte, Hua Mulan, a filha mais velha de um honrado guerreiro se apresenta no lugar de seu pai adoentado. Disfarçada de homem, como Hua Jun, ela é testada a cada etapa do caminho e deve controlar sua força interior e abraçar seu verdadeiro potencial. É uma jornada épica que vai transformá-la em uma reverenciada guerreira e levá-la a conquistar o respeito de uma nação agradecida... e um pai orgulhoso.", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDiNL4mplz50DO7jRQSjQZVuzqlvG-Kq5pfxK6DNKQQPbL2N2w", images: [{ url: "https://start-tv.net/wp-content/uploads/2020/09/2d786a0a-bfbf-4ad6-aa6d-d4286e3f8709-rev-1-JM-FP-0060_High_Res_JPEG-2-1024x533.jpeg" }, { url: "https://livrosfilmes2017.files.wordpress.com/2020/09/mulan-live-action-1.jpeg" }, { url: "https://codigonerd42.com/wp-content/uploads/2020/09/mulan-disney.jpg" }] },
                        { id: 2, title: "Bloodshot", imdbGrade: 5.7, runtime: "01:50", genre: "Ação", launchYear: "2020", sinopse: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. Assassinado ao lado da esposa, ele é ressuscitado e aprimorado com nanotecnologia, desenvolvendo tais habilidades. Ao apagarem sua memória várias vezes, ele finalmente descobre quem realmente é e parte em um busca de vingança daqueles que mataram sua família.", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSk-Xjs0S4KVnLByZNpAT-oaFmzlcS8xVzJL9sGTXUIRw7s2aMh", images: [{ url: "https://a.ltrbxd.com/resized/sm/upload/su/vt/bd/mb/bloodshot-1200-1200-675-675-crop-000000.jpg?k=c892a57ada" }] },
                        { id: 3, title: "John Wick 3 Parabellum", imdbGrade: 7.4, runtime: "02:12", genre: "Ação, Aventura", launchYear: "2019", sinopse: "Após assassinar o chefe da máfia Santino D'Antonio (Riccardo Scamarcio) no Hotel Continental, John Wick (Keanu Reeves) passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência.", cover: "https://pbs.twimg.com/media/D2MdO9-UcAAYVny?format=jpg&name=4096x4096", images: [{ url: "https://a.ltrbxd.com/resized/sm/upload/o8/57/vf/l3/john-wick-3-parabellum-1200-1200-675-675-crop-000000.jpg?k=1c95a41e36" }, { url: "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABezqM6soSzaCmSq5EmPBGz7UvV_TPfqvXJKbvJQ7wuNA3nldeVIkfnOLXE5fLdlThzIYTdJoJT-KNXP9ez2dTK3u5UGZ.jpg?r=600" },] }
                    ],
                    gridView: 'horizontal'
                },
                {
                    title: 'Campeões de Bilheteria',
                    innerData: [
                        { 
                            id: 4, 
                            title: "Jumanji 2", 
                            imdbGrade: 6.7, 
                            runtime: "02:03", 
                            genre: "Aventura, Comédia", 
                            launchYear: "2019", 
                            sinopse: "Uma equipe de amigos retorna a Jumanji para resgatar um dos seus, mas descobre que nada é como esperam. Os jogadores devem enfrentar partes desconhecidas para escapar do jogo mais perigoso do mundo.", 
                            cover: "https://flxt.tmsimg.com/assets/p15446613_p_v13_ad.jpg", 
                            images: [
                                { url: "http://image.tmdb.org/t/p/w780//lzGTOie3M3Adb4eIAXqolDuxm3S.jpg" }, 
                                { url: "http://media.forumcinemas.lt/1012/Event_8312/gallery/7.jpg" }, 
                                { url: "https://s1.15min.lt/images/photos/2017/12/14/original/dziumandzi-dziumandzi-filme-dziumandzi-sveiki-atvyke-i-dziungles-5a32746c3e1ae.jpg" }
                            ]
                        },
                        { 
                            id: 5, 
                            title: "Sonic - O Filme", 
                            imdbGrade: 6.5, 
                            runtime: "01:40", 
                            genre: "Infantil, Comédia", 
                            launchYear: "2020", 
                            sinopse: "Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.", 
                            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H4OxKDLzY7bP1h79Xn3-aWSYzHSdALiQ7l8hs-SgGNtK2qrWRORLqxNQrbGTcMo3_2k&usqp=CAU", 
                            images: [
                                { url: "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27227438.jpg%27&ImageUrl=%27227438.jpg%27&EntityType=%27Item%27&EntityId=%2721999%27&Width=1920&Height=1080&device=web_browser&subscriptions=Anonymous" }, 
                                { url: "https://epipoca.com.br/wp-content/uploads/2020/12/sonic-o-filme.jpg" }, 
                            ]
                        },
                        { 
                            id: 6, 
                            title: "Aves de Rapina", 
                            imdbGrade: 6.1, 
                            runtime: "01:49", 
                            genre: " Ação, Aventura", 
                            launchYear: "2020", 
                            sinopse: "Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.", 
                            cover: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/01/avesderapina-poster2.jpg", 
                            images: [
                                { url: "http://farofageek.com.br/wp-content/uploads/2020/02/aves-de-rapina-capa-800x445.jpg" }, 
                                { url: "https://sm.ign.com/t/ign_br/screenshot/default/avesderapina-newposterelenco-imgdestaque_8jxe.h720.jpg" }, 
                            ]
                        },
                        { id: 3, title: "John Wick 3 Parabellum", imdbGrade: 7.4, runtime: "02:12", genre: "Ação, Aventura", launchYear: "2019", sinopse: "Após assassinar o chefe da máfia Santino D'Antonio (Riccardo Scamarcio) no Hotel Continental, John Wick (Keanu Reeves) passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência.", cover: "https://pbs.twimg.com/media/D2MdO9-UcAAYVny?format=jpg&name=4096x4096", images: [{ url: "https://a.ltrbxd.com/resized/sm/upload/o8/57/vf/l3/john-wick-3-parabellum-1200-1200-675-675-crop-000000.jpg?k=1c95a41e36" }, { url: "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABezqM6soSzaCmSq5EmPBGz7UvV_TPfqvXJKbvJQ7wuNA3nldeVIkfnOLXE5fLdlThzIYTdJoJT-KNXP9ez2dTK3u5UGZ.jpg?r=600" },] }
                        
                    ],
                    gridView: 'vertical'
                },
            ]
        );
    }

    if (endpoint === 'api/movies') {
        const moviesData = [
            { id: 1, title: "Mulan", imdbGrade: 5.6, runtime: "01:30", genre: "Ação, Aventura", launchYear: "2020", sinopse: "A aclamada cineasta Niki Caro dá vida à épica lenda da icônica guerreira chinesa em Mulan, da Disney, em que uma jovem destemida arrisca a própria vida por amor à família e à pátria para se tornar uma das maiores guerreiras de toda a China. Quando o Imperador da China emite um decreto estabelecendo que um homem de cada família deve servir no exército imperial para defender o país dos invasores do Norte, Hua Mulan, a filha mais velha de um honrado guerreiro se apresenta no lugar de seu pai adoentado. Disfarçada de homem, como Hua Jun, ela é testada a cada etapa do caminho e deve controlar sua força interior e abraçar seu verdadeiro potencial. É uma jornada épica que vai transformá-la em uma reverenciada guerreira e levá-la a conquistar o respeito de uma nação agradecida... e um pai orgulhoso.", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDiNL4mplz50DO7jRQSjQZVuzqlvG-Kq5pfxK6DNKQQPbL2N2w", images: [{ url: "https://start-tv.net/wp-content/uploads/2020/09/2d786a0a-bfbf-4ad6-aa6d-d4286e3f8709-rev-1-JM-FP-0060_High_Res_JPEG-2-1024x533.jpeg" }, { url: "https://livrosfilmes2017.files.wordpress.com/2020/09/mulan-live-action-1.jpeg" }, { url: "https://codigonerd42.com/wp-content/uploads/2020/09/mulan-disney.jpg" }] },
            { id: 3, title: "John Wick 3 Parabellum", imdbGrade: 7.4, runtime: "02:12", genre: "Ação, Aventura", launchYear: "2019", sinopse: "Após assassinar o chefe da máfia Santino D'Antonio (Riccardo Scamarcio) no Hotel Continental, John Wick (Keanu Reeves) passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência.", cover: "https://pbs.twimg.com/media/D2MdO9-UcAAYVny?format=jpg&name=4096x4096", images: [{ url: "https://a.ltrbxd.com/resized/sm/upload/o8/57/vf/l3/john-wick-3-parabellum-1200-1200-675-675-crop-000000.jpg?k=1c95a41e36" }, { url: "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABezqM6soSzaCmSq5EmPBGz7UvV_TPfqvXJKbvJQ7wuNA3nldeVIkfnOLXE5fLdlThzIYTdJoJT-KNXP9ez2dTK3u5UGZ.jpg?r=600" },] },
            { id: 2, title: "Bloodshot", imdbGrade: 5.7, runtime: "01:50", genre: "Ação", launchYear: "2020", sinopse: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. Assassinado ao lado da esposa, ele é ressuscitado e aprimorado com nanotecnologia, desenvolvendo tais habilidades. Ao apagarem sua memória várias vezes, ele finalmente descobre quem realmente é e parte em um busca de vingança daqueles que mataram sua família.", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSk-Xjs0S4KVnLByZNpAT-oaFmzlcS8xVzJL9sGTXUIRw7s2aMh", images: [{ url: "https://a.ltrbxd.com/resized/sm/upload/su/vt/bd/mb/bloodshot-1200-1200-675-675-crop-000000.jpg?k=c892a57ada" }] },
            { 
                id: 4, 
                title: "Jumanji 2", 
                imdbGrade: 6.7, 
                runtime: "02:03", 
                genre: "Aventura, Comédia", 
                launchYear: "2019", 
                sinopse: "Uma equipe de amigos retorna a Jumanji para resgatar um dos seus, mas descobre que nada é como esperam. Os jogadores devem enfrentar partes desconhecidas para escapar do jogo mais perigoso do mundo.", 
                cover: "https://flxt.tmsimg.com/assets/p15446613_p_v13_ad.jpg", 
                images: [
                    { url: "http://image.tmdb.org/t/p/w780//lzGTOie3M3Adb4eIAXqolDuxm3S.jpg" }, 
                    { url: "http://media.forumcinemas.lt/1012/Event_8312/gallery/7.jpg" }, 
                    { url: "https://s1.15min.lt/images/photos/2017/12/14/original/dziumandzi-dziumandzi-filme-dziumandzi-sveiki-atvyke-i-dziungles-5a32746c3e1ae.jpg" }
                ]
            },
            { 
                id: 5, 
                title: "Sonic - O Filme", 
                imdbGrade: 6.5, 
                runtime: "01:40", 
                genre: "Infantil, Comédia", 
                launchYear: "2020", 
                sinopse: "Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.", 
                cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H4OxKDLzY7bP1h79Xn3-aWSYzHSdALiQ7l8hs-SgGNtK2qrWRORLqxNQrbGTcMo3_2k&usqp=CAU", 
                images: [
                    { url: "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27227438.jpg%27&ImageUrl=%27227438.jpg%27&EntityType=%27Item%27&EntityId=%2721999%27&Width=1920&Height=1080&device=web_browser&subscriptions=Anonymous" }, 
                    { url: "https://epipoca.com.br/wp-content/uploads/2020/12/sonic-o-filme.jpg" }, 
                ]
            },
            { 
                id: 6, 
                title: "Aves de Rapina", 
                imdbGrade: 6.1, 
                runtime: "01:49", 
                genre: " Ação, Aventura", 
                launchYear: "2020", 
                sinopse: "Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.", 
                cover: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/01/avesderapina-poster2.jpg", 
                images: [
                    { url: "http://farofageek.com.br/wp-content/uploads/2020/02/aves-de-rapina-capa-800x445.jpg" }, 
                    { url: "https://sm.ign.com/t/ign_br/screenshot/default/avesderapina-newposterelenco-imgdestaque_8jxe.h720.jpg" }, 
                ]
            },
        ];

        if(params != null && params?.q != null && params?.q != ''){
            return JSON.stringify({
                movies : moviesData.filter(movie => movie.title.toLowerCase().includes(params.q.toLowerCase()))
            });
        }else{
            return JSON.stringify({
                movies : moviesData
            });
        }
    }
}

export default api = {
    get: (endpoint, params = null) => {
        return new Promise(resolve =>
            setTimeout(() => resolve(JSON.parse(server(endpoint, params))), 2000)
          );
    }
}