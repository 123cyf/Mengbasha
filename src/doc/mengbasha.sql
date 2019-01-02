/*
Navicat MySQL Data Transfer

Source Server         : study
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mengbasha

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-01-02 11:26:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for denglu
-- ----------------------------
DROP TABLE IF EXISTS `denglu`;
CREATE TABLE `denglu` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of denglu
-- ----------------------------
INSERT INTO `denglu` VALUES ('1', '15590876666', '123');
INSERT INTO `denglu` VALUES ('2', '13666668888', '12345');
INSERT INTO `denglu` VALUES ('3', '13837712345', '123456');
INSERT INTO `denglu` VALUES ('12', '12345', '12345');

-- ----------------------------
-- Table structure for shoppinglist
-- ----------------------------
DROP TABLE IF EXISTS `shoppinglist`;
CREATE TABLE `shoppinglist` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) CHARACTER SET utf8 NOT NULL,
  `info1` varchar(255) CHARACTER SET utf8 NOT NULL,
  `yuanjia` float(255,2) unsigned NOT NULL,
  `xianjia` float(255,2) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shoppinglist
-- ----------------------------
INSERT INTO `shoppinglist` VALUES ('1', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('2', 'images/list_pro2.jpg', '流苏裙针织衫', '300.00', '200.00');
INSERT INTO `shoppinglist` VALUES ('3', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');
INSERT INTO `shoppinglist` VALUES ('4', 'images/side1.jpg', '落肩彩虹针织', '1316.00', '1314.00');
INSERT INTO `shoppinglist` VALUES ('5', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('6', 'images/list_pro2.jpg', '提花高领', '699.00', '399.00');
INSERT INTO `shoppinglist` VALUES ('7', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');
INSERT INTO `shoppinglist` VALUES ('8', 'images/side1.jpg', '落肩彩虹针织', '1316.00', '1314.00');
INSERT INTO `shoppinglist` VALUES ('9', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('10', 'images/list_pro2.jpg', '提花高领', '699.00', '399.00');
INSERT INTO `shoppinglist` VALUES ('11', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');
INSERT INTO `shoppinglist` VALUES ('12', 'images/side1.jpg', '落肩彩虹针织', '1316.00', '1314.00');
INSERT INTO `shoppinglist` VALUES ('13', 'images/list_pro2.jpg', '提花高领', '699.00', '399.00');
INSERT INTO `shoppinglist` VALUES ('14', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');
INSERT INTO `shoppinglist` VALUES ('15', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('16', 'images/side1.jpg', '落肩彩虹针织', '1316.00', '1314.00');
INSERT INTO `shoppinglist` VALUES ('17', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('18', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');
INSERT INTO `shoppinglist` VALUES ('19', 'images/list_pro1.jpg', '欣然原创改良汉服', '399.00', '199.00');
INSERT INTO `shoppinglist` VALUES ('20', 'images/list_pro3.jpg', '文艺范儿少女', '888.00', '666.00');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `info1` varchar(255) DEFAULT NULL,
  `info2` varchar(255) DEFAULT NULL,
  `yuanjia` float(255,0) unsigned DEFAULT NULL,
  `xianjia` float(255,0) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('1', 'images/list_pro1.jpg', '欣然原创改良汉服', '汉服装饰', '399', '199');
INSERT INTO `shouye` VALUES ('2', 'images/list_pro2.jpg', '提花高领', '连帽衫', '699', '399');
INSERT INTO `shouye` VALUES ('3', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('4', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('5', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
INSERT INTO `shouye` VALUES ('6', 'images/list_pro1.jpg', '欣然原创改良汉服', '汉服装饰', '399', '199');
INSERT INTO `shouye` VALUES ('7', 'images/list_pro2.jpg', '提花高领', '连帽衫', '699', '399');
INSERT INTO `shouye` VALUES ('8', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('9', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('10', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
INSERT INTO `shouye` VALUES ('11', 'images/list_pro1.jpg', '欣然原创改良汉服', '汉服装饰', '399', '199');
INSERT INTO `shouye` VALUES ('12', 'images/list_pro2.jpg', '提花高领', '连帽衫', '699', '399');
INSERT INTO `shouye` VALUES ('13', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('14', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('15', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
INSERT INTO `shouye` VALUES ('16', 'images/list_pro1.jpg', '欣然原创改良汉服', '汉服装饰', '399', '199');
INSERT INTO `shouye` VALUES ('17', 'images/list_pro2.jpg', '提花高领', '连帽衫', '699', '399');
INSERT INTO `shouye` VALUES ('18', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('19', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('20', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
INSERT INTO `shouye` VALUES ('21', 'images/list_pro1.jpg', '欣然原创改良汉服', '汉服装饰', '399', '199');
INSERT INTO `shouye` VALUES ('22', 'images/list_pro2.jpg', '提花高领', '连帽衫', '699', '399');
INSERT INTO `shouye` VALUES ('23', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('24', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('25', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
INSERT INTO `shouye` VALUES ('26', 'images/list_pro3.jpg', '文艺拼接', '文艺范儿少女', '888', '666');
INSERT INTO `shouye` VALUES ('27', 'images/side1.jpg', '落肩彩虹针织', '针织衫', '1316', '1314');
INSERT INTO `shouye` VALUES ('28', 'images/side2.jpg', '时尚休闲字母卫衣', '加绒粉色卫衣', '521', '520');
SET FOREIGN_KEY_CHECKS=1;
