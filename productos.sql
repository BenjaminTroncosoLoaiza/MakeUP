-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2024 a las 18:08:44
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-maquillajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(80) NOT NULL,
  `precio_venta` int(11) NOT NULL,
  `descripcion_producto` varchar(80) NOT NULL,
  `cantidad_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `precio_venta`, `descripcion_producto`, `cantidad_producto`) VALUES
(1, 'SUPERSTAY VINYL INK\r\nLabial Líquido Brillante', 10000, 'Llega el color de labios líquido Super Stay Vinyl Ink de larga duración', 10),
(2, 'Baby Lips®\r\nBálsamo labial hidratante', 5000, 'El bálsamo hidratante Baby Lips® hidrata los labios durante 8 horas', 15),
(3, 'SUPER STAY MATTE INK\r\nLabial líquido', 8000, 'Labial líquido estilo tinta SuperStay Matte Ink Liquid Lipstick ', 12),
(4, 'LIFTER LINER\r\nDELINEADOR DE LABIOS', 6000, 'Conoce Lifter Liner, el delineador de labios de Maybelline NY de otro nivel', 13);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
