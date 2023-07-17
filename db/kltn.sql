/*
 Navicat Premium Data Transfer

 Source Server         : mysql-local
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : kltn

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 17/07/2023 20:57:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for critical_assessment
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment`;
CREATE TABLE `critical_assessment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `analysis_results` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `feedback_lecturer_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `council_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `behavior` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_ca_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_ca_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_ca_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_ca_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of critical_assessment
-- ----------------------------

-- ----------------------------
-- Table structure for critical_assessment_score
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment_score`;
CREATE TABLE `critical_assessment_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ca_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score_1` double NOT NULL,
  `score_2` double NOT NULL,
  `score_3` double NOT NULL,
  `total_score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_cas_ca`(`ca_id` ASC) USING BTREE,
  INDEX `fk_cas_user`(`student_id` ASC) USING BTREE,
  CONSTRAINT `fk_cas_ca` FOREIGN KEY (`ca_id`) REFERENCES `critical_assessment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cas_user` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of critical_assessment_score
-- ----------------------------

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification
-- ----------------------------
INSERT INTO `notification` VALUES ('0001', 'Thông báo B', 'Nội dung', b'0', 12345, 1687277474320);
INSERT INTO `notification` VALUES ('01f486a4-5fcd-45d5-86bb-85b9b114b230', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358937005, 1687358937005);
INSERT INTO `notification` VALUES ('1ee563f8-8fdc-46a6-a6c3-8eaebadffb5d', 'asd', '<p>asdsad</p>', b'0', 1688476596618, 1688476596618);
INSERT INTO `notification` VALUES ('2ba9feb4-2455-4081-bb5d-b577673af2ad', 'Thong bao C', '<p>Hello</p>', b'0', 1688910331798, 1688918607903);
INSERT INTO `notification` VALUES ('3d3c49bd-522e-47bf-a2a6-0e6deb95de19', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358912412, 1687358912412);
INSERT INTO `notification` VALUES ('624391cd-c43c-4a8b-a0c7-b544727fc4d6', 'Thông báo B', '<p>ádsa</p>', b'0', 1687359299972, 1687359299972);
INSERT INTO `notification` VALUES ('ba1df643-47ca-47a2-b267-6c3c1a16031e', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358864583, 1687358864583);
INSERT INTO `notification` VALUES ('baad4006-629f-452a-aeca-5d85ac384688', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358847057, 1687358847057);

-- ----------------------------
-- Table structure for notification_attachment
-- ----------------------------
DROP TABLE IF EXISTS `notification_attachment`;
CREATE TABLE `notification_attachment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `notification_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `attachment_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_notification_attachment`(`notification_id` ASC) USING BTREE,
  CONSTRAINT `fk_notification_attachment` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification_attachment
-- ----------------------------
INSERT INTO `notification_attachment` VALUES ('069a1e7c-4f09-44d1-b932-5d01568d9e71', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1687359293189?alt=media&token=16cb07e3-b014-4bbe-b758-9cb20d6717d9', b'0', 1687359299995, 0);
INSERT INTO `notification_attachment` VALUES ('85cd480e-039d-4253-91c4-a31ff8e02698', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', '1', b'0', 1687277474330, 0);
INSERT INTO `notification_attachment` VALUES ('b1b23655-d8b7-41c5-b641-8981d7d0d4c9', '2ba9feb4-2455-4081-bb5d-b577673af2ad', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1688918603976?alt=media&token=b47cce12-7be8-4f35-a511-b16d99b561a8', b'0', 1688918607925, 1688918607925);
INSERT INTO `notification_attachment` VALUES ('b384178b-53d1-48b8-ba7a-efb3f2ba1f98', '2ba9feb4-2455-4081-bb5d-b577673af2ad', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1688910001484?alt=media&token=4182b68c-cab8-4936-b810-8cc7e8c2611f', b'0', 1688918607925, 1688918607925);
INSERT INTO `notification_attachment` VALUES ('b57a1ede-cd6c-4d03-8cc3-fb5457e1554f', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', '2', b'0', 1687277474330, 0);

-- ----------------------------
-- Table structure for protection_rating
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating`;
CREATE TABLE `protection_rating`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `page_number` int NOT NULL,
  `chapter_number` int NOT NULL,
  `table_number` int NOT NULL,
  `chart_bumber` int NOT NULL,
  `drawing_board_number` int NOT NULL,
  `image_number` int NOT NULL,
  `document_number` int NOT NULL,
  `calculation_software_number` int NOT NULL,
  `layout` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `writing` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `technical_terms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `advantage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `defect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `conclude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `suggestion` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bit(1) NOT NULL,
  `updated_at` bit(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_pr_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_pr_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_pr_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_pr_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating
-- ----------------------------

-- ----------------------------
-- Table structure for protection_rating_question
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating_question`;
CREATE TABLE `protection_rating_question`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating_question
-- ----------------------------

-- ----------------------------
-- Table structure for protection_rating_score
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating_score`;
CREATE TABLE `protection_rating_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating_score
-- ----------------------------

-- ----------------------------
-- Table structure for refresh_token
-- ----------------------------
DROP TABLE IF EXISTS `refresh_token`;
CREATE TABLE `refresh_token`  (
  `token` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `expiration_date` datetime NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`token`) USING BTREE,
  INDEX `fk_rf_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_rf_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of refresh_token
-- ----------------------------
INSERT INTO `refresh_token` VALUES ('07f55b02-500f-4a36-9eb6-7e7e35524d0f', 'caadasdcc-sdadas', '2023-07-23 00:00:00', 12321321, 123213);
INSERT INTO `refresh_token` VALUES ('15051bf0-819f-433c-bbf5-b1c59be4144f', 'caadasdcc-sdadas', '2023-07-24 00:00:00', 1688909707653, 1688909707653);
INSERT INTO `refresh_token` VALUES ('1f944380-6494-471f-a4b2-8f7b71709a75', 'caadasdcc-sdadas', '2023-08-01 00:00:00', 1689567566622, 1689567566622);
INSERT INTO `refresh_token` VALUES ('2def5db8-aefb-4fd4-80f4-51d7d7613e5e', 'caadasdcc-sdadas', '2023-07-21 00:00:00', 123123, 123123);
INSERT INTO `refresh_token` VALUES ('47c5fb31-8129-40c9-ae1b-ff4a75d09d0a', 'caadasdcc-sdadas', '2023-08-01 00:00:00', 1689574879695, 1689574879695);
INSERT INTO `refresh_token` VALUES ('7048319f-1830-4012-b71e-7baa0c092d1f', 'caadasdcc-sdadas', '2023-07-21 00:00:00', 213213, 213123);
INSERT INTO `refresh_token` VALUES ('72da728c-ad95-44a4-af77-f976570c959d', 'caadasdcc-sdadas', '2023-07-24 00:00:00', 1688909974321, 1688909974321);
INSERT INTO `refresh_token` VALUES ('835ea04c-cd0a-4bd1-9e3d-ab8a3c381474', 'caadasdcc-sdadas', '2023-07-24 00:00:00', 1688909784654, 1688909784654);
INSERT INTO `refresh_token` VALUES ('8877ea36-3d02-4d95-92b3-ecee4f6f12b8', 'caadasdcc-sdadas', '2023-07-21 00:00:00', 123213, 123213);
INSERT INTO `refresh_token` VALUES ('8cadd9a5-2d67-4546-9672-74dcb6f1dedc', 'caadasdcc-sdadas', '2023-07-24 00:00:00', 1688909944529, 1688909944529);
INSERT INTO `refresh_token` VALUES ('9ca4ea6f-8f36-40fd-bef5-0f2189c20c5d', 'caadasdcc-sdadas', '2023-08-01 00:00:00', 1689567541030, 1689567541030);
INSERT INTO `refresh_token` VALUES ('b28ba24d-03f5-4fcb-adb6-f3306b1aadbf', 'caadasdcc-sdadas', '2023-07-25 00:00:00', 1688997230055, 1688997230055);
INSERT INTO `refresh_token` VALUES ('b4b6fbae-df37-4c2d-9c74-0bcd05c4ebb9', 'caadasdcc-sdadas', '2023-08-01 00:00:00', 1689567519281, 1689567519281);
INSERT INTO `refresh_token` VALUES ('df2d1b9b-7c9e-46e8-990c-5154f3dfe19c', 'caadasdcc-sdadas', '2023-07-24 00:00:00', 1688909961889, 1688909961889);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` int NOT NULL,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'ADMIN', b'0', 0, 0);
INSERT INTO `role` VALUES (2, 'MINISTRY', b'0', 0, 0);
INSERT INTO `role` VALUES (3, 'COUNCIL', b'0', 0, 0);
INSERT INTO `role` VALUES (4, 'STUDENT', b'0', 0, 0);

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role_id` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_role_user`(`role_id` ASC) USING BTREE,
  INDEX `fk_user_role`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_role_user` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_user_role` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_user
-- ----------------------------
INSERT INTO `role_user` VALUES ('0001', 'caadasdcc-sdadas', 1, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0002', 'caadasdcc-sdadas', 4, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0003', 'caadasdcc-sdadas', 3, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0004', 'caadasdcc-sdadas', 2, b'0', 0, 0);

-- ----------------------------
-- Table structure for thesis
-- ----------------------------
DROP TABLE IF EXISTS `thesis`;
CREATE TABLE `thesis`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `year` int NOT NULL,
  `semester` int NOT NULL,
  `status` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis
-- ----------------------------
INSERT INTO `thesis` VALUES ('0001', 'Hello', 'Khong co gi het', 2023, 1, 1, b'0', 1231232, 123123);

-- ----------------------------
-- Table structure for thesis_outline_comment
-- ----------------------------
DROP TABLE IF EXISTS `thesis_outline_comment`;
CREATE TABLE `thesis_outline_comment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `order` int NULL DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_to_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_to_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_to_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_to_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_outline_comment
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_register_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_register_calendar`;
CREATE TABLE `thesis_register_calendar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `start_at` bigint NOT NULL,
  `end_at` bigint NOT NULL,
  `active` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_register_calendar
-- ----------------------------
INSERT INTO `thesis_register_calendar` VALUES (3, 1689576730550, 1692859930550, b'0', b'0', 1689576733906, 1689576733906);

-- ----------------------------
-- Table structure for thesis_report_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_report_calendar`;
CREATE TABLE `thesis_report_calendar`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` bigint NOT NULL,
  `type` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_report_calendar
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_user
-- ----------------------------
DROP TABLE IF EXISTS `thesis_user`;
CREATE TABLE `thesis_user`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_thesis_user_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_thesis_user_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_thesis_user_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_thesis_user_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_user
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `birthday` date NULL DEFAULT NULL,
  `faculty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `student_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `is_deleted` bit(1) NULL DEFAULT NULL,
  `created_at` bigint NULL DEFAULT NULL,
  `updated_at` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('caadasdcc-sdadas', 'chau-nm', '$2a$12$k.cYiDQKkwoEtQ/5RCKnneXD1rOrMidAkMWDE4tems3u1PstBRZXS', 'Nguyen Van B', '2005-06-22', 'CNTT', 'DH19DTA', b'0', 1232131321, 1687074361598);

SET FOREIGN_KEY_CHECKS = 1;
