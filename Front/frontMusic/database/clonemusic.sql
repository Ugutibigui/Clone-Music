-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/07/2023 às 04:51
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clonemusic`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `channels`
--

CREATE TABLE `channels` (
  `idChannel` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `subtitle` varchar(150) NOT NULL,
  `card` varchar(150) NOT NULL,
  `requestApi` varchar(255) NOT NULL,
  `local` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `channels`
--

INSERT INTO `channels` (`idChannel`, `title`, `subtitle`, `card`, `requestApi`, `local`) VALUES
(1, 'Flow: toque o que você sente', 'Um mix infinito e personalizado das músicas que você ama e também de novas descobertas.', 'FlowCard', '', 'Music'),
(2, 'Seus artistas favoritos', '', 'ArtistCard', '', 'Music'),
(3, 'Playlist que você vai amar', '', 'MusicCard', '', 'Music'),
(4, 'The Grammy Awards 2023', 'E os vencedores são...', 'MusicCard', '', 'Music'),
(5, 'Mais ouvidas do momento', '', 'MusicCard', 'musics?date=2023&views=500000', 'Music'),
(6, 'Categorias', '', 'CategorieCard', '', 'Music'),
(7, 'Lançamentos para você', '', 'MusicCard', 'musics?', 'Music'),
(8, '100% para você', '', 'MusicCard', '', 'Music'),
(9, 'Gêneros:', '', 'CategorieCard', '', 'Music'),
(10, 'Playlists populares', '', 'MusicCard', '', 'Music'),
(11, 'Destaques', '', 'HighlightCard', '', 'Music'),
(12, 'Sextou', '', 'MusicCard', '', 'Music'),
(13, 'Charts', '', 'MusicCard', '', 'Music'),
(14, 'Álbuns mais ouvidos', '', 'MusicCard', '', 'Music'),
(15, 'Só na Deezer', '', 'MusicCard', '', 'Music'),
(16, 'No ritmo dos anos 2000', '', 'MusicCard', '', 'Music'),
(17, 'Rádios para você', '', 'radioCard', '', 'Music'),
(18, 'Podcasts populares', '', 'MusicCard', '', 'Podcast'),
(19, 'Todas as categorias', '', 'CategorieCard', '', 'Podcast'),
(20, '', '', 'HighlightCard', '', 'Podcast'),
(21, 'Nossos editores estão amando', '', 'MusicCard', '', 'Podcast'),
(22, 'Destaques', '', 'HighlightCard', '', 'Podcast'),
(23, 'Escolhas novas da semana', '', 'MusicCard', '', 'Podcast'),
(24, 'Podcasts por duração', '', 'MusicCard', '', 'Podcast'),
(25, 'Deezer Originals', '', 'MusicCard', '', 'Podcast'),
(26, 'Podcasts por produtora', '', 'MusicCard', '', 'Podcast');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fans`
--

CREATE TABLE `fans` (
  `userId` int(11) NOT NULL,
  `fansCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fans`
--

INSERT INTO `fans` (`userId`, `fansCount`) VALUES
(48, 0),
(49, 0),
(50, 0),
(51, 0),
(52, 0),
(53, 0),
(54, 0),
(55, 0),
(56, 0),
(57, 0),
(58, 0),
(59, 0),
(60, 0),
(61, 0),
(62, 0),
(63, 0),
(64, 0),
(65, 0),
(66, 0),
(67, 0),
(68, 0),
(69, 0),
(79, 0),
(80, 0),
(81, 0),
(82, 0),
(83, 0),
(84, 0),
(85, 0),
(86, 0),
(87, 0),
(88, 0),
(89, 0),
(90, 0),
(91, 0),
(92, 0),
(93, 0),
(94, 0),
(95, 0),
(96, 0),
(97, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `flow`
--

CREATE TABLE `flow` (
  `flowId` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `image` varchar(255) NOT NULL,
  `background` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `flow`
--

INSERT INTO `flow` (`flowId`, `name`, `image`, `background`) VALUES
(1, 'Sertanejo', 'https://e-cdns-images.dzcdn.net/images/cover/a800ad66c6db0e1ff513b451bd4611dc/464x464-none-80-0-0.png', 'linear-gradient(44.73deg, rgb(255, 92, 0) 0%, rgb(255, 154, 36) 100%)'),
(2, 'Forró', 'https://e-cdns-images.dzcdn.net/images/cover/2992aada0d5439227ef1918509e15d77/464x464-none-80-0-0.png', 'linear-gradient(44.73deg, rgb(255, 153, 0) 0%, rgb(255, 194, 36) 100%)'),
(3, 'Funk BR', 'https://e-cdns-images.dzcdn.net/images/cover/2aefa2ef415a702ba4da989d071e55da/464x464-none-80-0-0.png', 'linear-gradient(45deg, rgb(151, 23, 69) 0%, rgb(226, 66, 124) 100%)'),
(4, 'Rap', 'https://e-cdns-images.dzcdn.net/images/cover/7a31b4512c1fe1722f6f21c086b70c95/464x464-none-80-0-0.png', 'linear-gradient(45deg, rgb(29, 44, 175) 0%, rgb(166, 104, 245) 100%)'),
(5, 'Gospel BR', 'https://e-cdns-images.dzcdn.net/images/cover/8a146234179f7af9c3d21a952fecef2f/464x464-none-80-0-0.png', 'linear-gradient(45deg, rgb(189, 151, 55) 0%, rgb(229, 202, 99) 100%)'),
(6, 'Pop', 'https://e-cdns-images.dzcdn.net/images/cover/c3aee0736f01a9c1949914cc9e8091d8/464x464-none-80-0-0.png', 'linear-gradient(45deg, rgb(255, 118, 118) 0%, rgb(220, 69, 133) 100%)'),
(7, 'Treino', 'https://e-cdns-images.dzcdn.net/images/cover/f9abce2119ee4a3818a8775a6af351bc/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(220, 76, 17), rgb(254, 171, 46) 100%)'),
(8, 'Festa', 'https://e-cdns-images.dzcdn.net/images/cover/a6fd3972cde0cc5c5e9ed16de62d6917/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(211, 47, 47), rgb(246, 105, 60) 100%)'),
(9, 'Relax', 'https://e-cdns-images.dzcdn.net/images/cover/134d9be9901c73f5618e022fa447871d/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(145, 54, 169), rgb(216, 78, 182) 100%)'),
(10, 'Na Bad', 'https://e-cdns-images.dzcdn.net/images/cover/5836f254a07028abb236d750a6869f52/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(0, 121, 107), rgb(0, 172, 193) 100%)'),
(11, 'Você e Eu', 'https://e-cdns-images.dzcdn.net/images/cover/face4d0d7ef17c0c105b925f025ce67b/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(210, 45, 81) 0%, rgb(240, 98, 98) 100%)'),
(12, 'Foco', 'https://e-cdns-images.dzcdn.net/images/cover/2d68fb5571091c3616aebdb5f1fcdb1f/232x232-none-80-0-0.png', 'linear-gradient(to right, rgb(55, 105, 200), rgb(17, 168, 204) 100%)');

-- --------------------------------------------------------

--
-- Estrutura para tabela `listmusic`
--

CREATE TABLE `listmusic` (
  `playId` int(11) NOT NULL,
  `idMusic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `music`
--

CREATE TABLE `music` (
  `idMusic` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `audio` varchar(255) NOT NULL,
  `views` bigint(20) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `nationality` varchar(180) NOT NULL,
  `userId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `music`
--

INSERT INTO `music` (`idMusic`, `name`, `photo`, `date`, `audio`, `views`, `gender`, `nationality`, `userId`) VALUES
(2, 'Para e Repara', 'https://i.scdn.co/image/ab67616d0000b2732b86377dc99911f00dbb1080', '2020-09-04', 'C:\\fakepath\\Lara Silva, Mc WM e Mad Dogz - Para e Repara.mp3', 22208273, 'Funk', 'Brasil', '80'),
(3, 'Amnésia', 'https://akamai.sscdn.co/letras/360x360/albuns/9/d/8/3/1804071685450000.jpg', '2023-02-24', 'C:\\fakepath\\Lara Silva - Amnésia.mp3', 162970, 'Brega Funk', 'Brasil', '80'),
(4, 'Favorita', 'https://i1.sndcdn.com/artworks-XJT8sndgO7XmS3b6-OBhwIg-t500x500.jpg', '2022-11-18', 'C:\\fakepath\\Mc Tairon e Lara Silva - Favorita.mp3', 879879, 'Funk', 'Brasil', '80'),
(5, 'Me Livrei', 'https://m.media-amazon.com/images/I/51to8mXYllL._UXNaN_FMjpg_QL85_.jpg', '2023-05-19', 'C:\\fakepath\\Lara Silva, Melody e Charles New - Me Livrei.mp3', 602231, 'Pop', 'Brasil', '80, 90'),
(6, 'PASSANDO O RODO', 'https://s2.glbimg.com/FP6LMGl-_OiXEv4g9B1vVTSq-kQ=/top/e.glbimg.com/og/ed/f/original/2021/12/01/pocah-amigas_4.jpeg', '2021-12-04', 'C:\\fakepath\\POCAH, MC MIRELLA, TAINÁ COSTA, LARA SILVA - PASSANDO O RODO.mp3', 91828591, 'Brega Funk', 'Brasil', '83, 84, 81, 80'),
(7, 'Só vamo', 'https://tonamidia.com.br/wp-content/uploads/2022/08/LaraSilvaDjGuuga-12ago-03_ToNaMidia.jpg', '2022-08-12', 'C:\\fakepath\\Lara Silva e DJ Guuga - Só vamo.mp3', 4217815, 'Brega Funk', 'Brasil', '80'),
(8, 'Pode Ser Seu', 'https://p16.resso.me/img/tos-alisg-v-2102/948abf879226462c8ef8bf34de0897e1~c5_500x500.jpg', '2021-07-30', 'C:\\fakepath\\Lara Silva e Japinha Conde - Pode Ser Seu.mp3', 4858241, 'Forró', 'Brasil', '80'),
(9, 'Pra Ver Se Cola', 'https://i.ytimg.com/vi/A9HgAzpGg4s/hqdefault.jpg', '2016-06-15', 'C:\\fakepath\\Larissa Manoela - Pra Ver Se Cola.mp3', 13879896, 'Infantil', 'Brasil', '86'),
(10, 'Hoje a Noite é Nossa', 'https://portalpopline.com.br/wp-content/uploads/2019/10/larissa-manoela-hoje-a-noite-e-nossa.jpg', '2019-08-26', 'C:\\fakepath\\Larissa Manoela  - Hoje a Noite é Nossa.mp3', 10662265, 'Pop', 'Brasil', '86'),
(11, 'Pagou de Superado', 'https://s2-g1.glbimg.com/b6RJP1BEQ-goTbrV6glDzuVSs0M=/0x0:5556x3704/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/o/V/3N6ljrQI2K1AKpiLT5VA/larissa-manoela-credito-raphael-mateo-4.jpg', '2021-11-25', 'C:\\fakepath\\Larissa Manoela - Pagou de Superado.mp3', 1187532, 'Pop', 'Brasil', '86'),
(12, 'Fugir Agora', 'https://1.bp.blogspot.com/-FLPxH-gKceQ/VAcj_Tp6lcI/AAAAAAAAZrc/8mBJ0d2LtLg/s1600/unnamed.jpg', '2014-09-02', 'C:\\fakepath\\Larissa Manoela - Fugir Agora.mp3', 59249967, 'Infantil', 'Brasil', '86'),
(14, 'Minha Vez', 'https://m.media-amazon.com/images/I/51bfnkANIoL._UXNaN_FMjpg_QL85_.jpg', '2023-03-23', 'C:\\fakepath\\Tainá Costa, DJ Arana  - Minha Vez.mp3', 3238877, 'Funk', 'Brasil', '81, 95'),
(15, 'SEM ALIANÇA NO DEDO - TATUAGEM DA ARANHA', 'https://p16.resso.me/img/tos-alisg-v-2102/2b35483992444e3f85500f0f6e77bbd1~c5_1000x1000.jpg', '2023-03-08', 'C:\\fakepath\\SEM ALIANÇA NO DEDO -  TATUAGEM DA ARANHA   - MC XENON, TAINA COSTA, MC THAMMY.mp3', 182977, 'Brega Funk', 'Brasil', '81'),
(16, 'TARADA', 'https://m.media-amazon.com/images/I/81yie-ifLEL._UXNaN_FMjpg_QL85_.jpg', '2022-06-02', 'C:\\fakepath\\Tainá Costa e MC Fioti - Tarada.mp3', 1474538, 'Funk', 'Brasil', '81'),
(17, 'ARLEQUINA', 'https://i.scdn.co/image/ab67616d0000b27319fbf5b345013cc0ca999175', '2022-04-12', 'C:\\fakepath\\ARLEQUINA - Tainá Costa.mp3', 2665376, 'Brega Funk', 'Brasil', '81'),
(18, 'Bum Bum Aribaba', 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/28/2a/4c/282a4c49-6359-0eb6-34b9-bd62651ce146/0.jpg/1200x1200bb.jpg', '2020-04-27', 'C:\\fakepath\\Tainá Costa e K2 - Bum Bum Aribaba.mp3', 4806604, 'Brega Funk', 'Brasil', '81'),
(19, 'Para', 'https://i.scdn.co/image/ab67616d0000b27368664302d02e75df2b786d06', '2020-02-19', 'C:\\fakepath\\Tainá Costa e Malharo - Para.mp3', 380632, 'Funk', 'Brasil', '81'),
(20, 'Moreno', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/06/04/103085513-mc-mari-2-ari-prensa.jpg', '2021-06-04', 'C:\\fakepath\\Tainá Costa e MC Mari - Moreno.mp3', 4543699, 'Brega Funk', 'Brasil', '81'),
(21, 'Without Me', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Eminem_-_Without_Me_CD_cover.jpg/220px-Eminem_-_Without_Me_CD_cover.jpg', '2009-06-16', 'C:\\fakepath\\Eminem - Without Me.mp3', 1701798262, 'Hip Hop', 'Estados Unidos', '54'),
(22, 'Lose Yourself', 'https://upload.wikimedia.org/wikipedia/pt/d/d6/Lose_Yourself.jpg', '2015-08-06', 'C:\\fakepath\\Eminem - Lose Yourself.mp3', 1306456646, 'Rap', 'Estados Unidos', '54'),
(23, 'The Real Slim Shady', 'https://upload.wikimedia.org/wikipedia/en/6/69/Eminem_-_The_Real_Slim_Shady_CD_cover.jpg', '2010-09-15', 'C:\\fakepath\\Eminem - The Real Slim Shady.mp3', 841662868, 'Hip Hop', 'Estados Unidos', '54'),
(24, 'Venom', 'https://pbs.twimg.com/media/EYG-tYiWAAE17Ml.jpg', '2018-10-05', 'C:\\fakepath\\Eminem - Venom.mp3', 783462599, 'Rap', 'Rap', '54'),
(25, 'Not Afraid', 'https://m.media-amazon.com/images/M/MV5BMDg1NTY0MjItZDk3NS00M2JiLWJmZjgtMTE3Mjg4MTdmOGE5XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg', '2010-06-05', 'C:\\fakepath\\Eminem - Not Afraid.mp3', 1777691957, 'Rap', 'Estados Unidos', '54'),
(26, 'Rap God ', 'https://musicapave.com/wp-content/uploads/eminem-rap-god.jpg', '2013-11-27', 'C:\\fakepath\\Eminem - Rap God.mp3', 1351334350, 'Rap', 'Estados Unidos', '54'),
(27, 'Hotline Bling', 'https://3.bp.blogspot.com/-0LUVFZLH5u0/V_qoSJYFrXI/AAAAAAAAEH4/6yUb1MURRCEKmCqDNyT3A9ab-Ic3a2iVwCLcB/s1600/drakes-hotline-bling.jpg', '2015-10-26', 'C:\\fakepath\\Drake - Hotline Bling.mp3', 1942087783, 'Pop', 'Estados Unidos', '53'),
(28, 'God\'s Plan', 'https://akamai.sscdn.co/uploadfile/letras/albuns/c/e/3/8/646121632257722.jpg', '2018-02-16', 'C:\\fakepath\\Drake - God\'s Plan.mp3', 1503449571, 'Trap', 'Estados Unidos', '53'),
(29, 'Laugh Now Cry Later', 'https://i.redd.it/mv0fdwm5b0h51.jpg', '2010-08-13', 'C:\\fakepath\\Drake - Laugh Now Cry Later.mp3', 449497033, 'Rap', 'Estados Unidos', '53'),
(30, 'Forever ', 'https://i1.sndcdn.com/artworks-000076983673-unt8l3-t500x500.jpg', '2009-11-25', 'C:\\fakepath\\Drake, Kanye West, Lil Wayne, Eminem - Forever.mp3', 362847074, 'Hip Hop', 'Estados Unidos', '53, 54'),
(31, 'Started From The Bottom', 'https://i1.sndcdn.com/artworks-000039954317-t4ovg0-t500x500.jpg', '2013-02-13', 'C:\\fakepath\\Drake - Started From The Bottom.mp3', 509335961, 'Rap', 'Estados Unidos', '53'),
(32, 'Easy On Me', 'https://i1.sndcdn.com/artworks-GSvPigmkmpKHRi8C-Sv4aJw-t500x500.jpg', '2021-10-14', 'C:\\fakepath\\Adele - Easy On Me.mp3', 346942770, 'Pop', 'Estados Unidos', '58'),
(33, 'Rolling in the Deep', 'https://i1.sndcdn.com/artworks-000109026918-2n3ayn-t500x500.jpg', '2010-11-30', 'C:\\fakepath\\Adele - Rolling in the Deep.mp3', 2276131127, 'Pop', 'Estados Unidos', '58'),
(34, 'Someone Like You', 'https://i1.sndcdn.com/artworks-000074073161-kmgoqv-t500x500.jpg', '2011-09-29', 'C:\\fakepath\\Adele - Someone Like You.mp3', 2040736312, 'Pop', 'Estados Unidos', '58'),
(35, 'Skyfall ', 'https://upload.wikimedia.org/wikipedia/pt/0/09/Capa_de_Skyfall.jpg', '2012-10-18', 'C:\\fakepath\\Adele - Skyfall.mp3', 543202259, 'Pop', 'Estados Unidos', '58'),
(36, 'Send My Love', 'https://musicapave.com/wp-content/uploads/adele-send-my-love-to-your-new-lover.jpg', '2016-05-22', 'C:\\fakepath\\Adele - Send My Love.mp3', 878636126, 'Pop', 'Estados Unidos', '58'),
(37, 'Hello ', 'https://m.media-amazon.com/images/M/MV5BMTM2NzE1YTEtNTNjZC00MTg5LTkwOTEtNDEwMDI1ODA1YjhkXkEyXkFqcGdeQXVyNjU0ODAyOTY@._V1_.jpg', '2015-10-22', 'C:\\fakepath\\Adele - Hello.mp3', 3082045753, 'Pop', 'Estados Unidos', '58'),
(38, 'Lado Emocional ', 'https://i.ytimg.com/vi/iteQXb0oHsI/maxresdefault.jpg', '2023-07-07', 'C:\\fakepath\\Gusttavo Lima -  Lado Emocional.mp3', 1137747, 'Sertanejo', 'Brasil', '62'),
(39, 'DESEJO IMORTAL', 'https://i.ytimg.com/vi/BmtdAHmWA1g/maxresdefault.jpg', '2023-04-14', 'C:\\fakepath\\Gusttavo Lima - DESEJO IMORTAL.mp3', 92641379, 'Sertanejo', 'Brasil', '62'),
(40, 'Bloqueado ', 'https://i1.sndcdn.com/artworks-VWmycCPfFoAbyvRa-BXlaNA-t500x500.jpg', '2021-11-26', 'C:\\fakepath\\Gusttavo Lima - Bloqueado.mp3', 293542083, 'Sertanejo', 'Brasil', '62'),
(41, 'Eu Não Iria', 'https://i1.sndcdn.com/artworks-Pryq0m5kztaCmbVL-cKZTQw-t500x500.jpg', '2018-11-22', 'C:\\fakepath\\Gusttavo Lima - Eu Não Iria.mp3', 381361549, 'Sertanejo', 'Brasil', '62'),
(42, 'Na Hora de Amar', 'https://i.ytimg.com/vi/uVMD3Rd9WMk/maxresdefault.jpg', '2018-12-24', 'C:\\fakepath\\Gusttavo Lima - Na Hora de Amar.mp3', 404886621, 'Sertanejo', 'Brasil', '62'),
(43, 'Termina Comigo Antes', 'https://9382cdebf7.clvaw-cdnwnd.com/9b71833bc45df38b547939216d0d77fa/200004433-bfd86bfd88/c8144636-f632-48da-86d7-ba5c6e614e2e.png?ph=9382cdebf7', '2022-04-01', 'C:\\fakepath\\Gusttavo Lima - Termina Comigo Antes.mp3', 312653140, 'Sertanejo', 'Brasil', '62'),
(44, 'Balada (Tchê Tchê Rere)', 'https://i.scdn.co/image/ab67616d0000b27310bff5a0e1e7b7a0343fc94b', '2011-10-25', 'C:\\fakepath\\Gusttavo Lima - Balada.mp3', 154317606, 'Sertanejo', 'Brasil', '62'),
(45, 'Saudade da Minha Vida', 'https://i.ytimg.com/vi/DUJUxYY5OP8/maxresdefault.jpg', '2023-01-27', 'C:\\fakepath\\Gusttavo Lima - Saudade da Minha Vida.mp3', 87676659, 'Sertanejo', 'Brasil', '62'),
(46, 'Cem Mil', 'https://i1.sndcdn.com/artworks-CXF6zbnDd6SbaJyf-1OcHQg-t500x500.jpg', '2018-10-26', 'C:\\fakepath\\Gusttavo Lima - Cem Mil.mp3', 414845582, 'Sertanejo', 'Brasil', '62'),
(47, 'Ficha Limpa', 'https://portalpopline.com.br/wp-content/uploads/2021/06/gusttavo-lima-radios-640x800.jpg', '2023-06-08', 'C:\\fakepath\\Gusttavo Lima - Ficha Limpa.mp3', 3840415, 'Sertanejo', 'Brasil', '62'),
(48, 'Por Covardia Minha', 'https://i.ytimg.com/vi/7Y8K3F1QKlA/maxresdefault.jpg', '2018-12-15', 'C:\\fakepath\\Gusttavo Lima - Por Covardia Minha.mp3', 78360753, 'Sertanejo', 'Brasil', '62'),
(49, ' AMERICA HAS A PROBLEM ', 'https://f4.bcbits.com/img/a3598485401_10.jpg', '2023-05-23', 'C:\\fakepath\\Beyoncé - AMERICA HAS A PROBLEM.mp3', 3471928, 'Hip Hop', 'Estados Unidos', '51'),
(50, 'Love On Top', 'https://upload.wikimedia.org/wikipedia/pt/0/07/Beyonc%C3%A9_-_Love_on_Top.jpg', '2011-10-16', 'C:\\fakepath\\Beyoncé - Love On Top.mp3', 528123886, 'Pop', 'Estados Unidos', '51'),
(51, 'Halo', 'https://i1.sndcdn.com/artworks-000100738651-hgoujv-t500x500.jpg', '2009-10-03', 'C:\\fakepath\\Beyoncé - Halo.mp3', 1421832865, 'Pop', 'Estados Unidos', '51'),
(52, 'Run the World', 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f8/Run_the_World_%28Girls%29.jpg/220px-Run_the_World_%28Girls%29.jpg', '2011-05-18', 'C:\\fakepath\\Beyoncé - Run the World.mp3', 565862651, 'Eletronica', 'Estados Unidos', '51'),
(53, 'Single Ladies', 'https://upload.wikimedia.org/wikipedia/pt/2/2c/Beyonc%C3%A9_-_Single_Ladies.jpg', '2009-10-03', 'C:\\fakepath\\Beyoncé - Single Ladies.mp3', 920815669, 'Pop', 'Estados Unidos', '51'),
(54, 'CUFF IT', 'https://i1.sndcdn.com/artworks-QAAFhWBJnoOtgvhV-w9BIYg-t500x500.jpg', '2022-07-29', 'C:\\fakepath\\Beyoncé - CUFF IT.mp3', 47967059, 'Pop', 'Estados Unidos', '51'),
(55, 'BREAK MY SOUL', 'https://cdn.images.express.co.uk/img/dynamic/79/590x/secondary/Madonna-Beyonce-renaissance-break-my-soul-tour-diet-costume-latest-news-update-4217076.jpg?r=1659959107340', '2022-08-08', 'C:\\fakepath\\Beyoncé, Madonna - BREAK MY SOUL.mp3', 4823164, 'Eletronica', 'Estados Unidos', '51, ?'),
(56, 'Imagine', 'https://upload.wikimedia.org/wikipedia/pt/9/9c/John_Lennon_-_Imagine.jpg', '2016-12-18', 'C:\\fakepath\\IMAGINE - John Lennon.mp3', 287216599, 'Pop', 'Estados Unidos', '55'),
(57, 'CANETARIA  ', 'https://i0.wp.com/www.zonasuburbana.com.br/wp-content/uploads/2023/06/MC-Mirella-CANETARIA-Numero-1-Clipe-Oficial.webp?fit=1200%2C1206&ssl=1', '2023-06-28', 'C:\\fakepath\\MC Mirella, CANETARIA.mp3', 1141466, 'Funk', 'Brasil', '84'),
(58, 'Ai Eu Tô Dodói', 'https://m.media-amazon.com/images/I/51+lCDNKP9L._UXNaN_FMjpg_QL85_.jpg', '2022-12-27', 'C:\\fakepath\\MC Mirella - Ai Eu Tô Dodói.mp3', 1703517, 'Funk', 'Brasil', '84'),
(59, 'QUER MAIS?', 'https://akamai.sscdn.co/uploadfile/letras/albuns/a/c/2/0/881411586980852.jpg', '2018-11-02', 'C:\\fakepath\\POCAH E MC MIRELLA - QUER MAIS.mp3', 181874339, 'Funk', 'Brasil', '83,84'),
(60, 'Cansei Vacilão', 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/73/96/4e/73964ea1-218b-ba6c-af99-8c7d46a47e2f/190296922282.jpg/600x600bf-60.jpg', '2017-11-06', 'C:\\fakepath\\MC Mirella - Cansei Vacilão.mp3', 32394732, 'Funk', 'Brasil', '84'),
(61, 'Brota Bebê - Tô Querendo Fazer', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4c/f5/23/4cf523f2-b8bd-ab34-85f0-2a4cae98471e/0.jpg/1200x1200bb.jpg', '2023-04-14', 'C:\\fakepath\\MC Mirella e MC Lucy - Brota Bebê - Tô Querendo Fazer.mp3', 1653647, 'Funk', 'Brasil', '84'),
(62, 'Provocando ', 'https://m.media-amazon.com/images/I/511Jd3O8BaL._UXNaN_FMjpg_QL85_.jpg', '2022-08-10', 'C:\\fakepath\\Mirella e MC Gabzin - Provocando.mp3', 4588538, 'Funk', 'Brasil', '84'),
(63, 'Meu Desapego', 'https://i1.sndcdn.com/artworks-D9ajf4G1yKLD-0-t500x500.jpg', '2022-08-24', 'C:\\fakepath\\Ludmilla - Meu Desapego.mp3', 51692302, 'Pagode', 'Brasil', '97'),
(64, 'Cheguei ', 'https://jpimg.com.br/uploads/2017/11/archives/2017/07/07/457784870-ludmilla-lanca-versao-sem-censura-de-cheguei.jpg', '2017-05-03', 'C:\\fakepath\\LUDMILLA - Cheguei.mp3', 293165596, 'Pop', 'Brasil', '97'),
(65, 'CAFÉ DA MANHÃ', 'https://tracklist.com.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-09-at-12.19.10.jpeg', '2022-02-08', 'C:\\fakepath\\Luísa Sonza, Ludmilla - CAFÉ DA MANHÃ.mp3', 70767314, 'Pop', 'Brasil', '88, 97'),
(66, 'Brigas Demais', 'https://i.ytimg.com/vi/vVXd92vSaEk/maxresdefault.jpg', '2023-02-24', 'C:\\fakepath\\Ludmilla feat. Delacruz e Gaab - Brigas Demais.mp3', 6036757, 'Trap', 'Brasil', '97'),
(67, 'Rainha da Favela', 'https://i.scdn.co/image/ab67616d0000b273ba97386384cbf562725bdb2c', '2020-11-12', 'C:\\fakepath\\LUDMILLA - Rainha da Favela.mp3', 84271062, 'Funk', 'Brasil', '0');

-- --------------------------------------------------------

--
-- Estrutura para tabela `playlist`
--

CREATE TABLE `playlist` (
  `playId` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` varchar(180) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(100) NOT NULL,
  `userName` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(100) NOT NULL,
  `artist` tinyint(1) NOT NULL,
  `photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`userId`, `email`, `password`, `name`, `userName`, `age`, `sex`, `artist`, `photo`) VALUES
(40, 'richardluan084@gmail.com', '1564ba7bae8cf53e63f1a79eb7c29519abf71c77e0a880431cb1e686351bd508', 'Richard Luan', 'rick04', 18, 'Masculino', 0, 'https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg'),
(48, 'michael@gmail.com', '95bfb24de17d285d734b9eaa9109bfe922adc85f20d2e5e66a78bddb4a4ebddb', 'Michael Jackson', 'michael_jackson', 43, 'Masculino', 1, 'https://hips.hearstapps.com/hmg-prod/images/michael-jackson-poses-at-a-press-conference-before-a-date-news-photo-1681227276.jpg?crop=1.00xw:0.826xh;0,0.0804xh&resize=1200:*'),
(49, 'elvispresley@gmail.com', '47b97dccb2d224a4908eed94901eaacde6f312667fe189a21da50d2f4249782c', 'Elvis Presley', 'presley35', 42, 'Masculino', 1, 'https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2022/08/8485a45-elvis-presley.jpg'),
(50, 'rihanna@gmail.com', 'c96f8dbd65908cca3c5ddc1f63ff36344d982262278b985f661ef604353d7324', 'Rihanna', 'robyn_rihanna', 35, 'Feminino', 1, 'https://media.hugogloss.uol.com.br/uploads/2022/11/rihanna.jpg'),
(51, 'beyonce@gmail.com', '5d5ff03ad6f92f9c604b559b0f4b08f304d4f1e24b740d98b82d2cbe2c5c96e6', 'Beyoncé', 'beyonce_gi', 41, 'Feminino', 1, 'https://portalrapmais.com/wp-content/uploads/2022/10/Beyonce.jpg'),
(52, 'ladygaga@gmail.com', '9120358f232bbb056dde9d7d96971a122d79f1eec27dd10e60fdba03863bfb01', 'Lady Gaga', 'lady_stefani', 37, 'Feminino', 1, 'https://metropolitanafm.com.br/wp-content/uploads/2022/10/Lady-Gaga-Biografia-Ultimas-Noticias-Curiosidades-Idade-e-muito-mais.jpg'),
(53, 'drake@gmail.com', '31f377d5a33146a96c1f5cdfe51bace88dcd83d7f5b8a59a1bc0d714f24ba6ed', 'Drake', 'aubrey_drake ', 36, 'Masculino', 1, 'https://www.rbsdirect.com.br/filestore/5/7/0/4/7/5/1_4f0395389b7aa66/1574075_fc77065ee6c2ba7.jpg?w=800&h=535&a=c%201x'),
(54, 'eminem@gmail.com', '98d9d59a907519c80fc08e9ba0e4505f152c1bb8dbe94538e11ad19f5ccdbfe0', 'Eminem', 'eminem_rap', 50, 'Masculino', 1, 'https://img.nrj.fr/w79p7u1IcQ4jFkztWB2uC7pv3bU=/http://media.nrj.fr/1900x1200/2017/12/eminem_7231.jpg'),
(55, 'jhonlennon@gmail.com', '4f89cd08f179b86fe246f2b0067472becc40e96ae43ebedfee54535836fabaaa', 'John Lennon', 'lennon_john', 40, 'Masculino', 1, 'https://uploads.metropoles.com/wp-content/uploads/2017/11/21170223/John-Lennon.jpg'),
(56, 'whitney@gmail.com', '206c2e176e4d57f451d1906fed963b5504701eea1c02531590f23edb2f2a6b64', 'Whitney Houston', 'whitney', 49, 'Feminino', 1, 'https://media.vogue.fr/photos/5c36126ecac744cfa8bace67/2:3/w_2560%2Cc_limit/whitney_8117.jpeg'),
(57, 'madonna@gmail.com', '62f8bc21a7793f8e15cf39786690ddbd5c033331aa7f4260a527611dffbf0687', 'Madonna', 'madonna_louise', 64, 'Feminino', 1, 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/01/24124028/madonna.jpg.webp'),
(58, 'adele@gmail.com', '6d41abb6711c54cc0c9984d73c814145678aff0bd8f3c8418dd9b6dd0a479854', 'Adele', 'adele_laurie', 35, 'Feminino', 1, 'https://istoe.com.br/wp-content/uploads/2021/11/41-1.jpg'),
(59, 'kurtcobain@gmail.com', 'e466c848cd841c2b5d3fd390d06783a03c407b4dfc0786d94ceec4f5840f741c', 'Kurt Cobain', 'kurt67', 23, 'Masculino', 1, 'https://ligadoamusica.com.br/wp-content/uploads/2021/05/kurt-cobain-morte-fbi.jpg'),
(60, 'justinbieber@gmail.com', '1a0c847a01f12e481df9b15e8f58be8d57588a0cde437544d45c4028d2b3971e', 'Justin Bieber', 'justin_drew', 29, 'Masculino', 1, 'https://neofeed.com.br/wp-content/uploads/2023/01/50284567937_110c0c3ee3_b.jpg'),
(61, 'annita@gmail.com', '46e56923daacd9486f69b082ec91b5ef2a74ab70c7f0b83f93c5668c3ad2d939', 'Anitta', 'anitta30', 30, 'Feminino', 1, 'https://portalpopline.com.br/wp-content/uploads/2020/09/Anitta-6-1.jpg'),
(62, 'gusttavolima@gmail.com', 'c0c5ffd3e417532f23a2a98753c0ddf84e017a7532783cf8bdc613a00c69223d', 'Gusttavo Lima', 'gusttavo_lima', 33, 'Masculino', 1, 'https://jpimg.com.br/uploads/2023/01/design-sem-nome-2023-01-18t104305.427-750x432.png'),
(63, 'robertocarlos@gmail.com', '330ba40d76e8ab33dffcab212e943cefd15fb5d9cf3bc8655cb398025ae0493f', 'Roberto Carlos', 'roberto_carlos', 82, 'Masculino', 1, 'https://aaronturatv.ig.com.br/wp-content/uploads/2021/08/roberto-carlos.jpg'),
(64, 'ritalle@gmail.com', 'ae796dced60d101b0a9912096a522ff6c70a997318dc6e3497afc399baac3430', 'Rita Lee', 'ritalle', 76, 'Feminino', 1, 'https://pt.org.br/wp-content/uploads/2023/05/rita-lee-divulgacao-2.jpg'),
(65, 'luansantana@gmail.com', 'f770be43ac63cd1d25aeeb9dec48d3507b34dd045a0fb20a185315bd5b0659b3', 'Luan Santana', 'luansantana', 32, 'Masculino', 1, 'https://s2-g1.glbimg.com/ZkBhHfGKc_Z_sKQEGw3ZKMY7i84=/0x0:1792x1792/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/E/o/r5PKxMQh6a3XJJ3f5hBA/luansantana.jpg'),
(66, 'ivetemaria@gmail.com', '5083c1a33f492dc4e4272d058afa20b01747bca66f0b82d61aca2d66c59fb963', 'Ivete Sangalo', 'ivete_maria', 50, 'Feminino', 1, 'https://s2.glbimg.com/2sDpo0MZGTCjpZQLI0POMuMRPWg=/0x33:1000x726/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2022/R/V/4XL8BXSFeMvr2pTcb6cw/ivete-2.jpeg'),
(67, 'xuxa@gmail.com', 'aeb21ada8d031cb5b00308d48ad322698c04fb179abee7ae7137876d0cd84c20', 'Xuxa', 'maria_xuxa', 60, 'Feminino', 1, 'https://tvhistoria.com.br/wp-content/uploads/2023/02/xou-da-xuxa-600x400.jpg'),
(68, 'alokachkar@gmail.com', '896dee99cb07246ce6e47eba114b3b38856d845c2c82d4c7d93d0b15b1021246', 'Alok', 'dj_alok', 31, 'Masculino', 1, 'https://i1.sndcdn.com/avatars-ch9aKcNkFsp8OJft-TO4UPA-t500x500.jpg'),
(69, 'timmaia@gmail.com', '5186ee283b78dcd7570b1559ea0fc2d4514a065a9aecccf344a1c6d0555fb2f2', 'Tim Maia', 'tim_maia', 56, 'Masculino', 1, 'https://i.scdn.co/image/ab6761610000e5eb2bd9e03d04f2a168e4414eea'),
(79, 'mcryansp@gmail.com', '093e5917d5424418bbf0a704a904e3fbb4959c86b5eeac766044333d314d7d35', 'MC Ryan SP', 'mcryansp', 21, 'Masculino', 1, 'https://e-cdn-images.dzcdn.net/images/artist/b4bc83a9e87f6b6082493d336f3371d1/264x264-000000-80-0-0.jpg'),
(80, 'larasilva@gmail.com', '56b2ed054b498ea2a1dcfafd886c362e9d23f6cb4bd24baff4029f3297a8b8d0', 'Lara Silva', 'larasilva', 21, 'Feminino', 1, 'https://preview.redd.it/vzo43so9ki881.jpg?width=640&crop=smart&auto=webp&s=daede334c20659b6b852fc33c0cf723ecdcaef00'),
(81, 'tainacosta@gmail.com', '786327abab810738fcd861cd57c0ed4e429954ae3fdeda9272aa6c211394d920', 'Tainá Costa', 'tainacosta', 25, 'Feminino', 1, 'https://pbs.twimg.com/media/EjRcP4nXYAEVXG3.jpg:large'),
(82, 'melissamaia@gmail.com', '56cce257a1fbba31a53da44517a4dcd789455aeca21d285e4665e47883f67d81', 'Mel Maia', 'melissamaia', 19, 'Feminino', 0, ''),
(83, 'pocahviviane@gmail.com', 'cb6cdad00b114b80c2aca225980f80a0a0c984f06116cbe4601cab50534c02c4', 'Pocah', 'viviane', 27, 'Feminino', 1, 'https://sitedabaixada.com.br/wp-content/uploads/2021/01/15699719225d93ded27a27e_1569971922_3x2_rt.jpg'),
(84, 'mcmirella@gmail.com', '33eec3ebbd4e351110333dd29098ece18f15dc4128eca4f0f8a085e8db152b47', 'MC Mirella', 'mcmirella', 24, 'Feminino', 1, 'https://www.marciapiovesan.com.br/wp-content/uploads/2021/05/mc-mirella.jpg'),
(85, 'vanessalopes@gmail.com', '5b21bba13f157673efc01c4077d648e35253a479603c726d15bedb159d3a5d2f', 'Vanessa Lopes', 'vanessalopes', 21, 'Feminino', 1, 'https://portalpopline.com.br/wp-content/uploads/2022/05/Vanessa-Lopes-desabafo.jpg'),
(86, 'larissamanoela@gmail.com', 'e8effc62076c5b1512494a282b93b2633e7af352cb9f6361acfe39d285139614', 'Larissa Manoela', 'larissamanoela', 22, 'Feminino', 1, 'https://istoe.com.br/wp-content/uploads/2023/02/larissa-manoela.jpg'),
(87, 'tatizaqui@gmail.com', 'c213d7111d0a0b150894b5adbc728362fe867913c64ceee6502ce5568803ef6c', 'Tati Zaqui', 'tatianezaqui', 29, 'Feminino', 1, 'https://noticiasdatv.uol.com.br/media/uploads/bio/_af14-tati-zaqui-divulgacao-record.jpg'),
(88, 'luisasonza@gmail.com', '7db9d7c294124385e5e1fa1b8117ecd64f60b93504bc766b3e007947effea2e1', 'Luísa Sonza', 'luisagerloff', 24, 'Feminino', 1, 'https://e-cdns-images.dzcdn.net/images/cover/3e466897f11efdf7facfea51a60232ec/264x264-000000-80-0-0.jpg'),
(89, 'pipokinha@gmail.com', '181a1e8030edcc2cf217f57dea329af2ba2520cf11de68feb84ef26da200a269', 'MC Pipokinha', 'pipokinha', 24, 'Feminino', 1, 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/EODQZXZRGREEHLBNVD5ZCQ4ODA.jpg'),
(90, 'mcmelody@gmail.com', '450f9d6ae1c0f2d42b0c9118f3b77d05a2486a8b144714129d772410d6fcbd47', 'Mc Melody', 'mcmelody', 16, 'Feminino', 1, 'https://www.doistercos.com.br/wp-content/uploads/2022/07/IMG-20220725-WA0037.jpg'),
(91, 'anacastela@gmail.com', '92ac6a5c3d012fb239bc9b361b25fefe96a7e774d375c5796a0d865960e08f26', 'Ana Castela', 'anacastela', 19, 'Feminino', 1, 'https://vejasp.abril.com.br/wp-content/uploads/2023/04/ana-castela-.jpg?quality=70&strip=info&w=680&resize=1200,800'),
(92, 'lexaaraujo@gmail.com', '33432f95d2b5e84ded1e844a3108705feef1d113c5a3c74d9dc4c0af5339dd1b', 'Lexa', 'lexaaraujo', 28, 'Feminino', 1, 'https://portalpopline.com.br/wp-content/uploads/2021/09/Lexa-responde-cobranca-por-lancamentos-100-eu-nao-estou.jpg'),
(93, 'mckevinho@gmail.com', '168f3240b747a856f46ead5326f3e9c14ffc2dbc20dd2840666edac07a49c970', 'MC Kevinho', 'mckevinho', 25, 'Masculino', 1, 'https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/3e/d7/35/3ed73501-3885-106a-11ef-b5a972aed4a3/mzl.nwcgdtxe.jpg/486x486bb.png'),
(94, 'thallitatreyce@gmail.com', 'cfffb1f29b49305bb2ff5375b420006bbf34f080203f8d133f9215cdf2d15e68', 'Treyce', 'thallitatreyce', 16, 'Feminino', 1, 'https://p16.resso.me/img/tos-alisg-i-0000/2d03cf2b193d4234b9e00292992d57e7~c5_750x750.jpg'),
(95, 'djaranana@gmail.com', '790ea9223bdcda183bf3ade068a9c23defcb34758e24639909ad608980b3dd4d', 'DJ Arana', 'guiArana', 17, 'Masculino', 1, 'https://portalpopclub.com.br/wp-content/uploads/2023/02/image-57.png'),
(96, 'mcbianca@gmail.com', '8bdc360d8f925fdabc243ef14825ed65f13e01b769d8eb9458271caf21b38c43', 'Bianca', 'mcbianca', 22, 'Feminino', 1, 'https://s2.glbimg.com/ONMvfpuiAoohgd9yIpoZjBgK2IU=/top/e.glbimg.com/og/ed/f/original/2021/06/25/bianca4.jpg'),
(97, 'ludmilaoliveira@gmail.com', 'ba89e97373fc6c04879e654c161bc2824ff60c25e35bd2413ea953e3069183d0', 'Ludmila', 'ludmilaoliveira', 28, 'Feminino', 1, 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/24/1018510146-2iy7htvcvzdupdiblbge2zuvsu.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`idChannel`);

--
-- Índices de tabela `flow`
--
ALTER TABLE `flow`
  ADD PRIMARY KEY (`flowId`);

--
-- Índices de tabela `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`idMusic`);

--
-- Índices de tabela `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`playId`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `channels`
--
ALTER TABLE `channels`
  MODIFY `idChannel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `flow`
--
ALTER TABLE `flow`
  MODIFY `flowId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `music`
--
ALTER TABLE `music`
  MODIFY `idMusic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de tabela `playlist`
--
ALTER TABLE `playlist`
  MODIFY `playId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
