-- MySQL Script generated by MySQL Workbench
-- Mon Nov  4 15:12:29 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-maquillaje
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-maquillaje
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-maquillaje` DEFAULT CHARACTER SET utf8 ;
USE `db-maquillaje` ;

-- -----------------------------------------------------
-- Table `db-maquillaje`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-maquillaje`.`categorias` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-maquillaje`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-maquillaje`.`productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_producto` VARCHAR(60) NULL,
  `preciocomp` INT NOT NULL,
  `descripcion` VARCHAR(60) NOT NULL,
  `cantidad` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  `imagen` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`producto_id`),
  INDEX `fk_productos_categorias_idx` (`categoria_id` ASC),
  CONSTRAINT `fk_productos_categorias`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `db-maquillaje`.`categorias` (`categoria_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-maquillaje`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-maquillaje`.`Clientes` (
  `cliente_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_cl` VARCHAR(60) NOT NULL,
  `apellido_paterno` VARCHAR(60) NOT NULL,
  `apellido_materno` VARCHAR(60) NOT NULL,
  `rut` INT NOT NULL,
  `correo` VARCHAR(60) NOT NULL,
  `contraseña` VARCHAR(60) NOT NULL,
  `edad` INT NOT NULL,
  PRIMARY KEY (`cliente_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-maquillaje`.`Compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-maquillaje`.`Compra` (
  `compra_id` INT NOT NULL,
  `cliente_id` INT NULL,
  `fecha_compra` TIMESTAMP NOT NULL,
  `total_pago` INT NOT NULL,
  `tipo_pago` VARCHAR(45) NOT NULL,
  `Compracol` VARCHAR(45) NOT NULL,
  `Clientes_cliente_id` INT NOT NULL,
  PRIMARY KEY (`compra_id`),
  INDEX `fk_Compra_Clientes1_idx` (`Clientes_cliente_id` ASC),
  CONSTRAINT `fk_Compra_Clientes1`
    FOREIGN KEY (`Clientes_cliente_id`)
    REFERENCES `db-maquillaje`.`Clientes` (`cliente_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-maquillaje`.`detalle_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-maquillaje`.`detalle_compra` (
  `detalle_compra_id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NULL,
  `cantidad` INT NOT NULL,
  `precio` INT NOT NULL,
  `compra_id` INT NULL,
  `Compra_compra_id` INT NOT NULL,
  `productos_producto_id` INT NOT NULL,
  PRIMARY KEY (`detalle_compra_id`),
  INDEX `fk_detalle_boletas_Compra1_idx` (`Compra_compra_id` ASC),
  INDEX `fk_detalle_compra_productos1_idx` (`productos_producto_id` ASC),
  CONSTRAINT `fk_detalle_boletas_Compra1`
    FOREIGN KEY (`Compra_compra_id`)
    REFERENCES `db-maquillaje`.`Compra` (`compra_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_compra_productos1`
    FOREIGN KEY (`productos_producto_id`)
    REFERENCES `db-maquillaje`.`productos` (`producto_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
